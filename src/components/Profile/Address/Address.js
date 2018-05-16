import React, { Component } from 'react';
import './Address.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';

class Address extends Component {
    render() {



        return(
            <div className="address_master">
                <h1>Address stuff</h1>
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

export default connect(mapStateToProps, { getUser })(Address)