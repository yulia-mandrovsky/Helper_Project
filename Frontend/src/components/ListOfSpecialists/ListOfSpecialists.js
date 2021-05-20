import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import './ListOfSpecialists.css';
import { options_categorie, options_cities } from '../../Values';
import SpecialistSmallCard from '../SpecialistSmallCard/SpecialistSmallCard';


const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: "none"
    })
  };

let SpecialistsList = [
    {
        "id": 1,
        "name": "some Specialist",
        // поставить несколько городов и категорий???
        "categorie": "cleaning",
        "city": "Tel-Aviv-Yaffo",
        "PricePerHour": 100,
        "description": "some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text "
    }
]




class SpecialistsFilter extends Component {
    state = {
        categories: '',
        work_cities: '',
        price_from: '',
        price_up: '',
        helpers: []
    }

    componentDidMount() {
        fetch('http://localhost:2121/users', {
            headers: {
                'Content-type': 'application/json',
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({helpers: data})
        })
    }

    fetchFilteredHelpers = () => {
        fetch(`http://localhost:2121/users?${this.state.categories.label ? '&categories=' + this.state.categories.label : ''}${this.state.work_cities.label ? '&work_cities=' + this.state.work_cities.label : ''}&price_from=${this.state.price_from}&price_up=${this.state.price_up}`, {
            headers: {
                'Content-type': 'application/json',
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({helpers: data})
            console.log(data)
        })
        
    }




    changeCategoriesHandler = (newCategory) => {
        this.setState({categories: newCategory})
    }

    changeCitiesHandler = (newCitie) => {
        this.setState({work_cities: newCitie})
    }

    changePriceFromHandler = (event) => {
        this.setState({price_from: event.target.value})
    }

    changePriceUpHandler = (event) => {
        this.setState({price_up: event.target.value})
    }




    render() {
        return (
            <div className="wrapper">
                <header className="header_wrapper">
                <div className="arrow">
                    <Link to="/user-choice">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27702 11.3338H19.3334C19.7015 11.3338 20 11.6322 20 12.0004C20 12.3686 19.7015 12.667 19.3334 12.667H6.27702L10.4727 16.8614C10.7334 17.122 10.7334 17.5447 10.4727 17.8053C10.2121 18.066 9.78944 18.066 9.52878 17.8053L4.19584 12.4724C4.07046 12.3473 4 12.1775 4 12.0004C4 11.8233 4.07046 11.6535 4.19584 11.5284L9.52878 6.19551C9.6974 6.02689 9.94316 5.96104 10.1735 6.02276C10.4038 6.08448 10.5837 6.26439 10.6455 6.49472C10.7072 6.72506 10.6413 6.97082 10.4727 7.13944L6.27702 11.3338Z" fill="#121924"/>
                        </svg>
                    </Link>
                </div>
                    <h1 className="Title" >Find a specialist</h1>
                </header>
                <Select name="FieldOfActivity" placeholder="Category" styles={style} className="registration_input input select" options={options_categorie} onChange={this.changeCategoriesHandler}/>
                <Select name="CitiesForWork" placeholder="Locations" styles={style} className="registration_input input select" options={options_cities} onChange={this.changeCitiesHandler}/>
                <div className="input_filter_price">
                    <input name="PriceFrom" placeholder="Price from, NIS" className="price_input" onChange={this.changePriceFromHandler}></input>
                </div>
                <div className="input_filter_price">
                    <input name="PriceUp" placeholder="Price up to, NIS" className="price_input" onChange={this.changePriceUpHandler}></input>
                </div>
                    <button className="apply_button" onClick={this.fetchFilteredHelpers}>Apply</button>
                {this.state.helpers.map((helper) => <SpecialistSmallCard key={helper.id} helper={helper} />)}

            </div> 
        )
    }
}

export default SpecialistsFilter;