import React, { Component } from 'react';

class Templates extends Component {
    render() {
        // console.log(this.props.user)
        console.log(this.props.templates)

        let templatesList = this.props.templates.map((template, index)=>{
            return <tr key ={index}>
                        <td>{template.title}</td>
                        <td>{template.first_instance_date}</td>
                        <td>{template.frequency}</td>
                        <td><button>Edit</button></td>
                    </tr>   
        })


        return(
            <div className="Templates_master">
                <h1>{this.props.user.first_name}</h1>

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