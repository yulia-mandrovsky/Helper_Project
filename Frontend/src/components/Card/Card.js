import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import Cleaning from './cleaning.png';
import Delivery from './delivery.png';
import Repairs from './repairs.png';
import Plumbing from './plumbing.png';
import Painting from './painting.png';
import Handyman from './handyman.png';

const images_by_categorie = {
    Cleaning: Cleaning,
    Delivery: Delivery,
    Repairs: Repairs,
    Plumbing: Plumbing,
    Painting: Painting,
    Handyman: Handyman
  }

class Card extends Component {

    activeToArchiveTaskHandler = (event) => {
            event.preventDefault();
            const body = {
                status: "archived"
            }
            console.log(this.props.task.task_id)
            fetch(`http://localhost:2121/tasks/${this.props.task.task_id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(body),
            })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                // перезагрузить компонент
                // показывать только карточки с этим классом 
                // change class on buttons
            })
        
    }

    

    confirmToActiveHandler = (event) => {
        const {history} = this.props;
        // put status in task
        event.preventDefault();
        const body = {
            status: "active"
        }
        console.log(this.props.task.task_id)
        fetch(`http://localhost:2121/tasks/${this.props.task.task_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(body),
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            console.log(history)
            this.context.history.push('/home123')
            // перезагрузить компонент
        })
    }

    reBookHandler() {
        // post new task
    }

    render() {

    const {task} = this.props;
    console.log(typeof images_by_categorie[task.categorie])

    // ~~~~~~~~ ACTIVE
        if (task.status === "active") {
        return (
            <div className="card_wrapper">
                <div className="image_wrapper">
                {/* Прописать условие выбора картинки по категории */}
                {images_by_categorie[task.categorie] && <img src={images_by_categorie[task.categorie]} alt="some" height="80px" />}
                <p className="frequency">{task.frequency}</p>
                </div>
                <div className="text_wrapper">
                    <div className="title_wrapper">
                        <h2 className="card_title">{task.name}</h2>
                    </div>
                    <div className="card_row">
                        <p>Category</p><p>{task.categorie}</p>
                    </div>
                    <div className="card_row">
                        <p>City</p><p>{task.city}</p>
                    </div>
                    <div className="card_row">
                        <p>Total Price</p><p>{task.price}</p>
                    </div>
                    <div className="card_row">
                        <p>Phone</p><p>{task.phone}</p>
                    </div>
                    <div className="card_row button_row">
                        <button className="card_button cancelling_button" onClick={this.activeToArchiveTaskHandler}>Cancel</button>
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
                        {images_by_categorie[task.categorie] && <img src={images_by_categorie[task.categorie]} alt="some" height="80px" />}
                        </div>
                        <h2>{task.name}</h2>
                    </div>
                    <div className="ongoing_card_row">
                        <p className="ongoing_card_label">Categorie</p>
                        <p>{task.categorie}</p>
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
                    <div className="ongoing_card_row">
                        <p className="ongoing_card_label">Phone</p>
                        <p className="phone">{task.phone}</p>
                    </div>
                    <button className="confirm_button" onClick={this.confirmToActiveHandler}>Confirm</button>
                </div>
            )
        }
// ~~~~~~~~~~~ARCHIVED
        if (task.status === "archived") {
            return (
                <div className="archived_card_wrapper">
                <div className="image_wrapper">
                {/* Прописать условие выбора картинки по категории */}
                {images_by_categorie[task.categorie] && <img src={images_by_categorie[task.categorie]} alt="some" height="80px" />}
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
                        {/* <button className="re_button" onClick={this.reBookHandler}>Re-booking</button> */}
                    </div>
                </div>
            </div>
            )
        }
        console.log(task)
        return null;
    }
}

export default Card;