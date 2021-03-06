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


function TemplatesTable(props) {
  const { classes } = props;

function editTemplate(templateID) {
    alert(`Hah! Yeah... this feature isn't ready yet... sorry. ${templateID}`)

    console.log("template id is", templateID)
    // axios.put
}
function editClick(templateID){

}
function deleteTemplate(templateID) {
    console.log("template id is", templateID)
    axios.delete(`/delete_template/${templateID}`).then(() => {
        // The following line worked when I didn't have MaterialUI 
        // implemented and I could use Redux. I am refreshing the page now, 
        // but this should be addressed later. There is likely a better way.
        // this.props.getUserReminderTemplates(this.props.user.id)
        window.location.reload()
    })
}


  let newRows = props.reminderTemplates.length>=1? props.reminderTemplates.map((template, index) =>{
    return {
        id:index+1,
        title:template.title,
        startDate:template.first_instance_date.substring(0, 10),
        frequency:template.frequency,
        templateID:template.id,
        editButton:<Button value={template.id} onClick={(e) => { editTemplate(template.id) }}variant="outlined">Edit</Button>,
        deleteButton:<Button value={template.id} onClick={(e) => { deleteTemplate(template.id) }}color="secondary"variant="outlined">Delete</Button>

    }
  }) 

  :[]

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell >Initial Date</TableCell>
            <TableCell >Frequency</TableCell>
            <TableCell >Options</TableCell>
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