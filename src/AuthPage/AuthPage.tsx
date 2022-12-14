import React from 'react';

import './AuthPage.scss'
import {Outlet} from "react-router-dom";

const AuthPage: React.FC = () => {
    return (
        <div className="container">
            <div className="auth-page">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthPage;