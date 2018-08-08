import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import '../Topnav.css';

class TopHamMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const { REACT_APP_LOGOUT } = process.env;

        return (
            <div className="TopHamMenuMaster">
                <Button

                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MenuIcon />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}><a className="unstyledA" href="/#/dashboard">Dashboard</a></MenuItem>
                    <MenuItem onClick={this.handleClose}><a className="unstyledA" href="/#/reminders">Reminders</a></MenuItem>
                    <MenuItem onClick={this.handleClose}><a className="unstyledA" href="/#/profile">Profile</a></MenuItem>
                    <MenuItem onClick={this.handleClose}><a className="unstyledA" href={REACT_APP_LOGOUT}>Logout</a></MenuItem>
                </Menu>
            </div>
        );
    }
}

export default TopHamMenu;