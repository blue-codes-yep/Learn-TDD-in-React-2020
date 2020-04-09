import React, { useState } from 'react';
import './App.css';
import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';

function App() {
  const [messages, setMessages] = useState([]);
  const handleSend = newMessage => {
    setMessages([newMessage, ...messages]);
  }
  return (
    <div className="App">
      <h1>hello world</h1>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  );
}

export default App;
