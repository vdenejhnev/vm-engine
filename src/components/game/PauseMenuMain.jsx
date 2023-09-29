import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { addSave } from '../../store/savesSlice';

import "./PauseMenuMain.scss";

const PauseMenuMain = (props) => {
    const currentStep = useSelector((state) => state.scene.currentStepNumber);
    const dispatch = useDispatch();

    return (
        <div className="pause-menu__panel main-menu">
            <h2 className="pause-menu__menu-text">Меню</h2>
            <ul className="pause__menu-list">
                <li className="pause__menu-item"><NavLink to="/game">Продолжить</NavLink></li>
                <li className="pause__menu-item"><NavLink to="save" onClick={() => dispatch(addSave({
                    step_id: currentStep,
                    screenshot: "https://nakid.world/novel/0.images/gg/b36787d4e038cac9644344ef2f9b0b8d1f5aa3b9165298ff77f2f5d4852e78b8.png",
                    day: 1,
                    sceneName: "Новое сохранение",
                }))}>Сохранить</NavLink></li>
                <li className="pause__menu-item"><NavLink to="load">Загрузить</NavLink></li>
                <li className="pause__menu-item"><NavLink to="exit">Выйти</NavLink></li>
            </ul>
        </div>
    );
}

export default PauseMenuMain;
