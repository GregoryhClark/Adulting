import React, { Component } from 'react';
import { getUser, getFrequencies, getUserReminders, getUserReminderTemplates } from '../../../ducks/users';
import { connect } from 'react-redux';
import axios from 'axios';

class Incomplete extends Component {

    componentDidMount(){
        this.props.getUser()
            .then((res) => {
                this.props.getUserReminders(res.value.id)
            })
    }

    handleComplete(id){
        console.log(id)
        let editObj = {
            reminderId:id
        }
        axios.put('/mark_complete', editObj).then(()=>{
            this.props.getUserReminders(this.props.user.id)
            alert('Marked Complete')
        })
    }

    render() {

        let userRemindersList = this.props.userReminders.map((reminder, index) => {

            return (
                <tr key={index}>
                    <td>{reminder.title}</td>
                    <td>{reminder.first_instance_date.substring(0, 10)}</td>
                    <td>{reminder.frequency}</td>
                    <td><button value={reminder.id} onClick={(e) => { this.handleComplete(e.target.value) }}>Mark Complete</button></td>
                </tr>
            )
        });


        return (
            <div className="Incomplete_master">

                <h1>Incomplete Tasks:</h1>

                <table className="reminders_table">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Task Date</th>
                            <th>Frequency</th>
                            {/* <th>Edit</th> */}
                        </tr>
                        {userRemindersList}
                    </tbody>
                </table>

            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user, frequencies, userReminders, userReminderTemplates } = state
    return {
        user,
        frequencies,
        userReminders,
        userReminderTemplates
    }
}

export default connect(mapStateToProps, { getUser, getFrequencies, getUserReminders, getUserReminderTemplates })(Incomplete)