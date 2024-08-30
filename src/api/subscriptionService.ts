import { useTranslation } from "react-i18next";

import apiClient from './apiClient';
import API_ROUTES from '../config/apiRoutes';




/**
 * Checks the health of the service.
 * @returns A promise that resolves to a boolean indicating the health status of the service.
 */
export const checkServiceHealth = async (): Promise<boolean> => {
    try {
        const response = await apiClient.get(API_ROUTES.health);
        return response.status === 200;
    } catch {
        return false;
    }
};

/**
 * Subscribes an email to the service.
 * 
 * @param email - The email to subscribe.
 * @returns A promise that resolves to a string indicating the result of the subscription.
 * @throws An error if the service is unavailable, the response is unexpected, or the subscription fails.
 */
export const subscribe = async (email: string): Promise<string> => {

    const { t } = useTranslation();

    try {
        const isServiceHealthy = await checkServiceHealth();
        if (!isServiceHealthy) {
            throw new Error(t('serviceUnavailable'));
        }

        const response = await apiClient.post(API_ROUTES.subscribe, { email });

        if (response.status !== 201) {
            throw new Error('Unexpected response ' + response.status);
        }

        return t('subscribeResponse.success.title');

    } catch (error: any) {
        const message = error.response?.status === 422
            ? t('subscribeResponse.failure.message.duplicate')
            : error.code === 'ECONNABORTED'
                ? t('subscribeResponse.failure.message.timeout')
                : t('subscribeResponse.failure.message.unknown');

        throw new Error(message);
    }
};
