import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './TasksFilter.css';
import {options_categorie, options_cities, options_frequency} from '../../Values';

const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: "none"
    })
  };


class TasksFilter extends Component {

    state = {
        tasks: [],
        active_status: 'ongoing',
        category: '',
        city: '',
        frequency: '',
        price_from: '',
        price_up: ''
    }

componentDidMount() {
 this.fetchTasks('ongoing')
}

fetchTasks = () => {
    this.fetchFilteredTasks()
}

    handleClick = () => {
     this.fetchFilteredTasks()
      }

      fetchFilteredTasks = () => {
        fetch(`process.env.REACT_APP_API_URL/tasks?status=active${this.state.category ? '&category='+ this.state.category.value : '' }${this.state.city ? '&city=' + this.state.city.value : ''}${this.state.frequency ? '&frequency=' + this.state.frequency.value: ''}&price_from=${this.state.price_from}&price_up=${this.state.price_up}`, {
            headers: {
                'Content-type': 'application/json',
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({tasks: data})
            console.log(data)
        })
        
    }

    changeCategoryHandler = (newCategory) => {
        this.setState({category: newCategory})
    }

    changeCityHandler = (newCity) => {
        this.setState({city: newCity})
    }

    changeFrequencyHandler = (newFrequency) => {
        this.setState({frequency: newFrequency})
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
                    <Link to="/home">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27702 11.3338H19.3334C19.7015 11.3338 20 11.6322 20 12.0004C20 12.3686 19.7015 12.667 19.3334 12.667H6.27702L10.4727 16.8614C10.7334 17.122 10.7334 17.5447 10.4727 17.8053C10.2121 18.066 9.78944 18.066 9.52878 17.8053L4.19584 12.4724C4.07046 12.3473 4 12.1775 4 12.0004C4 11.8233 4.07046 11.6535 4.19584 11.5284L9.52878 6.19551C9.6974 6.02689 9.94316 5.96104 10.1735 6.02276C10.4038 6.08448 10.5837 6.26439 10.6455 6.49472C10.7072 6.72506 10.6413 6.97082 10.4727 7.13944L6.27702 11.3338Z" fill="#121924"/>
                        </svg>
                    </Link>
                </div>
                    <h1 className="Title" >Find a Task</h1>
                </header>
                {/* TODO посенть на мульти поля категории и города и доработать фильтрацию */}
                <Select isClearable name="Categorie" placeholder="Category" styles={style} className="registration_input input select" options={options_categorie} onChange={this.changeCategoryHandler} />
                <Select isClearable name="CitiesForWork" placeholder="Desirable Location" styles={style} className="registration_input input select" options={options_cities} onChange={this.changeCityHandler} />
                <Select isClearable name="Frequency" placeholder="Frequency" styles={style} className="registration_input input select" options={options_frequency} onChange={this.changeFrequencyHandler} />
                <div className="input_filter_price">
                    <input name="PriceFrom" placeholder="Price from, NIS" className="price_input" onChange={this.changePriceFromHandler} ></input>
                </div>
                <div className="input_filter_price">
                    <input name="PriceUp" placeholder="Price up to, NIS" className="price_input" onChange={this.changePriceUHandler} ></input>
                </div>
                    <button className="apply_button" onClick={this.handleClick}>Update</button>
                    {this.state.tasks.map((task) => <Card key={task.id} task={task} />)}
            </div> 
        )
    }
}

export default TasksFilter;