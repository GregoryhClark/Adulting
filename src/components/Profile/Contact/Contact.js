import React, { Component } from 'react';
import './Contact.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';
import ContactUI from './ContactUI/ContactUI';

class Contact extends Component {
    render() {

        return(
            <div className="contact_master">
                        <ContactUI user = {this.props.user}/>

                {/* <div className="user_contact_email">
                    <h4>Email</h4>
                    <h4>{this.props.user.email}@gmail.com</h4>
                    <button className="button_edit_email">Edit</button>
                </div>
                <div className="user_contact_mobile">
                    <h4>Mobile</h4>
                    <h4>{this.props.user.mobile_phone !== null ? this.props.user.mobile_phone : "None" } </h4>
                    <button className="button_edit_mobile">Edit</button>
                </div> */}
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
export default connect(mapStateToProps, { getUser })(Contact)