import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PauseMenuSaveItem from './PauseMenuSaveItem';

import "./PauseMenuLoad.scss";

const PauseMenuLoad = () => {
    const navigate = useNavigate();

    const saves = useSelector((state) => state.saves.saves);

    return (
        <div className="pause-menu__panel load-game">
            <div className="pause-menu__back-button" onClick={() => navigate(-1)}>&#171; Назад</div>
            <h2 className="pause-menu__menu-text">Загрузить сохранение</h2>
            <ul className="pause-menu__save-list">
                { saves.map((item) => {
                    return (
                        <PauseMenuSaveItem key={item.id} saveData={item} />
                    )
                })}
            </ul>
        </div>
    );
}

export default PauseMenuLoad;
