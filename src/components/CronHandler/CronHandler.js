require('dotenv').config();

const nodemailer = require('nodemailer')
const {
    EMAIL_PASS,
    EMAIL_USER
} = process.env;


class CronHandler {

    static checkReminder() {
        console.log('Hello world')
    }
    static checkTheReminder(app) {
        //console.log("running a task every minute");
        //assign variable to current date
        let currentDate = new Date();
        // console.log(currentDate)
        //assign variable to current hour
        let currentHour = currentDate.getHours();
        // console.log('hours', currentHour)
        //assign variable to current min
        let currentMinute = currentDate.getMinutes();
        // console.log('minute', currentMinute);
        let testDate = new Date('May 18, 2018 03:24:00');
        let testHour = 3;
        let testMin = 30;

        const db = app.get('db');
        // db.check_reminders([currentDate, currentHour, currentMinute]).then((reminders) => { 
        db.check_reminders([testDate, testHour, testMin]).then((reminders) => {
           
            console.log('here they are', reminders) 
            reminders.map((reminder)=>{
                if(reminder.email_notify === true && reminder.reminder_is_deleted === false && reminder.user_is_deleted === false){
                    console.log('email will be sent')
                }
                if(reminder.text_notify === true && reminder.reminder_is_deleted === false && reminder.user_is_deleted === false){
                    console.log('text will be sent')
                }
                if(reminder.in_app_notify === true && reminder.reminder_is_deleted === false && reminder.user_is_deleted === false){
                    console.log('in-app notification will be sent')
                }
            })

           
            //Execute Order 66...

        })


    }


}

module.exports = CronHandler;

