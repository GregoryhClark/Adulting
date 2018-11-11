import React, { Component } from 'react';
import axios from 'axios';
import { getUser, getFrequencies, getUserReminders, getUserReminderTemplates } from '../../../ducks/users';
import { connect } from 'react-redux';
import TemplatesTable from './TemplatesTable/TemplatesTable';

class Templates extends Component {

    componentDidMount() {
        this.props.getUser()
            .then((res) => {
                // console.log('here it is!', res.value)
                this.props.getUserReminderTemplates(res.value.id)
            })
    }

    editTemplate(templateID) {
        alert(`Hah! Yeah... this feature isn't ready yet... sorry. ${templateID}`)

        console.log("template id is", templateID)
        // axios.put
    }
    deleteTemplate(templateID) {
        console.log("template id is", templateID)
        axios.delete(`/delete_template/${templateID}`).then(() => {
            this.props.getUserReminderTemplates(this.props.user.id)
        })
    }

    render() {

        return (
            <div className="Templates_master">
            <TemplatesTable reminderTemplates = {this.props.userReminderTemplates}/>

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

export default connect(mapStateToProps, { getUser, getFrequencies, getUserReminders, getUserReminderTemplates })(Templates)