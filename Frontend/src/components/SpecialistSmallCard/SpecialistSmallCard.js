import React, { Component } from 'react';
import './SpecialistSmallCard.css';
import Specialist from './Specialist.png';


class SpecialistSmallCard extends Component {
    render() {
    const {helper} = this.props;
    console.log(helper)
        return (
            <div className="specialist_card_wrapper">
                <div className="image_wrapper">
                <img src={Specialist} alt="Helper" height="80px" />
                </div>
                <div className="text_wrapper">
                    <div className="title_wrapper">
                        <h2 className="card_title">{helper.username}</h2>
                    </div>
                    <div className="card_row">
                        <p>Categories</p><p className="p_info">{helper.categories}</p>
                    </div>
                    <div className="card_row">
                        <p>Languages</p><p className="p_info">{helper.languages}</p>
                    </div>
                    <div className="card_row">
                        <p>Desirable locations</p><p className="p_info">{helper.work_cities}</p>
                    </div>
                    <div className="card_row">
                        <p>Price Per Hour</p><p className="p_info">{helper.price_per_hour}</p>
                    </div>
                    <div className="card_row">
                        <p>Phone</p><p className="p_info"><a href={`tel://${helper.telephone}`}>{helper.telephone}</a></p>
                    </div>
                    <div className="card_row description_row">
                        <p className="ongoing_card_label">Description</p>
                        <p className="p_description">{helper.description}</p>
                    </div>
                    {/* <div className="card_row button_row">
                        <button className="helper_card_button show_button contacts_button">Contacts</button>
                    </div> */}
                </div>
            </div>
        )
        }  
}

export default SpecialistSmallCard;