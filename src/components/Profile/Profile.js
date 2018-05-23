import React, { Component } from 'react';
import './Profile.css';
import { getUser } from './../../ducks/users';
import { connect } from 'react-redux';
import Topnav from '../Topnav/Topnav';
import Contact from './Contact/Contact';
import Personal from './Personal/Personal';
import ProfNotifications from './Prof_Notifications/Prof_Notifications';
import Address from './Address/Address';



class Profile extends Component {
    constructor() {
        super()
        this.state = {
            selectedSubnav:'profile_subnav_address'
        }
    }

    selectSubnavTab(tab) {
        this.setState({
            selectedSubnav:tab.id
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
                    </div>

                    <div className="profile_subnav_wrapper">
                        <div className="profile_subnav">
                            <a href="http://localhost:3000/#/profile" id="profile_subnav_contact" onClick={(e) => { this.selectSubnavTab(e.target) }}>Contact</a>
                            <a href="http://localhost:3000/#/profile" id="profile_subnav_notifications" onClick={(e) => { this.selectSubnavTab(e.target) }}>Notifications</a>
                            <a href="http://localhost:3000/#/profile" id="profile_subnav_address" onClick={(e) => { this.selectSubnavTab(e.target) }}>Address</a>
                            <a href="http://localhost:3000/#/profile" id="profile_subnav_personal" onClick={(e) => { this.selectSubnavTab(e.target) }}>Personal</a>
                        </div>

                        <div className="selected_data_category">
                            {this.state.selectedSubnav === "profile_subnav_contact"? <Contact /> : null}
                            {this.state.selectedSubnav === "profile_subnav_notifications"? <ProfNotifications /> : null}
                            {this.state.selectedSubnav === "profile_subnav_address"? <Address /> : null}
                            {this.state.selectedSubnav === "profile_subnav_personal"? <Personal /> : null}
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