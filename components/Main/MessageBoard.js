import React, { useState, useEffect } from 'react'
import { format } from "timeago.js"
import { getUser } from '../../actions/user';

function MessageBoard({ message, own, user }) {
    const [users, setUsers] = useState(null);
    const PF = process.env.PUBLIC_FOLDER

    const loadConversation = () => {
        getUser(user).then(data => {
            console.log(data)
            if (data.error) {
                console.log(data.error);
            }
            else {
                setUsers(data);
            }
        })
    }

    useEffect(() => {
        loadConversation();
    }, [])
    return (
        <>
            {users && (
                <div>
                    <div className="message__time">{format(message.createAt)}</div>
                    {own ? (
                        <div className="message__row you__message">
                            <div className="message__content">
                                <div className="message__username">{users.firstName + users.lastName}</div>
                                <div className="message__text">
                                    {message.text}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="message__row other__message">
                            <div className="message__content">
                                <img src={user.profilePicture} alt="" />
                                <div className="message__username">Dang Lai</div>
                                <div className="message__text">
                                    {message.text}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default MessageBoard
