import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../lib/useAuth';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRole?: 'admin' | 'client';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRole }) => {
    const { user, role, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen bg-cta flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (allowedRole && role !== allowedRole) {
        // Redirect to their respective dashboards if they have the wrong role
        return <Navigate to={role === 'admin' ? '/admin' : '/portal'} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
