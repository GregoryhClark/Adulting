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
                //For optimization, these conditions should be applied to the SQL query, not here
                //send email to that user with the reminder details.
                if(reminder.email_notify === true && reminder.reminder_is_deleted === false && reminder.user_is_deleted === false){
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

                    let urlToLogin = 'http://localhost:3000/#/'
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
                //For optimization, these conditions should be applied to the SQL query, not here
                  //send text with the reminder details
                if(reminder.text_notify === true && reminder.reminder_is_deleted === false && reminder.user_is_deleted === false){
                    console.log('text will be sent')
                }
                //For optimization, these conditions should be applied to the SQL query, not here
                if(reminder.in_app_notify === true && reminder.reminder_is_deleted === false && reminder.user_is_deleted === false){
                    console.log('in-app notification will be sent')
                }
            })

           
            //Execute Order 66...

        })

            
  
    //add notification to new notifications array.

    }


}

module.exports = CronHandler;

