import React, { Component } from 'react';
import './Personal.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';

class Personal extends Component {
    render() {



        return(
            <div className="personal_master">
                <h1>Personal stuff</h1>
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

export default connect(mapStateToProps, { getUser })(Personal)