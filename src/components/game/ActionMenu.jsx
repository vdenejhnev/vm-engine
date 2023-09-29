import React, { useEffect } from 'react';
import "./ActionMenu.scss";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setAutoPlay } from '../../store/sceneSlice';

const ActionMenu = (props) => {
    const replicaData = useSelector((state) => state.scene.sceneContent.replica);
    const autoplay = useSelector((state) => state.scene.autoplay);
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [autoplay]);

    return (
        <div className="action-menu">
            <h2 className="action-menu__person-name" style={{color: replicaData.colorHex}}>{replicaData.name}</h2>
            <p className="action-menu__person-replica">{replicaData.text}</p>
            <div className="action-menu__actions">
            <ul className="action-menu__actions-list">
                <li className="action-menu__actions-item" onClick={props.backStep}>Назад</li>
                <li className="action-menu__actions-item"><NavLink to="/game/menu">Меню</NavLink></li>
                <li className="action-menu__actions-item"><NavLink to="/game/menu/load">Загрузить</NavLink></li>
                <li className={"action-menu__actions-item" + (autoplay ? " active" : "")} onClick={() => dispatch(setAutoPlay(!autoplay))}>Авто</li>
                <li className="action-menu__actions-item" onClick={props.nextStep}>Вперед</li>
            </ul>
            </div>
        </div>
    );
}

export default ActionMenu;
