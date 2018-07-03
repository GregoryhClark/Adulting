import React, { Component } from 'react';

class Incomplete extends Component {
    render() {


        return (
            <div className="Incomplete_master">
                <h1>Stuff here</h1>

                <h1>Your Reminders:</h1>

                <table className="reminders_table">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Start Date</th>
                            <th>Frequency</th>
                            <th>Completed</th>
                            <th>Edit</th>
                        </tr>
                        {this.props.userRemindersList}
                    </tbody>
                </table>

            </div>
        )
    }
}


export default (Incomplete)