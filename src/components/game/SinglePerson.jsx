import React from 'react';
import "./SinglePerson.scss";

const SinglePerson = (props) => {
    return (
        <div className="person" 
            style={
                {
                    width: `${props.scale / 2}vw`, 
                    zIndex: props.order,
                    transform: `translateX(${props.positionX / 2.5}vw)`
                }}>
            <img src={props.personImgUrl} alt=""/>
        </div>
    );
}

export default SinglePerson;
