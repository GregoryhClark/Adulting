import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Incomplete from './Incomplete/Incomplete';
import NewReminder from './NewReminder/NewReminder';
import Templates from './Templates/Templates';
// import TopNav from '../Topnav/Topnav';
import './Reminders.css';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
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

class ReminderTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,///Change this back to 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    // console.log(this.props)

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
            <Tab label="Recurring" />
            <Tab label="Create New" />
            <Tab label="Incomplete" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><Templates /></TabContainer>
          <TabContainer dir={theme.direction}><NewReminder /></TabContainer>
          <TabContainer dir={theme.direction}><Incomplete /></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

ReminderTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default (withStyles(styles, { withTheme: true })(ReminderTabs))

