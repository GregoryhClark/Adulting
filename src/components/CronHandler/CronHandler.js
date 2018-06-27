require('dotenv').config();

const nodemailer = require('nodemailer')
const {
    EMAIL_PASS,
    EMAIL_USER
} = process.env;


class CronHandler {

    // static checkReminder() {
    //     console.log('Hello world')
    // }
    static checkTheReminder(app) {
        //console.log("running a task every minute");

        const db = app.get('db');
        // db.check_reminders([currentDate, currentHour, currentMinute]).then((reminders) => { 
        db.check_reminders().then((reminders) => {

            console.log('here they are', reminders) /////
            reminders.map((reminder) => {

                //send email to that user with the reminder details.
                if (reminder.email_notify === true) {
                    console.log('email will be sent')
                    let transporter = nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 465,
                        secure: true, // true for 465, false for other ports
                        auth: {
                            user: EMAIL_USER, // generated ethereal user
                            pass: EMAIL_PASS // generated ethereal password
                        }
                    });

                    let urlToLogin = 'http://localhost:3000/#/'//???
                    // setup email data with unicode symbols
                    let mailOptions = {
                        from: `"Adulting App" <${EMAIL_USER}>`, // sender address
                        //WE STILL NEED TO GET THE EMAIL FORMAT THING FIXED BECAUSE THIS ASSUMES THE EMAIL IS GMAIL!
                        to: `${reminder.email}@gmail.com`, // list of receivers
                        subject: `testing reminder!`, // Subject line
                        text: `Hey ${reminder.first_name}, This is your reminder email for ${reminder.title}! Click <a href ${urlToLogin}.`, // plain text body
                        html: `<b>Hey ${reminder.first_name}, This is your reminder email for ${reminder.title}! Click <a href="http://localhost:3000/#/">here<a> to indicate that you're done with this task.</b>` // html body
                    };

                    //send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message sent: %s', info.messageId);

                        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                    });

                }

                //send text with the reminder details
                if (reminder.text_notify === true) {
                    console.log('text will be sent')
                }
                //send in-app notification
                if (reminder.in_app_notify === true) {
                    //add notification to new notifications array.
                    console.log('in-app notification will be sent')
                }

                //create new instance, set old instance to alerted=true


                //Daily
                if (reminder.frequency === 1) {

                    db.clone_reminder([reminder.user_id, reminder.reminder_template, reminder.alert_date, '1 day', reminder.id]).then((clonedReminder) => {


                    })

                }
                //Weekly
                else if (reminder.frequency === 2) {

                    db.clone_reminder([reminder.user_id, reminder.reminder_template, reminder.alert_date, '7 days', reminder.id]).then((clonedReminder) => {


                    })

                }
                //Bi-weekly
                else if (reminder.frequency === 3) {

                    db.clone_reminder([reminder.user_id, reminder.reminder_template, reminder.alert_date, '14 days', reminder.id]).then((clonedReminder) => {


                    })

                }
                //Monthly
                else if (reminder.frequency === 4) {

                    db.clone_reminder([reminder.user_id, reminder.reminder_template, reminder.alert_date, '1 month', reminder.id]).then((clonedReminder) => {


                    })

                }
                //Yearly
                else {

                    db.clone_reminder([reminder.user_id, reminder.reminder_template, reminder.alert_date, '1 year', reminder.id]).then((clonedReminder) => {


                    })

                }
                //Custom!!!!!!!!!!!!!!

                //One-time!!!!!!!!!!!!!!!









            })//close map over array of reminders


            //Execute Order 66...

        })





    }


}

module.exports = CronHandler;

