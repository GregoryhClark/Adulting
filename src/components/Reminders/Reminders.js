import React, { Component } from 'react';
import './Reminders.css';
import { getUser, getFrequencies, getUserReminders, getUserReminderTemplates } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';
import Incomplete from './Incomplete/Incomplete';
import NewReminder from './NewReminder/NewReminder';
import Templates from './Templates/Templates';




class Reminders extends Component {
    constructor(props) {
        super(props)
        this.state = {

            selectedSubnav: 'reminders_subnav_templates'
        }
    }

    componentDidMount() {

        this.props.getUser()
            .then((res) => {
                // console.log('here it is!', res.value)
                this.props.getUserReminderTemplates(res.value.id)
            })

        

    }

    
    selectSubnavTab(tab) {
        this.setState({
            selectedSubnav: tab.id
        })
    }
    
    
   

    render() {
        const user = this.props.user;
        let userRemindersList = this.props.userReminders.map((reminder, index) => {

            return (
                <tr key ={index}>
                    <td>{reminder.title}</td>
                    <td>{reminder.first_instance_date.substring(0, 10)}</td>
                    <td>{reminder.frequency}</td>
                    <td>{reminder.completed? 'true': 'false'}</td>
                    <td><button>Delete</button></td>
                </tr>
            )
        });

        let currentFrequencies = this.props.frequencies.length > 0 ? this.props.frequencies.map((frequency, index) => {
            return (
                <option key={index + 1}>{frequency.frequency}</option>
            )
        }) : <option>none</option>;

        return (
            <div className="Reminders_master">
                <Topnav />
                <h1>Welcome to the Reminders {this.props.user.first_name}!</h1>
                <div className="dash_pic">
                    {user ? <img src={user.profile_img} alt='user profile' /> : null}
                </div>
                <div>{user.first_name} {user.last_name}</div>

                <div className="reminders_subnav_wrapper">
                        <div className="reminders_subnav">
                            <a href="http://localhost:3000/#/reminders" id="reminders_subnav_templates" onClick={(e) => { this.selectSubnavTab(e.target) }}>Templates</a>
                            <a href="http://localhost:3000/#/reminders" id="reminders_subnav_new_reminders" onClick={(e) => { this.selectSubnavTab(e.target) }}>New Reminder</a>
                            <a href="http://localhost:3000/#/reminders" id="reminders_subnav_incomplete" onClick={(e) => { this.selectSubnavTab(e.target) }}>Incomplete</a>
                            
                        </div>

                        <div className="selected_data_category">
                            {this.state.selectedSubnav === "reminders_subnav_templates" ? <Templates user={this.props.user} templates={this.props.userReminderTemplates}/> : null}
                            {this.state.selectedSubnav === "reminders_subnav_new_reminders" ? <NewReminder userID={this.props.user.id} currentFrequencies={currentFrequencies} /> : null}
                            {this.state.selectedSubnav === "reminders_subnav_incomplete" ? <Incomplete userRemindersList={userRemindersList}/> : null}
                            
                        </div>
                    </div>

                
                <div className="spacer"></div>

                

            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user, frequencies, userReminders, userReminderTemplates} = state
    return {
        user,
        frequencies,
        userReminders,
        userReminderTemplates
    }
}

export default connect(mapStateToProps, { getUser, getFrequencies, getUserReminders, getUserReminderTemplates })(Reminders)