import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Description.css';
import ArtWork from './Artwork.png';

class Description extends Component {

    render() {
        return (
            <div className="wrapper">
                <h1 className="description_title">Helper</h1>
                <h2 className="post_title">Bring the best services to you</h2>
                <img src={ArtWork} alt="Artwork"/>
                <Link to="/sign-in" className="button link_button">Sign In</Link>
                <Link to="/sign-up" className="button link_button yellow">Sign Up</Link>
            </div>
        )
    }
}

export default Description;