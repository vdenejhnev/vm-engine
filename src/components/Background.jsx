import React from 'react';
import ImageDepthMap from 'react-depth-map';

import "./Background.scss";

const Background = (props) => {
    return (
        <div className="background fs-block" style={{backgroundImage: `url(${props.backUrl})`}}></div>
    );
}

export default Background;
