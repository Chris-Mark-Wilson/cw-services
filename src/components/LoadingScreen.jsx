import React from 'react';
import { LoadingSpinner } from './manage_galleries_components/LoadingSpinner';

export const LoadingScreen = () => {
    return (
        <section className="loading-screen">
        <div className="loading-spinner">
            <LoadingSpinner message="Loading..." />
        </div>
        </section>
    );
    }