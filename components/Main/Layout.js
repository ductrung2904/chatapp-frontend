import React, { useEffect, useState, useRef } from 'react'
import NavTab from './NavTab'
import Search from './Search'
import ConversationList from './ConversationList'
import CreateGroupBtn from './CreateGroupBtn'
import ChatTitle from './ChatTitle'
import MessageBoard from './MessageBoard'
import { isAuth } from '../../actions/auth'
import Router from 'next/router'
import { getConversation } from '../../actions/conversation'
import { addMessage, getMessage } from '../../actions/message'

function Layout() {
    // const conversation = isAuth() && isAuth()._id;
    const user = isAuth() && isAuth()._id;
    const username = isAuth() && isAuth().username;
    const conversationId = getConversation()._id;

    const [currentChat, setCurrentChat] = useState(null);
    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const scrollRef = useRef();

    useEffect(() => {
        const loadConversations = async () => {
            getConversation(user).then(data => {
                if (data.error) {
                    console.log(data.error);
                }
                else {
                    setConversations(data);
                }
            })
        }
        loadConversations();
    }, [user]);

    useEffect(() => {
        const loadMessages = async () => {
            getMessage(currentChat?._id).then(data => {
                console.log(data)
                if (data.error) {
                    console.log(data.error);
                }
                else {
                    setMessages(data);
                }
            })
        }
        loadMessages();
    }, [currentChat])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user,
            text: newMessage,
            conversationId: currentChat._id
        }

        addMessage(message).then(data => {
            setMessages([...messages, data]);
            setNewMessage("");
        })
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    useEffect(() => {
        if (!isAuth())
            Router.push(`/`);
    }, [])
    return (
        <div className="chat__container">
            <NavTab username={username} />
            <Search />
            <div className="conversation__list">
                {conversations.map((c, i) => (
                    <div onClick={() => setCurrentChat(c)}>
                        <ConversationList key={i} conversation={c} currentUser={user} />
                    </div>
                ))}
            </div>
            <CreateGroupBtn />

            {currentChat ? (
                <>
                    <ChatTitle conversationId={conversationId} />
                    <div className="chat__message__list">
                        {messages.map((m) => (
                            <div ref={scrollRef}>
                                <MessageBoard message={m} own={m.sender === user} user={user} />
                            </div>
                        ))}
                    </div>
                    <div className="chat__form">
                        <img src="../images/attachment.svg" alt="Add Attachment" />
                        <input
                            className="chat__input"
                            type="text"
                            placeholder="type a message"
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage} />
                        <i className="fa fa-caret-right" onClick={handleSubmit}></i>
                    </div>
                </>
            ) : (
                <div className="chat__message__list__empty">
                    <h2>Nothing here</h2>
                </div>
            )}

        </div>
    )
}

export default Layout
