import React from 'react';
import MenuBar from '../../shared/MenuBar/MenuBar';
import { Outlet } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginPage;