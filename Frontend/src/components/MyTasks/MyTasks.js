import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyTasks.css';
import Card from '../Card/Card';




class MyTasks extends Component {
    state = {
        tasks: [],
        active_status: 'ongoing'
    }

componentDidMount() {
 this.fetchMyTasks('ongoing')
}

fetchMyTasks = (status) => {
    fetch(`http://localhost:2121/tasks?owner_id=me&status=${status}`, {
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
    })
}

changeActiveStatus = (newStatus) => {
    this.setState({active_status: newStatus});
    this.fetchMyTasks(newStatus);
    this.props.history.push("/my-tasks");
}

    render() {
        return (
            <div className="wrapper">
                <header className="header_wrapper">
                    <div className="arrow">
                    <Link to="/add-task">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27702 11.3338H19.3334C19.7015 11.3338 20 11.6322 20 12.0004C20 12.3686 19.7015 12.667 19.3334 12.667H6.27702L10.4727 16.8614C10.7334 17.122 10.7334 17.5447 10.4727 17.8053C10.2121 18.066 9.78944 18.066 9.52878 17.8053L4.19584 12.4724C4.07046 12.3473 4 12.1775 4 12.0004C4 11.8233 4.07046 11.6535 4.19584 11.5284L9.52878 6.19551C9.6974 6.02689 9.94316 5.96104 10.1735 6.02276C10.4038 6.08448 10.5837 6.26439 10.6455 6.49472C10.7072 6.72506 10.6413 6.97082 10.4727 7.13944L6.27702 11.3338Z" fill="#121924"/>
                        </svg>
                    </Link>
                    </div>
                    <h1 className="Title">My Tasks</h1>
                    </header>
                    <div className="select-wrapper">
                        <div onClick={() => {this.changeActiveStatus('ongoing')}} className={`select_block select_border ${this.state.active_status === 'ongoing' ? " active" : ''}`}>
                            <p>Draft</p>
                        </div>
                        {/* Прописать класс эктив (удаление и добавление) */}
                        <div onClick={() => {this.changeActiveStatus('active')}} className={`select_block select_border ${this.state.active_status === 'active' ? " active" : ''}`}>
                            <p>Active</p>
                        </div>
                        <div onClick={() => {this.changeActiveStatus('archived')}} className={`select_block ${this.state.active_status === 'archived' ? " active" : ''}`}>
                            <p>Archived</p>
                        </div>
                    </div>
                    {this.state.tasks.map((task) => <Card key={task.id} task={task} />)}
            </div>
        )
    }
}

export default MyTasks;