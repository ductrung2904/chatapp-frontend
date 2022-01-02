import fetch from 'isomorphic-fetch'
import { API } from '../config'

const baseUrl = process.env.BASE_URL

export const addConversation = conversation => {
    return fetch(`${baseUrl}/conversation`, {
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
    return fetch(`${baseUrl}/conversation/${id}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}