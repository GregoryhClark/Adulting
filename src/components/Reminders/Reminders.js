import React, { Component } from 'react';
import './Reminders.css';
import { getUser } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';



class Reminders extends Component {

    componentDidMount() {

        this.props.getUser()
            .then((res) => {
                // console.log('here it is!', res.value)
            })

    }


    render() {
        return (
            <div className="Reminders_master">
                <Topnav/>
                <h1>Welcome to the Reminders {this.props.user.first_name}!</h1>
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

export default connect(mapStateToProps, { getUser })(Reminders)