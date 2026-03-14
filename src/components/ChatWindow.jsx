import React from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
    return (
        <div className="chat-window">
            <div className="chat-header">
                <h2>Chat</h2>
            </div>
            <div className="chat-messages">
                {/* Messages will be displayed here */}
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type a message..." />
                <button>Send</button>
            </div>
        </div>
    );
};

export default ChatWindow;