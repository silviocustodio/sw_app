import React, { Component } from 'react';

import ReactGiphy from  'react-giphy';

import {calculateResupplie, breakDistance} from '../scripts/calculateResupplie'


export default class SwapiList extends Component {

    
    renderSwapi(swapiData) {
       
        return swapiData.map(data => {
            const name = data.name;
            const mglt = data.MGLT;
            const consumables = data.consumables;
            const giphyName = `Star_Wars`;
            const distanceResupplie = breakDistance(consumables);
            const inputDistance = this.props.distance;
            const amountStops = calculateResupplie(distanceResupplie, inputDistance, mglt)
           
            return (
                <tr key={name}>
                    <td>
                        <ReactGiphy tag={giphyName}  /> <br />
                        <b>Name:</b> {name} <br />
                        <b>MGLT:</b> {mglt} <br />
                        <b>Consumables:</b> {consumables} <br />
                        <b>The total amount of stops required :</b> {amountStops} <br />
                    </td>
                </tr>
            );

        })
    }

    render() {
        if (typeof this.props.spaceships === undefined || this.props.spaceships.length === 0) {
            return( 
                <div>   
                    <h1>May the Force be with you!</h1>
                </div>
            )
        }

        else{
            return (
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Check the collection of all the star ships below!</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.renderSwapi(this.props.spaceships[0])}
                    </tbody>
                </table>
            )
        }
    }
}
