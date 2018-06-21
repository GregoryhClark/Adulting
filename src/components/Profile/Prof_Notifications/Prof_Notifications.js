import React, { Component } from 'react';
import './Prof_Notifications.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';
import axios from 'axios';

class Prof_Notifications extends Component {
    constructor(props) {
        super(props);
        // this.toggleEmail = this.toggleEmail.bind(this);
    }

    // componentDidMount() {

    //     this.props.getUser().then((res) => console.log(res.value.id))
    // }
    render() {
        const userID = this.props.userID;
        function toggleEmail(e) {
            // e.target.checked === true ? console.log(e.target.checked, "it's true") : console.log(e.target.checked, "it's false");
            let toggleObj = {
                user_id: userID,
                notify_email: e.target.checked,
            }
            axios.put('/email_notifications_settings', toggleObj).then(() => {
                //should I have something here?
            })
        }
        function toggleText(e) {
            let toggleObj = {
                user_id: userID,
                notify_text: e.target.checked,
            }
            axios.put('/text_notifications_settings', toggleObj).then(() => {
                //should I have something here?
            })
        }
        function toggleInApp(e) {
            let toggleObj = {
                user_id: userID,
                notify_inApp: e.target.checked,
            }
            axios.put('/in_app_notifications_settings', toggleObj).then(() => {
                //should I have something here?
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
                    <input type="checkbox" id="text_check" onChange={(e) => toggleText(e)} />
                    <span class="slider round"></span>
                </label>

                <h3>In-App</h3>
                <label class="switch">
                    <input type="checkbox" id="inApp_check" onChange={(e) => toggleInApp(e)} />
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