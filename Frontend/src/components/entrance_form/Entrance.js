import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Entrance.css'

class Entrance extends Component {
    state = {
        isActive: false,
        email: "",
        password: "",
        token: ""
    }

    changeEmailHandler = (event) => {
        if (this.state.password !== "" && event.target.value !== "") {
            this.setState({isActive: true})
        } else {
            this.setState({isActive: false})
        }
        this.setState({ email: event.target.value })
      }


    changePasswordHandler = (event) => {
        if (this.state.email !== "" && event.target.value !== "") {
            this.setState({isActive: true})
        } else {
            this.setState({isActive: false})
        }
    this.setState({ password: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        // fetch()
        console.log(this.state)
        window.location ="/home";
    }

    render() {
        return (
            <div className="wrapper" >
                <div className="arrow">
                <Link to="/start">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27702 11.3338H19.3334C19.7015 11.3338 20 11.6322 20 12.0004C20 12.3686 19.7015 12.667 19.3334 12.667H6.27702L10.4727 16.8614C10.7334 17.122 10.7334 17.5447 10.4727 17.8053C10.2121 18.066 9.78944 18.066 9.52878 17.8053L4.19584 12.4724C4.07046 12.3473 4 12.1775 4 12.0004C4 11.8233 4.07046 11.6535 4.19584 11.5284L9.52878 6.19551C9.6974 6.02689 9.94316 5.96104 10.1735 6.02276C10.4038 6.08448 10.5837 6.26439 10.6455 6.49472C10.7072 6.72506 10.6413 6.97082 10.4727 7.13944L6.27702 11.3338Z" fill="#121924"/>
                    </svg>
                </Link>
                </div>
                <h1 className="registration_title">Helper</h1>
                <div>
                    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.524414" y="0.510498" width="70" height="70" rx="16" fill="#007AFF"/>
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="71" height="71">
                        <rect x="0.524414" y="0.510498" width="70" height="70" rx="16" fill="white"/>
                        </mask>
                        <g mask="url(#mask0)">
                        <path opacity="0.546991" fill-rule="evenodd" clip-rule="evenodd" d="M22.9768 0.510533C26.1289 15.0048 51.1116 20.1212 51.1116 20.1212L30.9465 63.3653C30.9465 63.3653 4.38336 55.6937 0.524521 33.9188C-3.33432 12.1439 2.57426 -3.17015 2.57426 -3.17015L16.3731 -11.6855C16.3731 -11.6855 19.8247 -13.9837 22.9768 0.510533Z" fill="#42AAFF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M80.2788 57.9171L78.6482 61.4139C78.2987 62.1633 77.4059 62.4873 76.6468 62.1334L58.9995 53.9043C57.9993 53.4379 57.0476 52.9015 56.1461 52.2829L55.0101 51.5152C54.1076 50.896 53.1501 50.3437 52.1607 49.8824L46.0586 47.0369L37.7788 64.7928C37.4092 65.5856 36.4537 65.9333 35.661 65.5637L30.9467 63.3654C30.1441 62.9911 29.8072 62.0408 30.1769 61.248L48.9949 20.8926C49.3646 20.0998 50.3092 19.747 51.1117 20.1213L55.826 22.3196C56.6188 22.6892 56.9665 23.6447 56.5969 24.4374L48.1602 42.53L53.3838 44.9658C54.839 45.6444 56.3702 46.1601 57.9429 46.4704C59.5128 46.7926 61.049 47.2974 62.5043 47.976L79.5434 55.9215C80.3026 56.2755 80.6282 57.1677 80.2788 57.9171Z" fill="white"/>
                        </g>
                    </svg>
                </div>
                <h2 className="registration_post_title">Bring the best services to you</h2>
                <form onSubmit={this.submitHandler}>
                    <input name="email" value={this.state.email} placeholder="Email" className="registration_input input" onChange={this.changeEmailHandler} ></input>
                    <input name="password" value={this.state.password} type="password" placeholder="Password" className="registration_input input" onChange={this.changePasswordHandler}></input>
                    <button type="submit" className="sign_up" disabled={!this.state.isActive} >Sign In</button>
                </form>
            </div>
        )
    }
}

export default Entrance;