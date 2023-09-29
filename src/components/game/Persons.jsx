import React from 'react';

import { useSelector } from 'react-redux';
import SinglePerson from './SinglePerson';

import "./Persons.scss";


const Persons = (props) => {
    const sprites = useSelector((state) => state.scene.sceneContent.sprites);

    return (
        <div className="persons" onClick={props.nextStep}>
            { sprites.length > 0 && sprites.map((sprite) => {
                    return (
                        <SinglePerson 
                            key={sprite.tag}
                            personImgUrl={sprite.spriteUrl} 
                            scale={sprite.scale} 
                            order={sprite.order}
                            positionX={sprite.positionX}
                        />
                    );
                })
            }
        </div>
    );
}

export default Persons;
