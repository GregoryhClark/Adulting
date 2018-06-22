require('dotenv').config();


module.exports = {

    getFrequencies: (req, res) => {
        const db = req.app.get('db');
        db.get_frequencies()
            .then((frequencies) => { res.status(200).send(frequencies) })
            .catch(() => res.status(500).send())
    },
    getAllStates: (req, res) => {
        const db = req.app.get('db');
        db.get_all_states()
            .then((states) => { res.status(200).send(states) })
            .catch(() => res.status(500).send())
    },
    getUserReminders: (req, res) => {
        const db = req.app.get('db');
        db.get_user_reminders([req.params.id])
            .then((reminders) => { res.status(200).send(reminders) })
            .catch(() => res.status(500).send())
    },
    getCountry: (req, res) => {
        const db = req.app.get('db');
        db.get_country([req.params.id])
            .then((country) => { res.status(200).send(country) })
            .catch(() => res.status(500).send())
    },

    addReminderTemplate: (req, res) => {
        const db = req.app.get('db');
        const { user, title, frequency } = req.body;
        db.add_reminder_template([user, title, frequency])
            .then((template) => { res.status(200).send(template) })
            .catch(() => res.status(500).send())
    },
    addReminderInstance: (req, res) => {
        const db = req.app.get('db');
        const { userId, instanceId, startDate, startHour, startMin, endDate, endHour, endMin } = req.body;
        db.add_reminder_instance([userId, instanceId, startDate, startHour, startMin, endDate, endHour, endMin])
            .then((instance) => { res.status(200).send(instance) })
            .catch(() => res.status(500).send())
    },
    updateUserCountry: (req, res) => {
        const db = req.app.get('db');
        const { id, country } = req.body;
        console.log(country)
        console.log(id)
        db.update_user_country([country, id])
            .then((user) => { res.status(200).send(user) })
            .catch(() => res.status(500).send())
    },
    updateUserStreet: (req, res) => {
        const db = req.app.get('db');
        const { id, street } = req.body;
        db.update_user_street([street, id])
            .then((user) => { res.status(200).send(user) })
            .catch(() => res.status(500).send())
    },
    updateUserCity: (req, res) => {
        const db = req.app.get('db');
        const { id, city } = req.body;
        db.update_user_city([city, id])
            .then((user) => { res.status(200).send(user) })
            .catch(() => res.status(500).send())
    },
    updateUserState:(req, res) => {
        const db = req.app.get('db');
        const { id, state } = req.body;
        db.update_user_state([state, id])
            .then((state) => { res.status(200).send(state) })
            .catch(() => res.status(500).send())
    },
    updateEmailPreferences:(req, res) => {
        const db = req.app.get('db');
        const { user_id, notify_email } = req.body;
        db.update_email_prefs([notify_email, user_id])
            .then((state) => { res.status(200).send(state) })
            .catch(() => res.status(500).send())
    },
    updateTextPreference:(req, res) => {
        const db = req.app.get('db');
        const { user_id, notify_text } = req.body;
        db.update_text_prefs([notify_text, user_id])
            .then((state) => { res.status(200).send(state) })
            .catch(() => res.status(500).send())
    },
    updateInAppPrefs:(req, res) => {
        const db = req.app.get('db');
        const { user_id, notify_inApp } = req.body;
        db.update_in_app_prefs([notify_inApp, user_id])
            .then((state) => { res.status(200).send(state) })
            .catch(() => res.status(500).send())
    },
    

}