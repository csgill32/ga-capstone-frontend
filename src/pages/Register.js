import React from 'react';

import UserModel from '../models/user'
// import axios from 'axios';

class Register extends React.Component {

    state = {
        email: '',
        password: '',
        registered: false,
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.email !== "") {
            UserModel.create(this.state).then((json) => {
                console.log(json);
                // this.props.history.push(`/login`);
            });
        } else {
            this.setState({ error: "Email is required." });
        }
    };

    render() {
        return (
            <div className="register-form">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input
                            type='text'
                            name='email'
                            placeholder='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </p>
                    <input type='submit' value='Register' />
                </form>
            </div>
        )
    }
}

export default Register;