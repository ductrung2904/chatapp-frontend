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
import { io } from "socket.io-client"
import ScrollToBottom from 'react-scroll-to-bottom';
import { API } from '../../config'

function Layout() {
    const user = isAuth() && isAuth()._id;
    const username = isAuth() && isAuth().username;

    const [currentChat, setCurrentChat] = useState(null);
    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const socket = useRef();
    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io(`${API}`);
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                type: data.type,
                createdAt: Date.now()
            })
        })
    }, [])

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit("addUser", user);
        socket.current.on("getUsers", (users) => {
            console.log(users)
        })
    }, [user])

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
            type: "Text",
            conversationId: currentChat._id
        }

        const receiverId = currentChat.members.find(member => member !== user);

        socket.current.emit("sendMessage", {
            senderId: user,
            receiverId,
            text: newMessage,
            type: "Text"
        })


        addMessage(message).then(data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                setMessages([...messages, data]);
                setNewMessage("");
            }
        })
    }

    const handleEnterSubmit = async (e) => {
        if (e.key === "Enter" || e.key === "NumpadEnter") {
            if (newMessage.replace(/\s/g, '')) {
                e.preventDefault();
                const message = {
                    sender: user,
                    text: newMessage,
                    type: "Text",
                    conversationId: currentChat._id
                }

                const receiverId = currentChat.members.find(member => member !== user);

                socket.current.emit("sendMessage", {
                    senderId: user,
                    receiverId,
                    text: newMessage,
                    type: "Text"
                })


                addMessage(message).then(data => {
                    if (data.error) {
                        console.log(data.error);
                    }
                    else {
                        setMessages([...messages, data]);
                        setNewMessage("");
                    }
                })
            }
        }
    }

    useEffect(() => {
        if (!isAuth())
            Router.push(`/`);
    }, [])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

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
                    <ChatTitle conversations={conversations} currentUser={user} />
                    <ScrollToBottom className="chat__message__list">
                        {messages.map((m, i) => (
                            <>
                                <MessageBoard key={i} message={m} own={m.sender === user} conversation={conversations} currentUser={user} />
                            </>
                        ))}
                    </ScrollToBottom>
                    <div className="chat__form">
                        <img src="../images/attachment.svg" alt="Add Attachment" />
                        <input
                            className="chat__input"
                            type="text"
                            placeholder="type a message"
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                            onKeyPress={(e) => handleEnterSubmit(e)} />
                        {newMessage.replace(/\s/g, '') && <i className="fa fa-arrow-circle-up" onClick={handleSubmit}></i>}
                    </div>
                </>
            ) : (
                <div className="chat__message__list__empty">
                    <h2>Nothing here</h2>
                </div>
            )
            }
        </div >
    )
}

export default Layout
