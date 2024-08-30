/**
 * API_ROUTES object containing the available API routes.
 */
export const API_ROUTES = {
    /**
     * Subscribe route.
     *
     * @method POST
     * @param email - The email to subscribe.
     * 
     * @returns A promise that resolves to a string indicating the result of the subscription.
     */
    subscribe: '/api/subscribe',

    /**
     * Health check route.
     *
     * @method GET
     *
     * @returns A promise that resolves to a boolean indicating the health status of the service.
     */
    health: '/health',
};

export default API_ROUTES;