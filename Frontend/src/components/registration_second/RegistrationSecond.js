import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import './RegistrationSecond.css';
import { options_categorie, options_cities } from '../../Values'

  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: "none"
    })
  };

class RegistrationSecond extends Component {
    state = {
        "isActive": false,
        "categories": [],
        "work_cities": [],
        "description": '',
        "price_per_hour": null,
        "id": ''
    }

    componentDidMount() {
        fetch('process.env.REACT_APP_API_URL/me', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((response)=> {
            return response.json()
        })
        .then((data)=> {
            console.log("i'm here")
            this.setState({id: data.id})
            console.log(data)
        })
    }

    changeCategoriesHandler = (newCategories) => {
        this.setState({categories: newCategories})
    }

    changeCitiesHandler = (newCities) => {
        this.setState({work_cities: newCities})
    }

    changePriceHandler = (event) => {
        this.setState({price_per_hour: event.target.value})
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value})
        
    }

    clickHandler = (event) => {
        event.preventDefault();
        const body_send = {
            id: this.state.id,
            categories: this.state.categories.map((option) => option.value).join(', '), 
            work_cities: this.state.work_cities.map((option) => option.value).join(', '), 
            price_per_hour: this.state.price_per_hour, 
            description: this.state.description
        }
        fetch(`process.env.REACT_APP_API_URL/users/${this.state.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(body_send), 
        })
        .then((response)=> {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            this.props.history.push("/home");
        })
    }

    render() {
        
        if (!this.state.id) {
            return null;
        }
        return (
            <div className="wrapper" >
                <div className="arrow">
                    <Link to="/sign-up">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27702 11.3338H19.3334C19.7015 11.3338 20 11.6322 20 12.0004C20 12.3686 19.7015 12.667 19.3334 12.667H6.27702L10.4727 16.8614C10.7334 17.122 10.7334 17.5447 10.4727 17.8053C10.2121 18.066 9.78944 18.066 9.52878 17.8053L4.19584 12.4724C4.07046 12.3473 4 12.1775 4 12.0004C4 11.8233 4.07046 11.6535 4.19584 11.5284L9.52878 6.19551C9.6974 6.02689 9.94316 5.96104 10.1735 6.02276C10.4038 6.08448 10.5837 6.26439 10.6455 6.49472C10.7072 6.72506 10.6413 6.97082 10.4727 7.13944L6.27702 11.3338Z" fill="#121924"/>
                        </svg>
                    </Link>
                </div>
                <h1 className="registration_title">For perfomers</h1>
                <h2 className="registration_post_title">Please write your information below<br/> if you want to be a helper</h2>
                <Select name="Categories" value={this.state.categories} placeholder="Categories" styles={style} className="registration_input input select" isMulti options={options_categorie} onChange={this.changeCategoriesHandler} />
                <Select name="CitiesForWork" value={this.state.work_cities} placeholder="Cities convenient for work" styles={style} className="registration_input input select" isMulti options={options_cities} onChange={this.changeCitiesHandler}/>
                <input name="PricePerHour" value={this.state.price_per_hour} placeholder="Price per hour, NIS" className="registration_input input" onChange={this.changePriceHandler}/><br/>
                <textarea name="AboutPerformer" value={this.state.description} placeholder="About you" className="textarea" onChange={this.changeDescriptionHandler}></textarea>
                <button className="sign_up" disabled={this.state.isActive} onClick={this.clickHandler}>Let's start</button>
                {/* <textarea name="AboutTask" value={this.state.description}  placeholder="About task" className="textarea" onChange={this.changeDescriptionHandler}></textarea>
 */}
            </div>
        )
    }
}

export default RegistrationSecond;