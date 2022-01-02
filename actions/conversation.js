import fetch from 'isomorphic-fetch'
import { API } from '../config'

export const addConversation = conversation => {
    return fetch(`${API}/conversation`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(conversation)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const getConversation = id => {
    return fetch(`${API}/conversation/${id}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}