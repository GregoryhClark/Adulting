import React, { Component } from 'react';
import './Personal.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class Personal extends Component {
    render() {

console.log(this.props.user)
let personalDOB = this.props.user.id > 0 ? this.props.user.dob.substring(0, 10) : "No DOB";

        return(
            <div className="personal_master">
            <Card>
                <CardContent>
                <h1>Date of Birth:</h1>
                <h3 className="dob">{personalDOB}</h3>
                <Button>Edit</Button>
                </CardContent>
            </Card>
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user } = state
    return {
        user
    }
}

export default connect(mapStateToProps, { getUser })(Personal)