import React from 'react'

function ChatInput() {
    return (
        <div className="chat__form">
            <img src="../images/attachment.svg" alt="Add Attachment" />
            <input className="chat__input" type="text" placeholder="type a message" />
        </div>
    )
}

export default ChatInput
