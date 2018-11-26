import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Contact from '../Contact/Contact';
import Personal from '../Personal/Personal';
import ProfNotifications from '../Prof_Notifications/Prof_Notifications';
import Address from '../Address/Address';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        // width: 500,
    },
});

class ProfileSubnav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 2,//Change this later
        };
    }

    //functions here
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="Contact" />
                        <Tab label="Personal" />
                        <Tab label="Address" /> 
                        <Tab label="Notifications" />

                    </Tabs>

                </AppBar>

                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}><Contact /></TabContainer>
                    <TabContainer dir={theme.direction}><Personal /></TabContainer> 
                    <TabContainer dir={theme.direction}><Address /></TabContainer>
                    <TabContainer dir={theme.direction}><ProfNotifications userID = {this.props.userID} /></TabContainer>

                </SwipeableViews>
            </div>
        );
    }

}
ProfileSubnav.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default (withStyles(styles, { withTheme: true })(ProfileSubnav))

