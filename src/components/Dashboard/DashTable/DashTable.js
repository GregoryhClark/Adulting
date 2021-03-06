import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function DashTable(props) {
  const { classes } = props;

  let userReminders = props.userReminders.length >= 1 ? props.userReminders.filter((reminder, index) => {
    if (reminder.is_deleted === false && reminder.completed === false) {
      return (
        {
          id: index + 1,
          title: reminder.title,
          firstInstanceDate: reminder.first_instance_date.substring(0, 10),
          frequency: reminder.frequency
        }
      )
    }
    else return 'who am I?!';

  })
    : [];

  let rows = userReminders.length >= 1 ? userReminders.slice(0, 5)
    : [];

  let rowCells = rows.length >= 1 ?
    rows.map(row => {
      return (
        <TableRow key={row.id}>

          <TableCell component="th" scope="row">
            {row.title}
          </TableCell>
          <TableCell >{row.first_instance_date.substring(0, 10)}</TableCell>
          <TableCell >{row.frequency}</TableCell>
        </TableRow>
      );
    })
    : 'what am I?!';
  // console.log(props.userReminders)
  // console.log(userReminders)
  // console.log("rows -", rows)
  let upNextTable = <div>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Reminder</TableCell>
            <TableCell >Start Date</TableCell>
            <TableCell >Frequency</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rowCells}
        </TableBody>
      </Table>
    </Paper>
  </div>

  let nothingUpcoming = <div>You have no reminders.</div>

  let upNextDisplay = userReminders.length >= 1 ? upNextTable : nothingUpcoming;

  return (
    <div>
      {upNextDisplay}
    </div>
  );
}

DashTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashTable);
