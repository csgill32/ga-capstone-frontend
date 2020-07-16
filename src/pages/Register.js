import React from 'react';

import UserModel from '../models/user'

class Register extends React.Component {

    state = {
        email: '',
        password: '',
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
            <div className="auth-wrapper">
                <div className="auth-container">
                    <header>
                        <h3>register today!</h3>
                    </header>
                    <div className="auth-form">
                        {this.state.error && <p>{this.state.error}</p>}
                        <form onSubmit={this.handleSubmit}>
                            <h4>email</h4>
                            <p>
                                <input
                                    type='text'
                                    name='email'
                                    placeholder='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </p>
                            <h4>password</h4>
                            <p>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </p>
                            <button type='submit'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;