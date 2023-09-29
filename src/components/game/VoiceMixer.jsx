import React from 'react';
import { useSelector } from 'react-redux';

import VoiceTrack from './VoiceTrack';

import "./AudioMixer.scss";

const VoiceMixer = (props) => {
    const voices = useSelector((state) => state.scene.sceneContent.voices);

    return (
        <div className="audio-mixer">
            {voices.map((item) => {
                return (<VoiceTrack track={item} key={item.tag} />)
            })}
        </div>
    );
}

export default VoiceMixer;
