import React, { Component } from 'react';
import './Profile.css';
import { getUser } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';
import ProfileSubnav from './ProfileSubnav/ProfileSubnav';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            selectedSubnav: 'profile_subnav_notifications'///////////////////
        }
    }

    selectSubnavTab(tab) {
        this.setState({
            selectedSubnav: tab.id
        })
    }

    render() {
        let user = this.props.user;
        // console.log('profile user is ', user)
    
        return (
            <div className="Profile_master">
                <Topnav />
                <div className="profile_wrapper">
                    <div className="profile_left_column">
                        <div className="profile_pic">
                            {user ? <img src={user.profile_img} alt='user profile' /> : null}
                        </div>
                    </div>{/*left_column  */}

                    <ProfileSubnav user={this.props.user} />
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