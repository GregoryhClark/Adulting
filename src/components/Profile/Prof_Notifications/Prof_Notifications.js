import React, { Component } from 'react';
import './Prof_Notifications.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';
import axios from 'axios';

class Prof_Notifications extends Component {
    constructor(){
        super()
        this.state = {
            emailEnabled:true,
            textEnabled:true,
            inAppEnabled:true
        }

        
    }
    componentWillMount(){
        this.setState({
            emailEnabled:this.props.user.email_notify,
            textEnabled: this.props.user.text_notify,
            inAppEnabled: this.props.user.in_app_notify
            
        })
    }
    toggleEmail(e) {
        this.setState({
            emailEnabled: !this.state.emailEnabled
        })
        let toggleObj = {
            user_id: this.props.userID,
            notify_email: e.target.checked,
        }
        axios.put('/email_notifications_settings', toggleObj).then(() => {
            //should I have something here?
        })
    }
    toggleText(e) {
        this.setState({
            textEnabled: !this.state.textEnabled
        })
        let toggleObj = {
            user_id: this.props.userID,
            notify_text: e.target.checked,
        }
        axios.put('/text_notifications_settings', toggleObj).then(() => {
            //should I have something here?
        })
    }
    toggleInApp(e) {
        this.setState({
            inAppEnabled: !this.state.inAppEnabled
        })
        let toggleObj = {
            user_id: this.props.userID,
            notify_inApp: e.target.checked,
        }
        axios.put('/in_app_notifications_settings', toggleObj).then(() => {
            //should I have something here?
        })
    }

    render() {
        const userID = this.props;
        console.log(userID)
        





        return (
            <div className="prof_Notifications_master">



                <h3>Email</h3>
                <label className="switch">
                    <input type="checkbox" id="email_check" checked={this.state.emailEnabled} onChange={(e) => this.toggleEmail(e)} />
                    <span className="slider round"></span>
                </label>

                <h3>SMS Text</h3>
                <label className="switch">
                    <input type="checkbox" id="text_check" checked={this.state.textEnabled} onChange={(e) => this.toggleText(e)} />
                    <span className="slider round"></span>
                </label>

                <h3>In-App</h3>
                <label className="switch">
                    <input type="checkbox" id="inApp_check" checked={this.state.inAppEnabled} onChange={(e) => this.toggleInApp(e)} />
                    <span className="slider round"></span>
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