import React, { Component } from 'react';
import './Dashboard.css';
import { getUser, getFrequencies, getUserReminders } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';


class Dashboard extends Component {

    componentDidMount() {

        this.props.getUser()
            .then((res) => {
                this.props.getUserReminders(res.value.id)
            })
        this.props.getFrequencies()

    }

    render() {
        const user = this.props.user;
        let reminders = this.props.userReminders

        let remindersToDisplay = this.props.userReminders.map((reminder) => {

            return (
                <tr>
                    <td>{reminder.title}</td>
                    <td>{reminder.start_date}</td>
                    <td>{reminder.frequency}</td>
                </tr>
            )
        });

        console.log(reminders)

        return (
            <div className="dashboard_master">
                <Topnav />
                <div className="dash_pic">
                    {user ? <img src={user.profile_img} alt='user profile' /> : null}
                </div>
                <div className="user_name_div">{user.first_name} {user.last_name}</div>

                <div className="dash_span">
                    <h1>Coming Up</h1>
                    <table className="dash_table">
                        <tbody>
                            <tr>
                                <th>Title</th>
                                <th>Start Date</th>
                                <th>Frequency</th>
                            </tr>
                            {remindersToDisplay}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user, userReminders, frequencies } = state
    return {
        user,
        frequencies,
        userReminders
    }
}

export default connect(mapStateToProps, { getUser, getFrequencies, getUserReminders })(Dashboard)