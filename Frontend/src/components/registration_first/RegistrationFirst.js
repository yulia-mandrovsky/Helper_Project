import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { options_language, options_cities } from '../../Values';
import './RegistrationFirst.css'

  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: "none"
    })
  };

class RegistrationFirst extends Component {
    state = {
        "username": '',
        "email": '',
        "city": '',
        "telephone": '',
        "numberID": '',
        "languages": [],
        "isHelper": false,
        "password": ''
    }

    

    clickHandler = (event) => {
        event.preventDefault();
        const body = {username: this.state.username, email: this.state.email, 
            city: this.state.city, telephone: this.state.telephone, numberID: this.state.numberID, 
            languages: this.state.languages.map((option) => option.value).join(', '), 
            isHelper: this.state.isHelper, password: this.state.password}
        console.log(body)
        fetch(`${process.env.REACT_APP_API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body), 
        })
        .then((response)=> {
            return response.json()
        })
        .then((data)=> {
            localStorage.setItem('token', data.token)
            if (this.state.isHelper === true) {
                this.props.history.push("/sign-up-helper");
                return;
            }
            this.props.history.push("/home");
        })
    }

    isDataValid = () => {
        if (this.state.username !== '' && this.state.email !== '' && this.state.telephone !== '' && this.state.password !== '') {
            return true;
        } else {
            return false;
        }
    }

    changeUsernameHandler = (event) => {
        this.setState({username: event.target.value})
        console.log(this.state.username)
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
        console.log(this.state.email)
    }

    changeCityHandler = (newCity) => {
        this.setState({city: newCity})
        console.log(this.state.city)
    }

    changePhoneHandler = (event) => {
        this.setState({telephone: event.target.value})
        console.log(this.state.telephone)
    }

    changeNumberIDHandler = (event) => {
        this.setState({numberID: event.target.value})
        console.log(this.state.numberID)
    }

    changeLanguageHandler = (newLanguages) => {
        this.setState({languages: newLanguages})
    }

    changeIsHelperHandler = (event) => {
        this.setState({isHelper: event.target.checked})
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value})
        console.log(this.state.password)
    }

    render() {
        let isActive = this.isDataValid();
        return (
            <div className="wrapper" >
                <div className="arrow">
                    <Link to="/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27702 11.3338H19.3334C19.7015 11.3338 20 11.6322 20 12.0004C20 12.3686 19.7015 12.667 19.3334 12.667H6.27702L10.4727 16.8614C10.7334 17.122 10.7334 17.5447 10.4727 17.8053C10.2121 18.066 9.78944 18.066 9.52878 17.8053L4.19584 12.4724C4.07046 12.3473 4 12.1775 4 12.0004C4 11.8233 4.07046 11.6535 4.19584 11.5284L9.52878 6.19551C9.6974 6.02689 9.94316 5.96104 10.1735 6.02276C10.4038 6.08448 10.5837 6.26439 10.6455 6.49472C10.7072 6.72506 10.6413 6.97082 10.4727 7.13944L6.27702 11.3338Z" fill="#121924"/>
                        </svg>
                    </Link>
                </div>
                <h1 className="registration_title">Sign Up</h1>
                <h2 className="registration_post_title">Please fill the form below</h2>
                <input name="FullName" value={this.state.username} placeholder="Full Name *" className="registration_input input" onChange={this.changeUsernameHandler}></input>
                <input name="email" value={this.state.email} placeholder="Email *" className="registration_input input" onChange={this.changeEmailHandler}></input>
                <Select name="City" value={this.state.city}  placeholder="City" styles={style} className="registration_input input select" options={options_cities} onChange={this.changeCityHandler}/>
                <input name="Telephone" value={this.state.telephone} placeholder="Phone *" className="registration_input input" onChange={this.changePhoneHandler}></input>
                <input name="NumberID" value={this.state.numberID} placeholder="ID" className="registration_input input" onChange={this.changeNumberIDHandler}></input>
                <Select name="Languages" value={this.state.languages} placeholder="Languages" styles={style} className="registration_input input select_language select" isMulti options={options_language} onChange={this.changeLanguageHandler}/><br/>
                <label>
                    <input className="checkbox_performer"
                        type="checkbox"
                        checked={this.state.isHelper}
                        onChange={this.changeIsHelperHandler}
                        />
                     Want to be a helper
                </label>
                <input type='password' name="Password" placeholder="Password *" className="registration_input input" onChange={this.changePasswordHandler}></input>
                <button className="sign_up" disabled={!isActive} onClick={isActive ? this.clickHandler : null}>Sign Up</button>
                
            </div>
        )
    }
}

export default RegistrationFirst;