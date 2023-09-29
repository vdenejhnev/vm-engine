import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Background from "../Background";
import Background3D from '../Background3D';
import AudioMixer from '../game/AudioMixer';

import "./InMenu.scss";

const InMenu = () => {
    const options = useSelector((state) => state.mainMenu);

    useEffect(() => {
        
    }, []);

    return (
        <div className="inMenu menu">
            { options.backImg.map === "" ?
                <Background backUrl={options.backImg.img} />
            : 
                <Background3D backSettings={options.backImg} />
            }
            <AudioMixer tracks={[options.backAudio]} />
            <Outlet />
        </div>
    );
}

export default InMenu;
