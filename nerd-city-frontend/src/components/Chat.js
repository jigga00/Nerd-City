import React, { useState } from 'react';

const Chat = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  return (
    <div className={`chat-section ${isChatOpen ? 'open' : ''}`}>
      <button onClick={() => setChatOpen(!isChatOpen)}>Toggle Chat</button>
      {isChatOpen && (
        <div className="chat-box">
          {/* Add chat messages and functionality here */}
          <p>Chat Messages Go Here</p>
        </div>
      )}
    </div>
  );
};

export default Chat;