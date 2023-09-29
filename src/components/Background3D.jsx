import React from 'react';
import ImageDepthMap from 'react-depth-map';

import "./Background3D.scss";

const Background3D = (props) => {
    return (
        <ImageDepthMap
            originalImg={props.backSettings.img}
            depthImg={props.backSettings.map}
            verticalThreshold={25}
            horizontalThreshold={15}
        />
    );
}

export default Background3D;
