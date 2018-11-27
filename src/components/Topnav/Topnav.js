import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TopHamMenu from './TopHamMenu/TopHamMenu';
import './Topnav.css';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
const { REACT_APP_LOGOUT } = process.env

function TestTopnav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <TopHamMenu />
          <Typography variant="title" color="inherit" className={classes.flex}>
            Adulting
          </Typography>
          <div className="TopnavButtons">
          <Button color="inherit"><a className = "unstyledA" href="/#/dashboard">Dashboard</a></Button>
          <Button color="inherit"><a className = "unstyledA" href="/#/reminders">Reminders</a></Button>
          <Button color="inherit"><a className = "unstyledA" href="/#/profile">Profile</a></Button>
          <Button color="inherit"><a className = "unstyledA" href="/#/surveys">Surveys</a></Button>
          <Button color="inherit"><a className = "unstyledA" href={REACT_APP_LOGOUT}>Logout</a></Button>
          
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(TestTopnav);
