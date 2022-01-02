import fetch from 'isomorphic-fetch'
import { API } from '../config'

const baseUrl = process.env.BASE_URL

export const addMessage = message => {
    return fetch(`${baseUrl}/message`, {
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
    return fetch(`${baseUrl}/message/${conversationId}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

// export const sendFile = () => {
//     return fetch(`${API}/upload`,{
//         method: 'POST',
//         body: JSON.stringify
//     })
// }