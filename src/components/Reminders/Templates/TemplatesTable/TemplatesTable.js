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




function TemplatesTable(props) {
  const { classes } = props;

function editTemplate(templateID) {
    alert(`Hah! Yeah... this feature isn't ready yet... sorry. ${templateID}`)

    console.log("template id is", templateID)
    // axios.put
}
function deleteTemplate(templateID) {
    console.log("template id is", templateID)
    axios.delete(`/delete_template/${templateID}`).then(() => {
        this.props.getUserReminderTemplates(this.props.user.id)
    })
}


  let newRows = props.reminderTemplates.length>=1? props.reminderTemplates.map((template, index) =>{
    return {
        id:index+1,
        title:template.title,
        startDate:template.first_instance_date.substring(0, 10),
        frequency:template.frequency,
        editButton:<Button value={template.id} onClick={(e) => { editTemplate(e.target.value) }}variant="outlined">Edit</Button>,
        deleteButton:<Button value={template.id} onClick={(e) => { deleteTemplate(e.target.value) }}color="secondary"variant="outlined">Delete</Button>

    }
  }) 

  :[]
  console.log(props.reminderTemplates)



  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell >Calories</TableCell>
            <TableCell >Fat (g)</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newRows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell >{row.startDate}</TableCell>
                <TableCell >{row.frequency}</TableCell>
                <TableCell >{row.editButton}{row.deleteButton}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TemplatesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplatesTable);