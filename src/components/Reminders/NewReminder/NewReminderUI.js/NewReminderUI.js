import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { Typography, Divider } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


// NewReminderUI.propTypes = {
//     children: PropTypes.node.isRequired,
//     dir: PropTypes.string.isRequired,
//   };

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        // width: 500,
    },
});

function NewReminderUI(props) {
    const { classes } = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <h1>New Reminder:</h1>
                    <br></br>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="frequency-native-helper">Frequency</InputLabel>
                        <NativeSelect
                            // value={this.state.frequency}
                            // onChange={this.handleChange('frequency')}
                            required//Not sure if this is valid
                            input={<Input name="frequency" id="frequency-native-helper" />}
                        >
                            <option value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                        <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl>

                    <br />
                    <TextField
                        required
                        id="standard-required"
                        label="Title"
                        className={classes.dense}
                        margin="dense"
                    />
                    <br />
                    <TextField
                        required
                        id="standard-required"//Change all these
                        label="Date"
                        className={classes.dense}
                        type="datetime-local"
                        margin="dense"
                    />
                    <br />

                    <h3>Notification Before: </h3>

                    <TextField
                        id="standard"//Change all these
                        // label="Time Before"
                        defaultValue="10"
                        type="number"
                        className={classes.dense}
                    // margin="dense"
                    />

                    <FormControl className={classes.formControl}>
                        <NativeSelect
                            // value={this.state.frequency}
                            // onChange={this.handleChange('frequency')}
                            name="Increments"
                            defaultValue="Minutes"
                        >
                            <option value="None">Minutes</option>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                        <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl>
                    <br></br>
                </CardContent>
                <CardActions>
                    <Button size="medium">Submit</Button>
                </CardActions>

            </Card>
        </div>
            )
        
    NewReminderUI.PropTypes = {
                classes: PropTypes.object.isRequired,
        }
    
    }
    export default withStyles(styles)(NewReminderUI);
    
