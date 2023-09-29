import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {useAudio} from 'react-use';

import { stopPlayVoice } from '../../store/sceneSlice';

import "./AudioMixer.scss";

const VoiceTrack = (props) => {
    const dispatch = useDispatch();

    const [playTimeOut, setPlayTimeOut] = useState();

    const [audio, state, controls, ref] = useAudio({
        src: props.track.src,
        loop: false,
    });

    useEffect(() => {
        controls.pause();
        
        clearTimeout(playTimeOut);
        if (props.track.play) {
            ref.current.currentTime = props.track.playFrom;
            controls.play();
            setPlayTimeOut(setTimeout(() => {
                controls.pause();
                dispatch(stopPlayVoice(props.track.tag));
            }, ((props.track.playTo * 1000) - (props.track.playFrom * 1000))));
        }
        else {
            controls.pause();
            clearTimeout(playTimeOut);
        }
    }, [props.track.playTo]);

    return (
        <div className="audio-mixer__voice-track">
            {audio}
        </div>
    );
}

export default VoiceTrack;
