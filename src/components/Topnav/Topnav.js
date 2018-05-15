import React, { Component } from 'react';
import './Topnav.css';
import { getUser } from './../../ducks/users';
import { connect } from 'react-redux';

const { REACT_APP_LOGOUT } = process.env

class Topnav extends Component {

    componentDidMount() {

        this.props.getUser()
            .then((res) => {
                // console.log('here it is!', res.value)
            })

    }
    changeHamburger() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    render() {
        return (
            <div className="topnav_master">
                <div className="topnav" id="myTopnav">
                        <a href="/#/dashboard" className="active">Dashboard</a>
                        <a href="/#/reminders" >Reminders</a>
                        <a href="/#/profile" >Profile</a>
                        <a href="/#/surveys" >Surveys</a>
                        <a href="/#/dummy" >Dummy Data</a>
                        <a href="/#/dashboard" >Notifications</a>
                        <a href={REACT_APP_LOGOUT}>Logout</a>
                        <a href="javascript:void(0);" className="icon" onClick={this.changeHamburger}>&#9776;</a>
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

export default connect(mapStateToProps, { getUser })(Topnav)