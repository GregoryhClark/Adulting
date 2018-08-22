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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function DashTable(props) {
  const { classes } = props;

let userReminders = props.userReminders?  props.userReminders.map((reminder, index) => {
    if(reminder.is_deleted === false && reminder.completed === false){
        return (
            {
                id:index+1,
                title:reminder.title,
                firstInstanceDate:reminder.first_instance_date.substring(0, 10),
                frequency:reminder.frequency
            }
        )
    }
    return null
})
:null;

  let rows = userReminders.length > 0? userReminders.slice(0,5)

  :null;

  let rowCells = rows == null ? null

  : 
  rows.map(row => {
    return (
      <TableRow key={row.id}>

        <TableCell component="th" scope="row">
        {row.title}
        </TableCell>
        <TableCell >{row.firstInstanceDate}</TableCell>
        <TableCell >{row.frequency}</TableCell>
        {/* <TableCell numeric>{row.protein}</TableCell> */}
      </TableRow>
    );
  })

  console.log(userReminders)
  console.log(rows)

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Reminder</TableCell>
            <TableCell >Start Date</TableCell>
            <TableCell >Frequency</TableCell>
            {/* <TableCell numeric>Carbs (g)</TableCell> */}
            {/* <TableCell numeric>Protein (g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowCells}
        </TableBody>
      </Table>
    </Paper>
  );
}

DashTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashTable);