import React from 'react';
import PropTypes, { func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
});

function AddressUI(props) {
    const { classes } = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                <h2>Address Stuff</h2>

                    <div className = "address_country">
                    <h3>Country:</h3>
                    <p>DATA HERE</p><Button>Edit</Button>
                    </div>

                    <div className = "address_street">
                    <h3>Street:</h3>
                    <p>DATA HERE</p><Button>Edit</Button>
                    </div>

                    <div className = "address_city">
                    <h3>City:</h3>
                    <p>DATA HERE</p><Button>Edit</Button>
                    </div>

                    <div className = "address_state">
                    <h3>State:</h3>
                    <p>DATA HERE</p><Button>Edit</Button>
                    </div>

                    <div className = "address_postal_code">
                    <h3>Zip:</h3>
                    <p>DATA HERE</p><Button>Edit</Button>
                    </div>
                    
                </CardContent>
            </Card>
        </div>
    )
}


export default withStyles(styles)(AddressUI);