import React, { Component } from 'react';
import Select from 'react-select'
import './RegistrationFirst.css'

const options = [
    { value: 'english', label: 'English' },
    { value: 'russian', label: 'Russian' },
    { value: 'hebrew', label: 'Hebrew' },
    { value: 'french', label: 'French' },
    { value: 'arabic', label: 'Arabic' },
    { value: 'amharic', label: 'Amharic' },
  ]

  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: "none"
    })
  };

class RegistrationFirst extends Component {
    state = {
        "isActive": false
    }



    render() {
        return (
            <div className="wrapper" >
                <div className="arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27702 11.3338H19.3334C19.7015 11.3338 20 11.6322 20 12.0004C20 12.3686 19.7015 12.667 19.3334 12.667H6.27702L10.4727 16.8614C10.7334 17.122 10.7334 17.5447 10.4727 17.8053C10.2121 18.066 9.78944 18.066 9.52878 17.8053L4.19584 12.4724C4.07046 12.3473 4 12.1775 4 12.0004C4 11.8233 4.07046 11.6535 4.19584 11.5284L9.52878 6.19551C9.6974 6.02689 9.94316 5.96104 10.1735 6.02276C10.4038 6.08448 10.5837 6.26439 10.6455 6.49472C10.7072 6.72506 10.6413 6.97082 10.4727 7.13944L6.27702 11.3338Z" fill="#121924"/>
                    </svg>
                </div>
                <h1 className="registration_title">Sign Up</h1>
                <h2 className="registration_post_title">Please write your information below</h2>
                <input name="FullName" placeholder="FullName" className="registration_input input"></input>
                <input name="email" placeholder="Email" className="registration_input input"></input>
                <input name="City" placeholder="City" className="registration_input input"></input>
                <input name="Telephone" placeholder="Telephone" className="registration_input input"></input>
                <input name="NumberID" placeholder="NumberID" className="registration_input input"></input>
                <Select name="Language" placeholder="Language" styles={style} className="registration_input input select_language" isMulti options={options} /><br/>
                <label>
                    <input className="checkbox_performer"
                        type="checkbox"
                        // checked={this.state.isActive}
                        // onChange={this.handleCheckboxChange}
                        />
                     Want to be a performer
                </label>
                <input name="Password" placeholder="Password" className="registration_input input"></input>
                <button className="sign_up" disabled={!this.state.isActive}>Sign Up</button>
                
            </div>
        )
    }
}

export default RegistrationFirst;