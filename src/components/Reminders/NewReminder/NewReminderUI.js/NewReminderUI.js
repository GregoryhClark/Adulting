import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';


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
            <FormControl className={classes.formControl}>
                <NativeSelect
                    // value={this.state.frequency}
                    // onChange={this.handleChange('frequency')}
                    name="Increments"
                >
                    <option value="None">Minutes</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>

        </div>
    )

    NewReminderUI.PropTypes = {
        classes: PropTypes.object.isRequired,
    }

}
export default withStyles(styles)(NewReminderUI);

