import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./PauseMenuSave.scss";

const PauseMenuSave = (props) => {
    const navigate = useNavigate();

    return (
        <div className="pause-menu__panel save-menu">
            <h2 className="pause-menu__menu-text">Игра сохранена</h2>
            <p className="pause-menu__back" onClick={() => navigate(-1)}>Назад</p>
        </div>
    );
}

export default PauseMenuSave;
