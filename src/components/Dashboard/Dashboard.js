import React, { Component } from 'react';
import './Dashboard.css';
import { getUser } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';


class Dashboard extends Component {

    componentDidMount() {

        this.props.getUser()
            .then((res) => {
                // console.log('here it is!', res.value)
            })

    }

    render() {
        const user = this.props.user;

        let eventsToDisplay 

        return (
            <div className="dashboard_master">
                <Topnav/>
                <div className="dash_pic">
                        {user ? <img src={user.profile_img} alt='user profile' /> : null}
                    </div>
                    <div>{user.first_name} {user.last_name}</div>
                <h1>Coming Up:</h1>
                <ul>
                    
                </ul>
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

export default connect(mapStateToProps, { getUser })(Dashboard)