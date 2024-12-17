import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
