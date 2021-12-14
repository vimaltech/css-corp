import React, { Component, createRef, useState} from "react";
import './weather.css';

export default class Weather extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            foreCastData : [
                {id: 1, name: 'Delhi', temp: 10},
                {id: 2, name: 'Chennai', temp: 25},
                {id: 3, name: 'Coimbator', temp: 22},
                {id: 4, name: 'Kolkata', temp: 18},
                {id: 5, name: 'Hyderabad', temp: 21},
                {id: 6, name: 'Patna', temp: 6}
            ],
            foreCastResult : {},        
        };
    }

    inputRef = createRef();

    getForeCastData = (event) => {
        event.preventDefault();        // const todoText = document.getElementById('todoText').value;
        const txtCity = this.inputRef.current.value;
        this.setState(({ foreCastData }) => {
            const index = foreCastData.findIndex((x) => x.name.toLowerCase() === txtCity.toLowerCase());
            console.log(index);
            return {
                foreCastResult: index >= 0 ? foreCastData.at(index):  {},
            };
        });
    };

    render() {
        const { foreCastResult } = this.state;
        return (
            <div className="container">
                <h1>Weather in India</h1>
                <form onSubmit={this.getForeCastData}>
                    <input placeholder="Search for city" type="text" ref={this.inputRef}/>
                    <button type="submit">Temperature</button>
                </form>
                <div className="foreCastResult">
                    <div>{foreCastResult.name}</div>
                    <div>{foreCastResult.temp}</div>
                </div>
            </div>
        )
    }
}