import React, { Component } from 'react';
import axios from 'axios';


class NewReminder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reminderFrequency: 0,
            reminderTitle: '',
            reminderStartDate: new Date(),
            // reminderEndDate: new Date(),
            alertBeforeIncrement: "minutes",
            increment_num: 0


        }
        this.setSelectFrequency = this.setSelectFrequency.bind(this);
        this.setRemTemplateTitle = this.setRemTemplateTitle.bind(this);
        this.setStartDate = this.setStartDate.bind(this);
        // this.setEndDate = this.setEndDate.bind(this);
        this.setAlertIncrement = this.setAlertIncrement.bind(this);
        this.createNewReminder = this.createNewReminder.bind(this);

    }
    setSelectFrequency(freq) {
        this.setState({
            reminderFrequency: freq
        })
        // console.log(this.state.reminderTemplateFrequency)
    }
    setRemTemplateTitle(title) {

        this.setState({
            reminderTitle: title
        })
        // console.log(this.state.reminderTemplateTitle)
    }
    //set start date
    setStartDate(date) {
        this.setState({
            reminderStartDate: new Date(date)
        })
    }
    //complete by date
    // setEndDate(date){
    //     this.setState({
    //         reminderEndDate: date
    //     });
    // }

    setAlertIncrement(increment) {
        this.setState({
            alertBeforeIncrement: increment
        });
    }
    setNumIncrement(increment_num) {
        this.setState({
            increment_num: increment_num
        })
    }
    createNewReminder(event) {
        console.log(this.state)

        let reminderObj = {
            user_id: this.props.userID,
            first_instance_date: this.state.reminderStartDate,
            frequency: this.state.reminderFrequency,
            title: this.state.reminderTitle,
            // end_date : this.state.reminderEndDate,
            alert_increment: this.state.alertBeforeIncrement,
            increment_num: this.state.increment_num
        }
        console.log(reminderObj)
        axios.post(`/create_reminder`, reminderObj).then((res) => {
            console.log(res)
        })
        // event.preventDefault();
    }


    render() {

        let alertIncrements = <select onChange={(e) => this.setAlertIncrement(e.target.value)}>
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
            <option value="days">Days</option>
        </select>


        return (
            <div className="NewReminder_master">
                <form onSubmit={this.createNewReminder} className="new_reminder">
                    New Reminder:
                    <br />
                    Frequency:
                    <select name="" id="reminder_template_select" onChange={(e) => this.setSelectFrequency(e.target.value)}>
                        <option >Select</option>
                        {this.props.currentFrequencies}
                    </select>
                    <br />
                    Title:
                    <input id="reminder_template_title_input" required onChange={(e) => this.setRemTemplateTitle(e.target.value)} />

                    <br />
                    Start date/time:
                    <input type="datetime-local" id="start_date" max="9999-12-31T23:59" required onChange={(e) => this.setStartDate(e.target.value)} />
                    <br />

                    Notify me <input type="number" min="1" max="60" onChange={(e) => { this.setNumIncrement(e.target.value) }} /> {alertIncrements} before.
                    <br />

                    <input type="submit" value="Submit" />

                </form>
            </div>
        )
    }
}


export default (NewReminder)