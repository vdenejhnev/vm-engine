import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import "./AudioMixer.scss";

const AudioMixer = (props) => {
    return (
        <div className="audio-mixer">
            {props.tracks.map((item) => {
                return (
                    <audio key={item.tag} id="track" className="audio-mixer__track" loop autoPlay type="audio/mpen track;g" src={item.src} onLoadStart={(e) => e.target.volume = item.volume}>Hello world</audio>
                );
            })}
        </div>
    );
}

export default AudioMixer;
