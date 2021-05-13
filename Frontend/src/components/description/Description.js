import React, { Component } from 'react';
import './Description.css';
import ArtWork from './Artwork.png';

class Description extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="title">Helper</h1>
                <h2 className="post_title">Bring the best services to you</h2>
                <img src={ArtWork} alt="Artwork"/>
                <button className="button" >To Entrance</button>
                <button className="button" >To Registration</button>
            </div>
        )
    }
}

export default Description;