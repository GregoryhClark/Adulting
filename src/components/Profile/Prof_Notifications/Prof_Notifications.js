import React, { Component } from 'react';
import './Prof_Notifications.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';
import axios from 'axios';

class Prof_Notifications extends Component {

    componentDidMount() {

        this.props.getUser().then((res)=>console.log(res.value.id))   
    }
    render() {
 function toggleEmail(e){
    e.target.checked === true? console.log(e.target.checked, "it's true") : console.log(e.target.checked, "it's false");

    let toggleObj = {
        // user_id:this.props.user.id,
        notify_email:e.target.checked,
        user_id:8

    }

    axios.put('/email_notifications_settings', toggleObj).then(()=>{
        // this.props.getUser();
    })



 }


        return (
            <div className="prof_Notifications_master">

            

                <h3>Email</h3>
                <label class="switch">
                    <input type="checkbox" id="email_check" onChange={(e) => toggleEmail(e)} />
                    <span class="slider round"></span>
                </label>

                <h3>SMS Text</h3>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>

                <h3>In-App</h3>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>





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