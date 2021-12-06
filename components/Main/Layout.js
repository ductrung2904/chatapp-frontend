import React from 'react'
import NavTab from './NavTab'
import Search from './Search'
import ConversationList from './ConversationList'
import CreateGroupBtn from './CreateGroupBtn'
import ChatTitle from './ChatTitle'
import MessageBoard from './MessageBoard'
import ChatInput from './ChatInput'

function Layout() {
    return (
        <div className="chat__container">
            <NavTab />
            <Search />
            <ConversationList />
            <CreateGroupBtn />
            <ChatTitle />
            <MessageBoard />
            <ChatInput />
        </div>
    )
}

export default Layout
