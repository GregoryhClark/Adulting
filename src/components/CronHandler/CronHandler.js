require('dotenv').config();
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

        const db = app.get('db');
        db.check_reminders().then((reminders) => { 
            console.log(reminders) 
            //Now we can do what must be done....
            //Execute Order 66...
        })


    }


}

module.exports = CronHandler;

