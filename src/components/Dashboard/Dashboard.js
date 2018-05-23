import React, { Component } from 'react';
import './Dashboard.css';
import { getUser, getFrequencies, getUserReminders, getStates } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';


class Dashboard extends Component {

    componentDidMount() {

        this.props.getUser()
            .then((res) => {
                this.props.getUserReminders(res.value.id)
            })
        this.props.getFrequencies()
        this.props.getStates()

    }

    render() {
        const user = this.props.user;
        let remindersToDisplay = this.props.userReminders.map((reminder, index) => {

            return (
                <tr key ={index}>
                    <td>{reminder.title}</td>
                    <td>{reminder.start_date.substring(0, 10)}</td>
                    <td>{reminder.frequency}</td>
                </tr>
            )
        });
        return (
            <div className="dashboard_master">
                <Topnav />
                <div className="dash_pic">
                    {user ? <img src={user.profile_img} alt='user profile' /> : null}
                </div>
                <div className="user_name_div">
                    {user.first_name} {user.last_name}

                    <button className="btn_take_survey">Take Survey</button>

                </div>

                <div className="dash_div">

                <div className="right_column">
                    <h3>Suggested</h3>
                </div>

                    <div className="dash_table_wrapper">
                        <h1 className="main_h1">Coming Up</h1>
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

export default connect(mapStateToProps, { getUser, getFrequencies, getUserReminders, getStates })(Dashboard)