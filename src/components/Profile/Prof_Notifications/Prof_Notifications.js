import React, { Component } from 'react';
import './Prof_Notifications.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';

class Prof_Notifications extends Component {
    render() {



        return(
            <div className="prof_Notifications_master">
                <h1>Prof_Notifications stuff</h1>
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

export default connect(mapStateToProps, { getUser })(Prof_Notifications)