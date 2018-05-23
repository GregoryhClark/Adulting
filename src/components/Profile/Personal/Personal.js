import React, { Component } from 'react';
import './Personal.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';

class Personal extends Component {
    render() {

console.log(this.props.user)

        return(
            <div className="personal_master">
                <h1>Date of Birth:</h1>
                <h3 className="dob">{this.props.user.dob.substring(0, 10)}</h3>
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