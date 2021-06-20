import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { options_language, options_cities } from '../../Values';
import FormErrors from '../FormErrors/FormErrors'
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
        username: '',
        email: '',
        city: '',
        telephone: '',
        numberID: '',
        languages: [],
        isHelper: false,
        password: '',
        // validation
        formErrors: {email: '', telephone: '', numberID: '', password: ''},
        usernameValid: false,
        emailValid: false,
        passwordValid: false,
        numberIDValid: false,
        telephoneValid: false,
        formValid: false
    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let emailValid = this.state.emailValid;
        let telephoneValid = this.state.telephoneValid;
        let numberIDValid = this.state.numberIDValid;
        let passwordValid = this.state.passwordValid;
      switch(fieldName) {

          case 'username':
            const usernameFormat = /^[A-Za-z ]+$/;
            usernameValid = value.match(usernameFormat);
            fieldValidationErrors.username = usernameValid ? '' : ' is invalid';
            break;
          case 'email':
            const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            emailValid = value.match(emailFormat);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'telephone':
            const telephoneFormat = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
            telephoneValid = value.match(telephoneFormat) ;
            fieldValidationErrors.telephone = telephoneValid ? '' : ' is invalid';
            break;
          case 'numberID':
            const numberIDFormat = /^\d{9}$/;
            numberIDValid = value.match(numberIDFormat);
            fieldValidationErrors.numberID = numberIDValid ? '': ' is invalid';
            break;
          case 'password':
            const passwordFormat = /^[A-Za-z]\w{7,14}$/;
            passwordValid = value.match(passwordFormat);
            fieldValidationErrors.password = passwordValid ? '': ' is invalid, need to contain only characters, numeric digits and underscore';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        telephoneValid: telephoneValid,
                        numberIDValid: numberIDValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }

      validateForm() {
        this.setState({formValid: this.state.usernameValid &&
                                  this.state.emailValid &&
                                  this.state.telephoneValid&&
                                  this.state.numberIDValid&&
                                  this.state.passwordValid});
      }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
        () => { this.validateField(name, value) });
    }

    changeCityHandler = (newCity) => {
        this.setState({city: newCity})
        console.log(this.state.city)
    }

    changeLanguageHandler = (newLanguages) => {
        this.setState({languages: newLanguages})
    }

    changeIsHelperHandler = (event) => {
        this.setState({isHelper: event.target.checked})
    }

    clickHandler = (event) => {
        event.preventDefault();
        console.log('buuuu')
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

    render() {
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
                <input name="username" value={this.state.username} placeholder="Full Name *" className="registration_input input" onChange={this.handleUserInput}></input>
                <input name="email" value={this.state.email} placeholder="Email *" className="registration_input input" onChange={this.handleUserInput}></input>
                <Select name="city" value={this.state.city}  placeholder="City" styles={style} className="registration_input input select" options={options_cities} onChange={this.changeCityHandler}/>
                <input name="telephone" value={this.state.telephone} placeholder="Phone *" className="registration_input input" onChange={this.handleUserInput}></input>
                <input name="numberID" value={this.state.numberID} placeholder="ID" className="registration_input input" onChange={this.handleUserInput}></input>
                <Select name="Languages" value={this.state.languages} placeholder="Languages" styles={style} className="registration_input input select_language select" isMulti options={options_language} onChange={this.changeLanguageHandler}/><br/>
                <label>
                    <input className="checkbox_performer"
                        type="checkbox"
                        checked={this.state.isHelper}
                        onChange={this.changeIsHelperHandler}
                        />
                     Want to be a helper
                </label>
                <input type='password' name="password" placeholder="Password *" className="registration_input input" onChange={this.handleUserInput}></input>
                <div className='panel panel-default'>
                <FormErrors formErrors={this.state.formErrors} />
                </div>
                <button className="sign_up" disabled={!this.state.formValid} onClick={this.state.formValid ? this.clickHandler : null}>Sign Up</button>
                
            </div>
        )
    }
}

export default RegistrationFirst;