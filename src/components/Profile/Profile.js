import React, { Component } from 'react';
import './Profile.css';
import { getUser } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';
import Contact from './Contact/Contact'


class Profile extends Component {

    render() {
        let user = this.props.user;
        console.log('profile user is ', user)
        return (
            <div className="Profile_master">
                <Topnav />
                <div className="profile_wrapper">
                    <div className="profile_left_column">
                        <div className="profile_pic">
                            {user ? <img src={user.profile_img} alt='user profile' /> : null}
                        </div>
                    </div>

                    <div className="profile_subnav_wrapper">
                        <div className="profile_subnav">
                            <a href="">Contact</a>
                            <a href="">Notifications</a>
                            <a href="">Address</a>
                            <a href="">Personal</a>
                        </div>
                        
                    <div className="selected_data_category">
                        <Contact/>
                    </div>
                    </div>

                </div>


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

export default connect(mapStateToProps, { getUser })(Profile)