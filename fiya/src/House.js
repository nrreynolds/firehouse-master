import React from 'react';

const House = (props) => {
    if(props.house){
        return (
            <div className="house">
                <h2>{props.house.FacilityName} </h2>
                <p> Address: {props.house.FacilityAddress} </p>
                <p> Borough: {props.house.Borough} </p>
            </div>
        );
    } else {
        return (
            <div className="house">
                <h2>Select A House </h2>
            </div>
        )
    }
}

export default House;