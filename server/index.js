require('dotenv').config(); //require the .env file

const express = require('express')
, session =require('express-session')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, massive = require('massive')
, controller = require('../src/controllers/controller.js')
, cronHandler = require('../src/components/CronHandler/CronHandler.js')
, bodyParser = require('body-parser')//Dont forget this next time you fool!!!!
, exphbs = require('express-handlebars')
, nodemailer = require('nodemailer')
, cors = require('cors')
, cron = require('node-cron')
, fs = require('fs');

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING,
    EMAIL_PASS,
    EMAIL_USER,
    LOGOUT,
    REACT_APP_LOGIN_SUCCESS,
    REACT_APP_LOGIN_FAIL
} = process.env;

const app = express();
massive(CONNECTION_STRING).then(db => {
    app.set('db' ,db);
})

app.use(cors());

app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true

}));

app.use(passport.initialize());
app.use(passport.session());


passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done){
    
    const db = app.get('db');
    db.find_user([profile.id])
    .then( user => {
        if (!user[0]){
            db.create_user([profile.picture, profile.id, profile.nickname, profile.name.givenName, profile.name.familyName, 1])
            .then(res => {
                done(null, res[0].id);
            })
        } else {
            done(null, user[0].id)
        }
    })

}));

passport.serializeUser((id, done)=> {
    done(null, id)
});

passport.deserializeUser((id, done)=> {
    app.get('db').find_session_user([id])
    .then(user => {
        done(null, user[0])
    })
    
});
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: REACT_APP_LOGIN_SUCCESS,
    failureRedirect: REACT_APP_LOGIN_FAIL
} ))
app.get('/auth/me', (req,res) => {
    if (req.user){
        res.status(200).send(req.user);
    } else{
        res.status(401).send("Nice try suckaaaa!!!!")
    }
})
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(LOGOUT)
})
app.get('/frequencies', controller.getFrequencies)
app.get('/reminders/:id', controller.getUserReminders)
app.get('/country/id', controller.getCountry)
app.get('/states', controller.getAllStates)

//This is depricated.... not being used
// app.post('/addReminderTemplate', controller.addReminderTemplate)
//This is depricated.... not being used
// app.post('/addReminderInstance', controller.addReminderInstance)
//create new reminder template and instance
app.post('/create_reminder', controller.create_reminder)

app.put('/update_country', controller.updateUserCountry)
app.put('/update_street', controller.updateUserStreet)
app.put('/update_city', controller.updateUserCity)
app.put('/update_state', controller.updateUserState)
app.put('/email_notifications_settings', controller.updateEmailPreferences)
app.put('/text_notifications_settings', controller.updateTextPreference)
app.put('/in_app_notifications_settings', controller.updateInAppPrefs)


//Cron jobs
//This is run every minute
cron.schedule("* * * * *", function() {
    cronHandler.sendReminders(app)
    console.log('Still running')
  });



app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
