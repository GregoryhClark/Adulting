import React, { Component } from 'react';
import './Surveys.css';
import { getUser } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';


class Surveys extends Component {

    componentDidMount() {

        this.props.getUser()
            .then((res) => {
                // console.log('here it is!', res.value)
            })

    }


    render() {
        return (
            <div className="Surveys_master">
                <Topnav/>
                <h1>Welcome to the Surveys {this.props.user.first_name}!</h1>
                <h3>Important things will be here soon.</h3>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user } = state
    return {
        user
    }
}

export default connect(mapStateToProps, { getUser })(Surveys)