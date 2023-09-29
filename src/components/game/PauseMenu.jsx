import React from 'react';
import "./PauseMenu.scss";

import { Outlet } from 'react-router-dom';

const PauseMenu = () => {
    return (
        <div className="pause-menu fs-block">
            <div className="overlay fs-block"></div>
            <Outlet />
        </div>
    );
}

export default PauseMenu;
