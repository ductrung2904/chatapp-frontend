import React, { useEffect, useState } from 'react'
import { getAnotherUser } from '../../actions/user';
import { format } from "timeago.js"

function ConversationList({ conversation, currentUser }) {
    const [user, setUser] = useState(null);
    const PF = process.env.PUBLIC_FOLDER

    const loadConversation = () => {
        const friendId = conversation.members.find((m) => m !== currentUser)
        getAnotherUser(friendId).then(data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                setUser(data);
            }
        })
    }

    useEffect(() => {
        loadConversation();
    }, [currentUser, conversation])

    const showAllConversations = () => {
        return (
            <div className="conversation">
                <img src={user?.profilePicture ? PF + user.profilePicture : PF + "users/noAvatar.png"} alt="" />
                <div className="title__text">{user?.firstName + " " + user?.lastName}</div>
                <div className="created__date">{format(user?.createdAt)}</div>
                <div className="conversation__message">
                    ...
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            {showAllConversations()}
        </React.Fragment>
    )
}

export default ConversationList
