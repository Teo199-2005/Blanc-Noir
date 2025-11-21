import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Welcome to Blanc & Noir Aesthetic Clinic. How may I assist you with your beauty journey today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'Book an appointment',
    'Treatment pricing',
    'Clinic location',
    'Operating hours'
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: 'user', content: inputValue }]);
      setInputValue('');
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: 'Thank you for your message. Our team will get back to you shortly!' 
        }]);
      }, 1000);
    }
  };

  const handleQuickReply = (reply) => {
    setMessages([...messages, { type: 'user', content: reply }]);
    
    setTimeout(() => {
      let response = '';
      switch(reply) {
        case 'Book an appointment':
          response = 'You can book an appointment by calling 0956 771 7721 or filling out our contact form.';
          break;
        case 'Treatment pricing':
          response = 'Our treatments start from ₱4,500 for facials, ₱8,500 for laser treatments, and ₱12,000 for skin boosters.';
          break;
        case 'Clinic location':
          response = 'We are located at 1120 1F Jade Hotel and Suites, Chino Roces Ave. Brgy. La Paz, Makati, Philippines.';
          break;
        case 'Operating hours':
          response = 'We are open Monday-Saturday: 9:00 AM - 7:00 PM, Sunday: 10:00 AM - 5:00 PM.';
          break;
        default:
          response = 'Thank you for your inquiry. How else can I help you?';
      }
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    }, 1000);
  };

  return (
    <div className="chat-widget">
      <motion.button 
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-box active"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-header">
              <div className="chat-header-left">
                <img src="/images/logo/UleqwldLwrXktNdM3Y1731471144.png" alt="Blanc & Noir Logo" className="chat-logo" />
                <div className="chat-header-text">
                  <h4>Blanc & Noir</h4>
                  <div className="chat-status">
                    <div className="status-dot"></div>
                    <span>Online • 24/7 Support</span>
                  </div>
                </div>
              </div>
              <button className="chat-close" onClick={() => setIsOpen(false)}>×</button>
            </div>
            
            <div className="chat-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {message.type === 'bot' ? (
                    <>
                      <div className="bot-avatar">
                        <img src="/images/logo/UleqwldLwrXktNdM3Y1731471144.png" alt="Blanc & Noir" />
                      </div>
                      <div className="message-content">{message.content}</div>
                    </>
                  ) : (
                    message.content
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="quick-replies">
              {quickReplies.map((reply, index) => (
                <motion.button
                  key={index}
                  className="quick-reply"
                  onClick={() => handleQuickReply(reply)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {reply}
                </motion.button>
              ))}
            </div>
            
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                maxLength="500"
              />
              <motion.button 
                className="chat-send"
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9"></polygon>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;