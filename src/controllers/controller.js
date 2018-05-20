require('dotenv').config();

const nodemailer = require('nodemailer')
const {
    EMAIL_PASS,
    EMAIL_USER
} = process.env;

module.exports = {

    getFrequencies: (req, res) => {
        const db = req.app.get('db');
        db.get_frequencies()
            .then((frequencies) => { res.status(200).send(frequencies) })
            .catch(() => res.status(500).send())

    },
    getUserReminders: (req, res) => {
        const db = req.app.get('db');
        db.get_user_reminders([req.params.id])
            .then((reminders) => { res.status(200).send(reminders) })
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
    updateAddress: (req, res) => {
        const db = req.app.get('db');
        const { id, address_country } = req.body;
        db.update_user_country([address_country, id])
            .then((user) => { res.status(200).send(user) })
            .catch(() => res.status(500).send())
    },
    updateUserStreet: (req, res) => {
        const db = req.app.get('db');
        const { id, street } = req.body;
        db.update_user_street([street, id])
            .then((user) => { res.status(200).send(user) })
            .catch(() => res.status(500).send())
    }

}