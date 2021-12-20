import React, { useEffect, useState } from 'react'
import { getAnotherUser } from '../../actions/user';

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
            // <div key={i} className="conversation active">
            //     <img src="https://s120-ava-grp-talk.zadn.vn/d/f/e/c/2/120/fc0d636c2bc2e9a2602246ec2771a827.jpg" alt="" />
            //     <div className="title__text">{conversation.name}</div>
            //     <div className="created__date">Apr 16</div>
            //     <div className="conversation__message">
            //         văn mẫu
            //     </div>
            // </div>
            <div className="conversation">
                <img src={user?.profilePicture ? PF + user.profilePicture : PF + "users/noAvatar.png"} alt="" />
                <div className="title__text">{user?.firstName + " " + user?.lastName}</div>
                <div className="created__date">Apr 16</div>
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
