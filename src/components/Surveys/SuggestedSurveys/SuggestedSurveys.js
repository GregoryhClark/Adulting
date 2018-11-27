import React, { Component } from 'react';
// import './Personal.css';
// import { getUser } from './../../../ducks/users';
// import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';

class SuggestedSurveys extends Component {
    render() {

        return(
            <div className="suggestedsurveys_master">
            <Card>
                <CardContent>
                <h1>Suggested Surveys will appear here.</h1>

                </CardContent>
            </Card>
                
            </div>
        )
    }
}
// function mapStateToProps(state) {
//     const { user } = state
//     return {
//         user
//     }
// }

export default (SuggestedSurveys)