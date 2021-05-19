import React, { Component } from 'react';
import './SpecialistSmallCard.css';
import Specialist from './Specialist.png';


class SpecialistSmallCard extends Component {
    render() {
    const {helper} = this.props;
        return (
            <div className="card_wrapper">
                <div className="image_wrapper">
                <img src={Specialist} alt="Helper" height="80px" />
                </div>
                <div className="text_wrapper">
                    <div className="title_wrapper">
                        <h2 className="card_title">{helper.name}</h2>
                    </div>
                    <div className="card_row">
                        <p>Category</p><p>{helper.categorie}</p>
                    </div>
                    <div className="card_row">
                        <p>Desirable locations</p><p>{helper.city}</p>
                    </div>
                    <div className="card_row">
                        <p>Price Per Hour</p><p>{helper.PricePerHour}</p>
                    </div>
                    <div className="card_row">
                        <p>Phone</p><p>{helper.Phone}</p>
                    </div>
                    <div className="card_row description_row">
                        <p className="ongoing_card_label">Description</p>
                        <p className="p_description">{helper.description}</p>
                    </div>
                    {/* <div className="card_row button_row">
                        <button className="card_button show_button contacts_button">Contacts</button>
                    </div> */}
                </div>
            </div>
        )
        }  
}

export default SpecialistSmallCard;