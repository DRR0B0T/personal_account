import React from 'react';
import {Outlet} from "react-router-dom";
import MainPage from "../pages/MainPage";

const Layout = () => {
    return (
        <div>
            <MainPage/>
            <Outlet />
        </div>
    );
};

export default Layout;
