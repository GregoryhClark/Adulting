import React, { Component } from 'react';
import axios from 'axios';
import { getUser, getFrequencies, getUserReminders, getUserReminderTemplates } from '../../../ducks/users';
import { connect } from 'react-redux';
import TemplatesTable from './TemplatesTable/TemplatesTable';

// import Button from '@material-ui/core/Button';

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

        // let templatesList = this.props.userReminderTemplates.length? this.props.userReminderTemplates.map((template, index) => {

        //     if (template.first_instance_date && template.is_deleted === false) {
        //         return <tr key={index}>
        //             <td>{template.title}</td>
        //             <td>{template.first_instance_date.substring(0, 10)}</td>
        //             <td>{template.frequency}</td>
        //             <td><button value={template.id} onClick={(e) => { this.editTemplate(e.target.value) }}>Edit</button>
        //                 <button value={template.id} onClick={(e) => { this.deleteTemplate(e.target.value) }}>Delete</button>
        //             </td>
        //         </tr>
        //     }
        //     else { return null }


        // })
        // :null
        return (
            <div className="Templates_master">
            <TemplatesTable reminderTemplates = {this.props.userReminderTemplates}/>

                {/* <table className="reminders_table">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Initial Date</th>
                            <th>Frequency</th>
                            <th>Other</th>
                        </tr>
                        {templatesList}
                    </tbody>
                </table> */}
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