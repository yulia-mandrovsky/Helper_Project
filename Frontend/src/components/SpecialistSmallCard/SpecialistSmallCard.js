import React, { Component } from 'react';
import './SpecialistSmallCard.css';
import Specialist from './Specialist.png';


class SpecialistSmallCard extends Component {
    render() {
    const {specialist} = this.props;
        return (
            <div className="card_wrapper">
                <div className="image_wrapper">
                <img src={Specialist} alt="Specialist" height="80px" />
                </div>
                <div className="text_wrapper">
                    <div className="title_wrapper">
                        <h2 className="card_title">{specialist.name}</h2>
                    </div>
                    <div className="card_row">
                        <p>Categorie</p><p>{specialist.categorie}</p>
                    </div>
                    <div className="card_row">
                        <p>City</p><p>{specialist.city}</p>
                    </div>
                    <div className="card_row">
                        <p>Price Per Hour</p><p>{specialist.PricePerHour}</p>
                    </div>
                    <div className="card_row description_row">
                        <p className="ongoing_card_label">Description</p>
                        <p className="p_description">{specialist.description}</p>
                    </div>
                    <div className="card_row button_row">
                        <button className="card_button show_button contacts_button">Contacts</button>
                    </div>
                </div>
            </div>
        )
        }  
}

export default SpecialistSmallCard;