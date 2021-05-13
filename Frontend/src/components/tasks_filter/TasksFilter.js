import React, { Component } from 'react';
import Select from 'react-select';
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
    render() {
        return (
            <div className="wrapper">
                <header className="header_wrapper">
                <div className="arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27702 11.3338H19.3334C19.7015 11.3338 20 11.6322 20 12.0004C20 12.3686 19.7015 12.667 19.3334 12.667H6.27702L10.4727 16.8614C10.7334 17.122 10.7334 17.5447 10.4727 17.8053C10.2121 18.066 9.78944 18.066 9.52878 17.8053L4.19584 12.4724C4.07046 12.3473 4 12.1775 4 12.0004C4 11.8233 4.07046 11.6535 4.19584 11.5284L9.52878 6.19551C9.6974 6.02689 9.94316 5.96104 10.1735 6.02276C10.4038 6.08448 10.5837 6.26439 10.6455 6.49472C10.7072 6.72506 10.6413 6.97082 10.4727 7.13944L6.27702 11.3338Z" fill="#121924"/>
                    </svg>
                </div>
                    <h1 className="Title" >Tasks Filter</h1>
                </header>
                <Select name="Categorie" placeholder="Categorie" styles={style} className="registration_input input select" isMulti options={options_categorie} />
                <Select name="CitiesForWork" placeholder="Cities convenient for work" styles={style} className="registration_input input select" isMulti options={options_cities} />
                <Select name="Frequency" placeholder="Frequency" styles={style} className="registration_input input select" isMulti options={options_frequency} />
                <div className="input_filter_price">
                    <input name="PriceFrom" placeholder="Price from, NIS" className="price_input"></input>
                </div>
                <div className="input_filter_price">
                    <input name="PriceUp" placeholder="Price up to, NIS" className="price_input"></input>
                </div>

               
                {/* <div className="checkbox_wrapper">
                    <h2 className="checkbox_title" >Frequency</h2>
                        <div className="checkbox_block">
                            <div className="check_label_wrapper">
                                <label className="filter_lable" >Some lable</label>
                                <input className="checkbox_filter"
                                    type="checkbox"
                                    // checked={this.state.isActive}
                                    // onChange={this.handleCheckboxChange}
                                    />
                            </div>
                            <br/> */}
                            {/* <div className="check_label_wrapper">
                                <label className="filter_lable" >Some lable</label>
                                <input className="checkbox_filter"
                                    type="checkbox"
                                    // checked={this.state.isActive}
                                    // onChange={this.handleCheckboxChange}
                                    />
                            </div>
                            <br/>
                            <div className="check_label_wrapper">
                                <label className="filter_lable" >Some lable</label>
                                <input className="checkbox_filter"
                                    type="checkbox"
                                    // checked={this.state.isActive}
                                    // onChange={this.handleCheckboxChange}
                                    />
                            </div>
                            <br/>
                            <div className="check_label_wrapper">
                                <label className="filter_lable" >Some lable</label>
                                <input className="checkbox_filter"
                                    type="checkbox"
                                    // checked={this.state.isActive}
                                    // onChange={this.handleCheckboxChange}
                                    />
                            </div>
                        </div>
                    </div> */}
                    <button className="apply_button">Apply</button>
            </div> 
        )
    }
}

export default TasksFilter;