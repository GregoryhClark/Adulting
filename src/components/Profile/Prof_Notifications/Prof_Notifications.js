import React, { Component } from 'react';
import './Prof_Notifications.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';

class Prof_Notifications extends Component {
    render() {
 function toggleEmail(e){
    e.target.checked === true? console.log(e.target.checked, "it's true") : console.log(e.target.checked, "it's false");
    //  console.log(e.target.checked);


//    if (e.checked === true){
//        e.checked = false
//        console.log('checked')
//    }else 
//    e.checked = true;
//     console.log(e.target)


    //  alert('change made');

 }


        return (
            <div className="prof_Notifications_master">

            

                <h3>Email</h3>
                <label class="switch">
                    <input type="checkbox" id="email_check" onChange={(e) => toggleEmail(e)}/>
                    <span class="slider round"></span>
                </label>

                <h3>SMS Text</h3>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>

                <h3>In-App</h3>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>





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

export default connect(mapStateToProps, { getUser })(Prof_Notifications)