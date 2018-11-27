import React, { Component } from 'react';
import { getUser, getFrequencies, getUserReminders, getUserReminderTemplates } from '../../../ducks/users';
import { connect } from 'react-redux';
import IncomleteTable from './IncompleteTable/IncompleteTable';

class Incomplete extends Component {

    componentDidMount(){
        this.props.getUser()
            .then((res) => {
                this.props.getUserReminders(res.value.id)
            })
    }
    render() {
        return (
            <div className="Incomplete_master">
                <h1>Incomplete Tasks:</h1>
                {<IncomleteTable getUserReminders = {this.props.getUserReminders} userReminders = {this.props.userReminders}/>}
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