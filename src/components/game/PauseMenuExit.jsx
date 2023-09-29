import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import "./PauseMenuExit.scss";

const PauseMenuExit = () => {
    const navigate = useNavigate();

    return (
        <div className="pause-menu__panel exit active">
            <h2 className="pause-menu__menu-text">Вы действительно хотите выйти?</h2>
            <ul className="pause-menu__exit-selector">
                <li className="pause-menu__exit-item"><NavLink to="/">Да</NavLink></li>
                <li className="pause-menu__exit-item" onClick={() => navigate(-1)}>Нет</li>
            </ul>
        </div>
    );
}

export default PauseMenuExit;
