import { createApi } from 'convex/react';
import { api as convexApi } from '../backend/convex/_generated/api'; // Adjust the path as necessary

export const api = createApi(convexApi, {
    url: process.env.REACT_APP_CONVEX_URL, // Use the environment variable
});