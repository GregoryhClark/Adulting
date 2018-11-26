import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';



const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        // width: 500,
    },
});

function ContactUI(props) {
    const {classes } = props;

 return (
     <div>
         <Card className={classes.card}>
            <CardContent>
                <div className="user_contact_email">
                    <h4>Email</h4>
                    <h4>{props.user.email}@gmail.com</h4>
                    <Button className="Button_edit_email">Edit</Button>
                </div>
                <div className="user_contact_mobile">
                    <h4>Mobile</h4>
                    <h4>{props.user.mobile_phone !== null ? props.user.mobile_phone : "None" } </h4>
                    <Button className="Button_edit_mobile">Edit</Button>
                </div>
            </CardContent>

         </Card>

     </div>
 )
 }

 export default withStyles(styles)(ContactUI);