//import resources here
import React, { Component } from 'react';
import './Address.css';
import { getUser, updateUserCountry, updateUserStreet, updateUserCity, getStates } from './../../../ducks/users';
import { connect } from 'react-redux';
import axios from 'axios';
import AddressUI from './AddressUI/AddressUI';


class Address extends Component {
    constructor() {
        super();
        this.state = {
            selectedToEdit: 'none',
        }
    }

    selectedToEdit(value) {

        this.setState({
            selectedToEdit: value
        })
    }
    saveCountryChange(value) {
        console.log(this.props.user.id)
        let updatedUser = this.props.user
        updatedUser.country = value
        this.props.updateUserCountry(updatedUser)
        this.setState({
            selectedToEdit: 'none'
        })
        this.props.getUser()
    }
    saveStreetChange(street){
        let newStreet = {
            id:this.props.user.id,
            street
        }
        this.props.updateUserStreet(newStreet)

        this.setState({
            selectedToEdit: 'none'
        })
        this.props.getUser()

    }
    saveCityChange(city){
        let newCity = {
            id:this.props.user.id,
            city
        }
        this.props.updateUserCity(newCity)

        this.setState({
            selectedToEdit: 'none'
        })
        this.props.getUser()

    }
    saveStateChange(state){
        console.log(state)
        let stateObj = {
            id: this.props.user.id,
            state
        }
        axios.put('/update_state', stateObj).then(()=>{
            this.props.getUser();
        })
        this.setState({
            selectedToEdit: 'none'
        })

    }
    
    render() {
             
        let stateOptions = this.props.states.map((state, index)=>{
            return <option key={index} value={state.id}>{state.state_abr}</option>
        })

        let user_country = this.state.selectedToEdit === "user_country" ?
            <select id="profile_country_select">
                <option>Select</option>
                <option>USA</option>
                <option>Canada</option>
            </select>
            : this.props.user.country;

        let user_street = this.state.selectedToEdit === "user_street" ? 
            <input id="profile_street_input"/>  : this.props.user.address_street;

        let user_city = this.state.selectedToEdit === "user_city" ?  
            <input id="profile_city_input"/>: this.props.user.address_city;

        let user_state = this.state.selectedToEdit === "user_state" ? 
         <select id="profile_state_select"> {stateOptions} </select>: this.props.user.address_state;


        let user_postal_code = this.props.user.address_postal_code;

        let countryButton = this.state.selectedToEdit === "user_country" ? 
            <button value="user_country" className="address_edit" onClick={() => this.saveCountryChange(document.getElementById("profile_country_select").value)}>Save</button> : 
            <button value="user_country" className="address_edit" onClick={(e) => this.selectedToEdit(e.target.value)}>Edit</button>

        let streetButton = this.state.selectedToEdit === "user_street" ? 
            <button value="user_street" className="address_edit" onClick={()=> this.saveStreetChange(document.getElementById('profile_street_input').value) }>Save</button> : 
            <button value="user_street" className="address_edit" onClick={(e) => this.selectedToEdit(e.target.value)}> Edit </button>

        let cityButton = this.state.selectedToEdit === "user_city" ? 
            <button value="user_city" className="address_edit" onClick={()=> this.saveCityChange(document.getElementById('profile_city_input').value) }>Save</button> : 
            <button value="user_city" className="address_edit"  onClick={(e) => this.selectedToEdit(e.target.value)}>Edit</button>
        
        let stateButton = this.state.selectedToEdit === "user_state" ? 
            <button value="user_state" className="address_edit" onClick={()=> this.saveStateChange(document.getElementById('profile_state_select').value)}>Save</button> : 
            <button value = "user_state" className ="address_edit" onClick={(e) => this.selectedToEdit(e.target.value)}>Edit</button>
        
        return (
            <div className="address_master">

            <AddressUI />
            <br></br>
                <h1>Address stuff</h1>
                <div className="user_country">
                    <h3>Country:</h3>

                    {user_country === null ? "None" : user_country}
                    {countryButton}
                </div>
                <div className="user_street">
                    <h3>Street:</h3>

                    <h4>{user_street === null ? "None" : user_street}</h4>
                    {/* <button className="address_edit">Edit</button> */}
                    {streetButton}
                </div>
                {/* this is not on the database */}
                {/* <div className="street_2">
                    {}
                </div> */}
                <div className="user_city">
                    <h3>City:</h3>
                    {user_city === null ? "None" : user_city}
                    {cityButton}
                </div>
                <div className="user_state">
                    <h3>State:</h3>
                    {user_state === null ? "None" : user_state}
                    {stateButton}
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
    const { user, states } = state
    return {
        user,
        states
    }
}

export default connect(mapStateToProps, { getUser , updateUserCountry, updateUserStreet, updateUserCity, getStates})(Address)