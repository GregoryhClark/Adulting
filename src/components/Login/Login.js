import React, {Component} from 'react';
import './Login.css';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
// import H1 from '@material-ui/core/H1';

export default class Login extends Component {
    render() {
        return(
        <div className="login_master">
            <h1>Welcome to the Adulting App!</h1>
            {/* <H1>Welcome to the Adulting App!</H1> */}

            <h3>Get ready to offload all your worries!</h3>

            <a href={process.env.REACT_APP_LOGIN}><Button>Login</Button></a>
            {/* <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a> */}

        </div>
        )
    }
}