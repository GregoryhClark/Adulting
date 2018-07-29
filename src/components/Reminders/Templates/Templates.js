import React, { Component } from 'react';
import axios from 'axios';

class Templates extends Component {

    editTemplate(templateID){
        console.log("template id is" , templateID)
        // axios.put
    }
    deleteTemplate(templateID){
        alert(`Hah! Yeah... this feature isn't ready yet... sorry. ${templateID}`)
        axios.delete(`/delete_template/${templateID}`)
    }

    render() {

        let templatesList = this.props.templates.map((template, index)=>{

            if(template.first_instance_date) {
                return <tr key ={index}>
                <td>{template.title}</td>
                <td>{template.first_instance_date.substring(0, 10)}</td>
                <td>{template.frequency}</td>
                <td><button value={template.id} onClick={(e)=>{this.editTemplate(e.target.value)}}>Edit</button>
                    <button value={template.id} onClick={(e)=>{this.deleteTemplate(e.target.value)}}>Delete</button>
                </td>
            </tr> 
            }
            else {return null}

  
        })
        return(
            <div className="Templates_master">

                <table className="reminders_table">
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Initial Date</th>
                                    <th>Frequency</th>
                                    <th>Other</th>
                                </tr>
                                {templatesList}
                            </tbody>
                        </table>
            </div>
        )
    }
}
export default (Templates)