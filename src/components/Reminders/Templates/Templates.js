import React, { Component } from 'react';

class Templates extends Component {
    render() {

        let templatesList = this.props.templates.map((template, index)=>{

            if(template.first_instance_date) {
                return <tr key ={index}>
                <td>{template.title}</td>
                <td>{template.first_instance_date.substring(0, 10)}</td>
                <td>{template.frequency}</td>
                <td><button>Edit</button><button>Delete</button></td>
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