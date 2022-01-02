import fetch from 'isomorphic-fetch'
import { API } from '../config'

const baseUrl = process.env.BASE_URL

export const getUser = username => {
    return fetch(`${baseUrl}/users?username=${username}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const getAnotherUser = friendId => {
    return fetch(`${baseUrl}/users?userId=${friendId}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}