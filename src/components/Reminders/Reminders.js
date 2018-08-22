import React, { Component } from 'react';
import './Reminders.css';
import Topnav from '../Topnav/Topnav';
import ReminderTabs from './ReminderTabs';


function Reminders() {

    // render() {

        return (
            <div className="Reminders_master">
                <Topnav />
                <ReminderTabs />
            </div>
        )
    // }
}

export default(Reminders)