import React from 'react';
import "./PauseMenuSaveItem.scss";
import { useDispatch } from 'react-redux';
import { setCurrentStep, setRenderedStep, loadStep } from "../../store/sceneSlice";
import { NavLink } from 'react-router-dom';

const PauseMenuSaveItem = (props) => {
    const dispatch = useDispatch();

    const loadSave = () => {
        dispatch(loadStep(props.saveData.step_id));
    }

    return (
        <NavLink to="/game" onClick={() => loadSave()}>
            <li className="pause-menu__save-item">
                <div className="pause-menu__save-pic" style={{backgroundImage: `url(${props.saveData.screenshot})`}}></div>
                <div className="pause-menu__save-data">
                    <p>{props.saveData.date}</p>
                    <p>День {props.saveData.day}</p>
                    <p>Сцена: {props.saveData.sceneName}</p>
                </div>
            </li>
        </NavLink>
        
    );
}

export default PauseMenuSaveItem;
