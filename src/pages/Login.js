import React from 'react';
import UserModel from '../models/user'

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        error: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.email !== "") {
            UserModel.login(this.state).then((json) => {
                console.log(json);
                this.props.history.push(`/recipes`);
            });
        } else {
            this.setState({ error: "Email is required." });
        }
    };

    render() {
        return (
            <div className="login-form">
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
                    <input type='submit' value='Login' />
                </form>
            </div>
        )
    }
}

export default Login;