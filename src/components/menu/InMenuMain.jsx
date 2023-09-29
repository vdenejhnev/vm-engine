import React from 'react';

import { NavLink } from 'react-router-dom';

const InMenuMain = () => {
        return (
            <div className="menu fs-block">
                <div className="menu__window">
                    <h1>Визуальная новелла нейм</h1>
                    <ul className="menu__list">
                        <li className="menu__item"><NavLink to="/game">Начать</NavLink></li>
                        <li className="menu__item"><NavLink to="/load">Загрузить</NavLink></li>
                    </ul>
                </div>
            </div>
        );
}

export default InMenuMain;
