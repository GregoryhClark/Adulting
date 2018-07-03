import React, { Component } from 'react';

class Incomplete extends Component {
    render() {


        return (
            <div className="Incomplete_master">

                <h1>Incomplete Tasks:</h1>

                <table className="reminders_table">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Task Date</th>
                            <th>Frequency</th>
                            {/* <th>Edit</th> */}
                        </tr>
                        {this.props.userRemindersList}
                    </tbody>
                </table>

            </div>
        )
    }
}
export default (Incomplete)