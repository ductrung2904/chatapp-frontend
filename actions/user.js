import fetch from 'isomorphic-fetch'
import { API } from '../config'

export const getUser = username => {
    return fetch(`${API}/users?username=${username}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const getAnotherUser = friendId => {
    return fetch(`${API}/users?userId=${friendId}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}