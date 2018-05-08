import axios from 'axios';

const initialState = {
    user: {},
    navbarSlide: false,
    frequencies: [],

}


//action Types go here:
const GET_USER = 'GET_USER';
const GET_FREQUENCIES = 'GET_FREQUENCIES';


export default function reducer(state = initialState, action) {
    switch (action.type) {
        //cases go here
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case GET_FREQUENCIES + '_FULFILLED':
            return Object.assign({}, state, { frequencies: action.payload });

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