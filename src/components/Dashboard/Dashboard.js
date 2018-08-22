import React, { Component } from 'react';
import './Dashboard.css';
import { getUser, getFrequencies, getUserReminders, getStates, getUserReminderTemplates } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';
import DashTable from './DashTable/DashTable';
import Button from '@material-ui/core/Button';


class Dashboard extends Component {

    componentDidMount() {

        this.props.getUser()
            .then((res) => {
                this.props.getUserReminders(res.value.id)
                this.props.getUserReminderTemplates(res.value.id)
            })
        this.props.getFrequencies()
        this.props.getStates()
        

    }
    goToSurvey(){
        alert("Hah! Yeah... this feature isn't ready yet... sorry")
    }

    render() {
        const user = this.props.user;
        // console.log(this.props.userReminders)
        // let remindersToDisplay = this.props.userReminders.map((reminder, index) => {
        //     if(index < 5){
        //     return (
        //         <tr key ={index}>
        //             <td>{reminder.title}</td>
        //             <td>{reminder.first_instance_date.substring(0, 10)}</td>
        //             <td>{reminder.frequency}</td>
        //         </tr>
        //     )
            
        // }

        // else {return null}
        // });
        return (
            <div className="dashboard_master">
            
            <div>
                <Topnav />
                
                <div className="dash_pic">
                    {user ? <img src={user.profile_img} alt='user profile' /> : null}
                </div>
                <div className="user_name_div">
                    {user.first_name} {user.last_name}

                    <Button variant="outlined" className="btn_take_survey" onClick={()=>{this.goToSurvey()}}>Take Survey</Button>

                </div>

                <div className="dash_div">

                <div className="right_column">
                    <h3>Suggested</h3>
                </div>

                    <div className="dash_table_wrapper">
                        <h1 className="main_h1">Coming Up</h1>
                        {/* <table className="dash_table">
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Start Date</th>
                                    <th>Frequency</th>
                                </tr>
                                {remindersToDisplay}
                                
                            </tbody>
                        </table> */}
                        <DashTable userReminders = {this.props.userReminders} />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user, userReminders, frequencies, userReminderTemplates } = state
    return {
        user,
        frequencies,
        userReminders,
        userReminderTemplates
    }
}

export default connect(mapStateToProps, { getUser, getFrequencies, getUserReminders, getStates, getUserReminderTemplates })(Dashboard)