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
import { getAnotherUser } from '../../actions/user'
import { io } from "socket.io-client"

function Layout() {
    const user = isAuth() && isAuth()._id;
    const username = isAuth() && isAuth().username;
    // const conv = getConversation(user);

    const [currentChat, setCurrentChat] = useState(null);
    const [conversations, setConversations] = useState([]);
    // const [messageInfo, setMessageInfo] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const socket = useRef();
    const scrollRef = useRef();

    const PF = process.env.PUBLIC_FOLDER;

    useEffect(() => {
        socket.current = io("ws://localhost:5000");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
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

    // useEffect(() => {
    //     const friendId = conv.members.find((m) => m !== user)
    //     const loadMessageInfo = async () => {
    //         getAnotherUser(friendId).then(data => {
    //             console.log(data)
    //             if (data.error) {
    //                 console.log(data.error);
    //             }
    //             else {
    //                 setMessageInfo(data);
    //             }
    //         })
    //     }
    //     loadMessageInfo();
    // }, [user])

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
            conversationId: currentChat._id
        }

        const receiverId = currentChat.members.find(member => member !== user);

        socket.current.emit("sendMessage", {
            senderId: user,
            receiverId,
            text: newMessage
        })


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
                    <ChatTitle conversations={conversations} currentUser={user} />
                    <div className="chat__message__list">
                        {messages.map((m) => (
                            <div ref={scrollRef}>
                                <MessageBoard message={m} own={m.sender === user} conversation={conversations} currentUser={user} />
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
                        <i className="fa fa-arrow-circle-up" onClick={handleSubmit}></i>
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
