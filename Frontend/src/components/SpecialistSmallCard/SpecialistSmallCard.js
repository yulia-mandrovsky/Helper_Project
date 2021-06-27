import React, { Component } from 'react';
import './SpecialistSmallCard.css';
import Specialist from './Specialist.png';


class SpecialistSmallCard extends Component {
    render() {
    const {helper} = this.props;
    console.log(helper)
        return (
            <div className="specialist_card_wrapper">
                <div className="specialist_card_image_wrapper">
                <img src={Specialist} alt="Helper" className="specialist_card_image" height="80px" />
                </div>
                <div className="specialist_card_text_wrapper">
                    <div className="specialist_card_title_wrapper">
                        <h2 className="specialist_card_title">{helper.username}</h2>
                    </div>
                    <div className="specialist_card_row">
                        <p>Categories</p><p className="specialist_card_info">{helper.categories}</p>
                    </div>
                    <div className="specialist_card_row">
                        <p>Languages</p><p className="specialist_card_info">{helper.languages}</p>
                    </div>
                    <div className="specialist_card_row">
                        <p>Desirable locations</p><p className="specialist_card_info">{helper.work_cities}</p>
                    </div>
                    <div className="specialist_card_row">
                        <p>Price Per Hour</p><p className="specialist_card_info">{helper.price_per_hour}</p>
                    </div>
                    <div className="specialist_card_row">
                        <p>Phone</p><p className="specialist_card_info"><a href={`tel://${helper.telephone}`}>{helper.telephone}</a></p>
                    </div>
                    <div className="specialist_card_row specialist_card_description_row">
                        <p className="specialist_card_label">Description</p>
                        <p className="specialist_card_description">{helper.description}</p>
                    </div>
                </div>
            </div>
        )
        }  
}

export default SpecialistSmallCard;