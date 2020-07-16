import React from 'react';
import UserModel from '../models/user'
import './Login.scss';

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        error: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.email !== "") {
            UserModel.login(this.state).then((json) => {
                console.log(json);
                this.props.setLogin(true);
                localStorage.setItem('uid', json.foundUser._id);
                console.log(this.state);
                this.props.history.push(`/recipes`);
            });
        } else {
            this.setState({ error: "Email is required." });
        }
    };

    handleLogout = () => {
        UserModel.logout(this.state).then((json) => {
            console.log(this.state);
            this.props.setLogin(false);
            this.props.history.push("/login");
        });
    };

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-container">
                    <header>
                        <h3>welcome back!</h3>
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
                            <button type='submit'>Login</button>
                        </form>
                    </div>
                </div>
                {/* TODO: FIGURE OUT LOGOUT ON NAVBAR */}
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

export default Login;