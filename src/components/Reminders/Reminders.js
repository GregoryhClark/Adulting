import React, { Component } from 'react';
import './Reminders.css';
import { getUser, getFrequencies, getUserReminders } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';



class Reminders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reminderFrequency:0,
            reminderTitle:'',
            reminderStartDate:  new Date(),
            reminderStartTime: '',
            // reminderEndDate: new Date(),
            // reminderEndTime: '',
            reminderAlertDate: new Date(),
            reminderAlerTime: ''

        }
        this.setAlertDate = this.setAlertDate.bind(this);
        this.setSelectFrequency = this.setSelectFrequency.bind(this);
        this.setRemTemplateTitle = this.setRemTemplateTitle.bind(this);
        this.setStartDate = this.setStartDate.bind(this);
        this.setStartTime = this.setStartTime.bind(this);
        // this.setEndDate = this.setEndDate.bind(this);
        // this.setEndTime = this.setEndTime.bind(this);
        this.setAlertDate = this.setAlertDate.bind(this);
        this.setAlertTime = this.setAlertTime.bind(this);
        this.createNewReminder = this.createNewReminder.bind(this);
       
    }

    componentDidMount() {

        this.props.getUser()
            .then((res) => {
                // console.log('here it is!', res.value)
            })

    }
    setSelectFrequency(freq){
        this.setState({
            reminderFrequency:freq
        })
        // console.log(this.state.reminderTemplateFrequency)
    }
    setRemTemplateTitle(title){
        
        this.setState({
            reminderTitle:title
        })
        // console.log(this.state.reminderTemplateTitle)
    }
    //set start date
    setStartDate(date){
        this.setState({
            reminderStartDate:date
        })
    }
    // set start Time
    setStartTime(time){
        this.setState({
            reminderStartTime: time
        })
    }
    //complete by date
    setEndDate(date){
        this.setState({
            reminderEndDate: date
        });
    }
    //set complete by time
    setEndTime(time){
        this.setState({
            reminderEndTime: time
        })
    }
    //set alert date
    setAlertDate(date){
        this.setState({
            reminderAlertDate:date
        })
    }
    //set alert time
    setAlertTime(time){
        this.setState({
            reminderAlertTime: time
        })
    }
    createNewReminder(event){
        console.log(this.state)
        event.preventDefault();
    }


    render() {
        const user = this.props.user;

        let currentFrequencies = this.props.frequencies.length > 0 ? this.props.frequencies.map((frequency, index) => {
            return (
                <option key={index + 1}>{frequency.frequency}</option>
            )
        }) : <option>none</option>;

        return (
            <div className="Reminders_master">
                <Topnav />
                <h1>Welcome to the Reminders {this.props.user.first_name}!</h1>
                <h3>Important things will be here soon.</h3>

                <div className="dash_pic">
                    {user ? <img src={user.profile_img} alt='user profile' /> : null}
                </div>
                <div>{user.first_name} {user.last_name}</div>

                <form onSubmit={this.createNewReminder} className="new_reminder">
                    New Reminder:
                    <br />
                    Frequency:
                    <select name="" id="reminder_template_select" onChange={(e) => this.setSelectFrequency(e.target.value)}>
                        <option >Select</option>
                        {currentFrequencies}
                    </select>
                    <br />
                    Title:
                    <input id="reminder_template_title_input" onChange={(e) => this.setRemTemplateTitle(e.target.value)} />

                    <br />
                    Start date:
                    <input type="date" id="start_date" onChange={(e) => this.setStartDate(e.target.value)}/>
                    <br />
                    Start Time:
                    <input type="time" id="start_time" onChange={(e) => this.setStartTime(e.target.value)}/>
                    <br />
                    {/* Complete by date:
                    <input type="date" id="end_date" onChange={(e) => this.setEndDate(e.target.value)}/>
                    <br />
                    Complete by Time:
                    <input type="time" id="end_time" onChange={(e) => this.setEndTime(e.target.value)}/>
                    <br/> */}
                    Alert date:
                    <input type="date" id="alert_date" onChange={(e) => this.setAlertDate(e.target.value)}/>
                    <br />
                    Alert Time:
                    <input type="time" id="alert_time" onChange={(e) => this.setAlertTime(e.target.value)}/>
                    <br/>
                    <input type="submit" value="Submit" />
                        
                </form>
                <div className="spacer"></div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user, frequencies, userReminders } = state
    return {
        user,
        frequencies,
        userReminders
    }
}

export default connect(mapStateToProps, { getUser, getFrequencies, getUserReminders })(Reminders)