import React, { Component } from 'react';
import { getUser, getFrequencies, getUserReminders } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';
import axios from 'axios';

class Dummy_Data extends Component {
    constructor() {
        super()
        this.state = {
            reminderTemplateTitle:'',
            reminderTemplateFrequency:0
        }
    }
    
    // componentDidMount() {

        // this.props.getUser()
        //     .then((res) => {
        //         this.props.getUserReminders(res.value.id)
        //     })
        // this.props.getFrequencies()
       

    // }
    createReminderTemplate(frequency, title){
        let templateObj = {
            user: this.props.user.id,
            frequency: frequency,
            title: title
        }
        
        axios.post(`/addReminderTemplate`, templateObj)
            .then(res => {
                alert('Template added.')
            })
    }
    createReminderInstance(instanceId, startDate, startHour, startMin, endDate, endHour, endMin){
        let instanceObj = {
            userId:this.props.user.id,
            instanceId:instanceId*1,
            startDate,
            startHour:startHour*1,
            startMin:startMin*1,
            endDate,
            endHour:endHour*1,
            endMin:endMin*1
        }
        console.log(instanceObj)
        axios.post('/addReminderInstance', instanceObj)
            .then(res => {
                alert('Instance added.')
            })
    }
    setSelectFrequency(freq){
        this.setState({
            reminderTemplateFrequency:freq
        })
        console.log(this.state.reminderTemplateFrequency)
    }
    setRemTemplateTitle(title){
        
        this.setState({
            reminderTemplateTitle:title
        })
        console.log(this.state.reminderTemplateTitle)

    }

    render() {
        const user = this.props.user;
        // console.log(this.props.userReminders)

        let currentFrequencies = this.props.frequencies.length > 0 ? this.props.frequencies.map((frequency, index) => {
            return (
                <option key={index + 1}>{frequency.frequency}</option>
            )
        }) : <option>none</option>  ;


        return (
            <div className="Dummy_Data_master">
                <Topnav />
                <div className="dash_pic">
                    {user ? <img src={user.profile_img} alt='user profile' /> : null}
                </div>
                <div>{user.first_name} {user.last_name}</div>

                Create template:
                frequency:
                <select name="" id="reminder_template_select" onChange={(e)=>this.setSelectFrequency(e.target.value)}>
                    <option >Select</option>
                    {currentFrequencies}
                </select>
                title:
                <input id="reminder_template_title_input" onChange={(e)=>this.setRemTemplateTitle(e.target.value)}/>
                <button onClick={()=>this.createReminderTemplate(this.state.reminderTemplateFrequency, this.state.reminderTemplateTitle)}>Create</button>


                <div className = "spacer"></div>
                Create reminder:
                <br/>
                template id:
                <input id="template_id" type="number"/>
                Start date:
                <input id="start_date"/>
                start hour:
                <input id="start_hour" type="number"/>
                start min:
                <input id="start_min" type="number"/>
                End date:
                <input id="end_date"/>
                End hour:
                <input id="end_hour" type="number"/>
                End min:
                <input id="end_min" type="number"/>
                <button className="create_reminder"
                onClick={()=>{this.createReminderInstance(document.getElementById('template_id').value, document.getElementById('start_date').value, document.getElementById('start_hour').value, document.getElementById('start_min').value, document.getElementById('end_date').value, document.getElementById('end_hour').value, document.getElementById('end_min').value)}}                >Create Reminder</button>
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

export default connect(mapStateToProps, { getUser, getFrequencies, getUserReminders })(Dummy_Data)