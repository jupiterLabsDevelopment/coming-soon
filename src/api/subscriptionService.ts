import apiClient from './apiClient';
import API_ROUTES from '../config/apiRoutes';

/**
 * Subscribes an email to the subscription service.
 * 
 * @param email - The email to subscribe.
 * @returns A promise that resolves to a string indicating the result of the subscription.
 * @throws {Error} If the subscription fails.
 * @throws {Error} If the email is already subscribed.
 * @throws {Error} If the request times out.
 */
export const subscribe = async (email: string): Promise<string> => {
    try {
        const response = await apiClient.post(API_ROUTES.subscribe, { email });

        if (response.status !== 201) {
            throw new Error('Unexpected response');
        }

        return 'Subscription successful!';
    } catch (error: any) {
        if (error.response?.status === 422) {
            throw new Error('The email is already subscribed.');
        }

        if (error.code === 'ECONNABORTED') {
            throw new Error('Request timed out. Please try again.');
        }

        throw new Error('Subscription failed. Please try again.');
    }
};
