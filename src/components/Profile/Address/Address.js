import React, { Component } from 'react';
import './Address.css';
import { getUser, updateUser } from './../../../ducks/users';
import { connect } from 'react-redux';

class Address extends Component {
    constructor() {
        super();
        this.state = {
            selectedToEdit: 'none',
            // editingCountry: false,
            // editingStreet: false,
            // editingStreet2 : false,
            // editingCity : false,
            // editingState : false,
            // editingPostalCode : false,
        }
    }
    selectedToEdit(value) {
        console.log(value)
        this.setState({
            selectedToEdit: value
        })
    }
    saveChange(value) {
        console.log(value)
        let updatedUser = this.props.user
        updatedUser.address_country = value
        // console.log(updatedUser)
        this.props.updateUser(updatedUser)

        this.setState({
            selectedToEdit: 'none'
        })
    }
    
    render() {
        console.log(this.props.user)

        let user_country = this.state.selectedToEdit === "user_country" ?
            <select id="profile_country_select">
                <option>Select</option>
                <option>USA</option>
            </select>
            : this.props.user.address_country;

        let user_street = this.props.user.address_street;
        // let user_street_2 = this.props.user.address_street_2;
        let user_city = this.props.user.address_city;
        let user_state = this.props.user.address_state;
        let user_postal_code = this.props.user.address_postal_code;

        let countryButton = this.state.selectedToEdit === "user_country" ? <button value="user_country" className="address_edit" onClick={() => this.saveChange(document.getElementById("profile_country_select").value)}>Save</button> : <button value="user_country" className="address_edit" onClick={(e) => this.selectedToEdit(e.target.value)}>Edit</button>


        return (
            <div className="address_master">
                <h1>Address stuff</h1>
                <div className="user_country">
                    <h3>Country:</h3>

                    {user_country === null ? "None" : user_country}
                    {countryButton}
                </div>
                <div className="user_street">
                    <h3>Street:</h3>

                    {user_street === null ? "None" : user_street}
                    <button className="address_edit">Edit</button>
                </div>
                {/* this is not on the database */}
                {/* <div className="street_2">
                    {}
                </div> */}
                <div className="user_city">
                    <h3>City:</h3>
                    {user_city === null ? "None" : user_city}
                    <button className="address_edit">Edit</button>
                </div>
                <div className="user_state">
                    <h3>State:</h3>
                    {user_state === null ? "None" : user_state}
                    <button className="address_edit">Edit</button>
                </div>
                <div className="user_postal_code">
                    <h3>Zip:</h3>
                    {user_postal_code === null ? "None" : user_postal_code}
                    <button className="address_edit">Edit</button>
                </div>

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

export default connect(mapStateToProps, { getUser , updateUser})(Address)