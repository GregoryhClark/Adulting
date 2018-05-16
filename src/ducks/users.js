import axios from 'axios';

const initialState = {
    user: {},
    navbarSlide: false,
    frequencies: [],
    userReminders: []
}

//action Types go here:
const GET_USER = 'GET_USER';
const GET_FREQUENCIES = 'GET_FREQUENCIES';
const GET_USER_REMINDERS = 'GET_USER_REMINDERS';
const UPDATE_USER = 'UPDATE_USER';


export default function reducer(state = initialState, action) {
    switch (action.type) {
        //cases go here
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case GET_FREQUENCIES + '_FULFILLED':
            return Object.assign({}, state, { frequencies: action.payload });
        case GET_USER_REMINDERS + '_FULFILLED':
            return Object.assign({}, state, { userReminders: action.payload });
        case UPDATE_USER + '_FULFILLED':
            return Object.assign({}, state, { userData: action.payload} )


        default:
            return state;
    }

}
    //action creators
    export function getUser() {
        let userData = axios.get('/auth/me')
            .then(res => {
                return res.data;
            })
        return {
            type: GET_USER,
            payload: userData
        }
    }
    export function getFrequencies() {
        let frequencies = axios.get('/frequencies')
            .then(res => {
                return res.data;
            })
        return {
            type: GET_FREQUENCIES,
            payload: frequencies
        }
    }
    export function getUserReminders(id) {
        let userReminders = axios.get(`/reminders/${id}`)
            .then(res => {
                return res.data;
            })
        return {
            type: GET_USER_REMINDERS,
            payload: userReminders
        }
    }
    export function updateUser(updatedUser) {
        let userData = axios.put(`/update_address`, updatedUser)
            .then(res => {
                return res.data;
            })

        return {
            type: UPDATE_USER,
            payload: userData
        }
    }
