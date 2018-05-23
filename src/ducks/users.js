import axios from 'axios';

const initialState = {
    user: {},
    navbarSlide: false,
    frequencies: [],
    userReminders: [],
    states:[]
}

//action Types go here:
const GET_USER = 'GET_USER';
const GET_FREQUENCIES = 'GET_FREQUENCIES';
const GET_USER_REMINDERS = 'GET_USER_REMINDERS';
const GET_STATES = 'GET_STATES';
const UPDATE_USER_COUNTRY = 'UPDATE_USER_COUNTRY';
const UPDATE_USER_STREET = 'UPDATE_USER_STREET';
const UPDATE_USER_CITY = 'UPDATE_USER_CITY';


export default function reducer(state = initialState, action) {
    switch (action.type) {
        //cases go here
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case GET_FREQUENCIES + '_FULFILLED':
            return Object.assign({}, state, { frequencies: action.payload });
        case GET_USER_REMINDERS + '_FULFILLED':
            return Object.assign({}, state, { userReminders: action.payload });
        case UPDATE_USER_COUNTRY + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload} );
        case UPDATE_USER_STREET + '_FULFILLED':
            return Object.assign({}, state, { updatedStreet: action.payload});
        case UPDATE_USER_CITY + '_FULFILLED':
            return Object.assign({}, state, {updatedCity: action.payload});
        case GET_STATES + '_FULFILLED' :
            return Object.assign({}, state, {states: action.payload})


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
    export function updateUserCountry(updatedUser) {
        
        let userData = axios.put(`/update_country`, updatedUser)
            .then(res => {
                return res.data;
            })

        return {
            type: UPDATE_USER_COUNTRY,
            payload: userData
        }
    }
    export function updateUserStreet(updatedStreet) {
        
        let userStreet = axios.put(`/update_street`, updatedStreet)
        .then(res => {
            return res.data;
        })
        return {
            type: UPDATE_USER_STREET,
            payload: userStreet
        }
    }
    export function updateUserCity(updatedCity) {
        
        let userCity = axios.put(`/update_city`, updatedCity)
        .then(res => {
            return res.data;
        })
        return {
            type: UPDATE_USER_CITY,
            payload: userCity
        }
    }
    export function getStates() {
        let states = axios.get(`/states`)
        .then(res => {
            return res.data;
        })
        return {
            type: GET_STATES,
            payload: states
        }
    }

    
    
