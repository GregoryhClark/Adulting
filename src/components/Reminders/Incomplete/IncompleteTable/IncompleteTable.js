import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

function IncompleteTable(props) {
    const { classes } = props;
    let getUserReminders = props.getUserReminders;

    function handleComplete(reminderID, userID){
        console.log(reminderID)
        let editObj = {
            reminderId:reminderID
        }
        axios.put('/mark_complete', editObj).then(()=>{
            getUserReminders(userID)
            alert('Marked Complete')
        })
    }

    // console.log(props.userReminders);

    // let userReminders = props.userReminders.length >= 1 ? props.userReminders.filter((reminder, index) => {
    //     if (reminder.is_deleted === false && reminder.completed === false) {
    //         return (
    //             {
    //                 id: index + 1,
    //                 title: reminder.title,
    //                 firstInstanceDate: reminder.first_instance_date.substring(0, 10),
    //                 frequency: reminder.frequency
    //             }
    //         )
    //     }
    //     else return 'how am I?!';
    // })
    //     : [];

    let userReminders = props.userReminders.length >= 1 ? props.userReminders.filter((reminder, index) => reminder.completed === false)
        : [];

    console.log(userReminders)

    let rows = userReminders.length >= 1 ? userReminders.slice(0,15)
        : [];

    let rowCells = userReminders.length >= 1 ?
        rows.map(row => {
            return (
                <TableRow key={row.id}>

                    <TableCell component="th" scope="row">
                        {row.title}
                    </TableCell>
                    <TableCell >{row.first_instance_date.substring(0, 10)}</TableCell>
                    <TableCell >{row.frequency}</TableCell>
                    <TableCell><Button onClick={(e) => { handleComplete(row.id, row.user_id)}}>Mark Complete</Button></TableCell>
                </TableRow>
            );
        })
        : 'what IS Happening?';

    let incompleteTable =
        <div>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Reminder</TableCell>
                            <TableCell >Start Date</TableCell>
                            <TableCell >Frequency</TableCell>
                            <TableCell></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowCells}
                    </TableBody>
                </Table>
            </Paper>
        </div>;

let nothingIncomplete = <div>You have no incomplete reminders</div>;

let incompleteDisplay = userReminders.length >= 1 ? incompleteTable : nothingIncomplete;

return (
    <div>
        {incompleteDisplay}
    </div>
);
}
IncompleteTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IncompleteTable);