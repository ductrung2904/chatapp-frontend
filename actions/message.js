import fetch from 'isomorphic-fetch'
import { API } from '../config'

export const addMessage = message => {
    return fetch(`${API}/message`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const getMessage = conversationId => {
    return fetch(`${API}/message/${conversationId}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}