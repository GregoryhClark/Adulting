import React, { Component } from 'react';
import './Prof_Notifications.css';
import { getUser } from './../../../ducks/users';
import { connect } from 'react-redux';

class Prof_Notifications extends Component {
    render() {



        return (
            <div className="prof_Notifications_master">


                <table>
                    <th><h3>Email</h3></th>
                    <tr>
                        <td><p>Daily</p></td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td><p>Weekly</p></td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <tr>
                        <td><p>Monthly</p></td>
                        <td>
                        <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <tr>
                        <td><p>Yearly</p></td>
                        <td>
                        <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <tr>
                        <td><p>Other</p></td>
                        <td>
                        <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <th><h3>SMS Text</h3></th>
                    <tr>
                        <td><p>Daily</p></td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td><p>Weekly</p></td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <tr>
                        <td><p>Monthly</p></td>
                        <td>
                        <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <tr>
                        <td><p>Yearly</p></td>
                        <td>
                        <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <tr>
                        <td><p>Other</p></td>
                        <td>
                        <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <th><h3>In-App</h3></th>
                    <tr>
                        <td><p>Daily</p></td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td><p>Weekly</p></td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <tr>
                        <td><p>Monthly</p></td>
                        <td>
                        <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <tr>
                        <td><p>Yearly</p></td>
                        <td>
                        <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    <tr>
                        <td><p>Other</p></td>
                        <td>
                        <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </td>

                    </tr>
                    
                </table>
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