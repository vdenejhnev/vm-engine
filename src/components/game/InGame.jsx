import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { stepForward, stepBack, setAutoPlay } from '../../store/sceneSlice';
import { fetchScene } from '../../store/sceneSlice';

import AudioMixer from './AudioMixer';
import Background from "../Background";
import Background3D from '../Background3D';
import Persons from "./Persons";
import ActionMenu from './ActionMenu';
import VoiceMixer from './VoiceMixer';


const InGame = () => {
    const sceneData = useSelector((state) => state.scene);
    const dispatch = useDispatch();

    const [currentAutoplayState, setCurrentAutoplayState] = useState(false);
    const [stepForwardTimeout, setStepForwardTimeout] = useState();
    
    
    const nextStep = () => {
        dispatch(setAutoPlay(false));
        
        dispatch(stepForward({isLoad: false}));
    }
    
    const backStep = () => {
        dispatch(setAutoPlay(false));

        dispatch(stepBack({isLoad: false}));
    };

    const back = () => {
        if (sceneData.sceneOptions.backgroundImgUrls.length > 0) {
            if (sceneData.sceneOptions.backgroundImgUrls[0].map === "") return (<Background backUrl={sceneData.sceneOptions.backgroundImgUrls[0].img} />);
            else return (<Background3D backSettings={sceneData.sceneOptions.backgroundImgUrls[0]} />);
        }
        return (<div></div>);
    };

    useEffect(() => {
        if (sceneData.autoplay) {
            if (currentAutoplayState === false) {
                setCurrentAutoplayState(true);
                setTimeout(() => {
                    dispatch(stepForward());
                }, 20);
            } else {
                setStepForwardTimeout(setTimeout(() => {
                    dispatch(stepForward());
                }, sceneData.currentStepTime * 1000));
            }
        } else {
            setCurrentAutoplayState(false);
            clearTimeout(stepForwardTimeout);
        }
        if (sceneData.currentStepNumber === 0) dispatch(stepForward());
    }, [sceneData.autoplay, sceneData.currentStepTime]);

    return (
        <div className="in-game">
            {back()}
            <Persons nextStep={nextStep} />
            <ActionMenu backStep={backStep} nextStep={nextStep} />
            <AudioMixer tracks={sceneData.sceneOptions.tracks} />
            <VoiceMixer />
            <Outlet />
        </div>
    );
}

export default InGame;
