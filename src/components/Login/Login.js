import React, {Component} from 'react';
import './Login.css';

export default class Login extends Component {
    render() {
        return(
        <div className="login_master">
            <h1>Welcome to the Adulting App!</h1>
            <h3>Get ready to offload all your worries!</h3>

            <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>

        </div>
        )
    }
}