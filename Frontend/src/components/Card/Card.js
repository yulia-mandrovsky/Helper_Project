import React, { Component } from 'react';
import './Card.css';
import Cleaning from './cleaning.png';


class Card extends Component {
    render() {
    const {task} = this.props;

    // ~~~~~~~~ ACTIVE
        if (task.status === "active") {
        return (
            <div className="card_wrapper">
                <div className="image_wrapper">
                {/* Прописать условие выбора картинки по категории */}
                <img src={Cleaning} alt="Cleaning" height="80px" />
                <p className="frequency">{task.frequency}</p>
                </div>
                <div className="text_wrapper">
                    <div className="title_wrapper">
                        <h2 className="card_title">{task.name}</h2>
                    </div>
                    <div className="card_row">
                        <p>Categorie</p><p>{task.categorie}</p>
                    </div>
                    <div className="card_row">
                        <p>City</p><p>{task.city}</p>
                    </div>
                    <div className="card_row">
                        <p>Total Price</p><p>{task.price}</p>
                    </div>
                    <div className="card_row">
                        <p>Term</p><p>{task.term}</p>
                    </div>
                    <div className="card_row button_row">
                        <button className="card_button cancelling_button">Cancel</button>
                    </div>
                </div>
            </div>
        )
        } 
// ~~~~~~~~~~ ONGOING!!!
        if (task.status === "ongoing") {
            return (
                <div className="ongoing_card_wrapper">
                    <div className="ongoing_header_wrapper">
                        <div className="icon_wrapper">
                            <img src={Cleaning} alt="Cleaning" height="65px" />
                        </div>
                        <h2>{task.name}</h2>
                    </div>
                    <div className="ongoing_card_row">
                        <p className="ongoing_card_label">Categorie</p>
                        <p>{task.categorie}</p>
                    </div>
                    <div className="ongoing_card_row">
                        <p className="ongoing_card_label">Term</p>
                        <p>{task.term}</p>
                    </div>
                    <div className="ongoing_card_row">
                        <p className="ongoing_card_label">City</p>
                        <p>{task.city}</p>
                    </div>
                    <div className="ongoing_card_row">
                        <p className="ongoing_card_label">Frequency</p>
                        <p>{task.frequency}</p>
                    </div>
                    <div className="ongoing_card_row description_row">
                        <p className="ongoing_card_label">Description</p>
                        <p className="p_description">{task.description}</p>
                    </div>
                    <div className="ongoing_card_row">
                        <p className="ongoing_card_label">Price</p>
                        <p className="price">{task.price}</p>
                    </div>
                    <button className="confirm_button">Confirm</button>
                </div>
            )
        }
// ~~~~~~~~~~~ARCHIVED
        if (task.status === "archived") {
            return (
                <div className="card_wrapper archived_card_wrapper">
                <div className="image_wrapper">
                {/* Прописать условие выбора картинки по категории */}
                <img src={Cleaning} alt="Cleaning" height="80px" />
                <p className="frequency">{task.frequency}</p>
                </div>
                <div className="text_wrapper">
                    <div className="title_wrapper">
                        <h2 className="card_title">{task.name}</h2>
                    </div>
                    <div className="card_row">
                        <p>Categorie</p><p>{task.categorie}</p>
                    </div>
                    <div className="card_row">
                        <p>Total Price</p><p>{task.price}</p>
                    </div>
                    <div className="card_row button_row">
                        <button className="card_button re_button">Re-booking</button>
                    </div>
                </div>
            </div>
            )
        }

        
    }
}

export default Card;