import React, { Component } from 'react';

class HouseList extends Component {
    returnHouses(){
        return this.props.houses.map((house, index) => {
            return <div key={index} 
                        onClick={() => this.props.selectFirehouse(house)}
                        className="house-ind"
                    >
                        <h3>{house.FacilityName}</h3>
                        <p>Address: {house.FacilityAddress} </p>
                        <p>Borough: {house.Borough} </p>
                    </div>
        });
    }
    render(){
        return (
            <div className="house-list">
                {this.returnHouses()}
            </div>
        );
    }
}

export default HouseList;