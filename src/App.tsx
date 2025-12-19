// App.tsx
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { Icon } from "@/components/icon";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [conversation, setConversation] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      addMessage('assistant', 'Hi! I\'m your course assistant. I\'d love to help you enroll in our IT training program. Could you tell me your name?');
    }, 500);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (role, content, className = '') => {
    setMessages(prev => [...prev, { role, content, className }]);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    addMessage('user', inputValue);
    setInputValue('');
    
    const typingMessage = { role: 'assistant', content: '...', className: 'typing-indicator' };
    addMessage('assistant', '...', 'typing-indicator');

    try {
      const response = await fetch('https://r0c8kgwocscg8gsokogwwsw4.zetaverse.one/ai', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer NPWxSqHUFPfw2dwgajgSAWjrHbF2',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: 'You are a helpful course assistant helping students enroll in an IT training program. Collect their name, email, and interests. After collecting all information, send it to swaroopingavale73@gmail.com'
            },
            ...conversation,
            {
              role: 'user',
              content: inputValue
            }
          ]
        })
      });

      const data = await response.json();
      
      setMessages(prev => prev.filter(msg => msg !== typingMessage));
      addMessage('assistant', data.message);
      
      setConversation(prev => [
        ...prev,
        { role: 'user', content: inputValue },
        { role: 'assistant', content: data.message }
      ]);

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => prev.filter(msg => msg !== typingMessage));
      addMessage('assistant', 'Sorry, I encountered an error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-[#0a0a0f] font-['Rajdhani'] text-[#00ff9d]">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-['Orbitron'] glow-text mb-4">
            LAUNCH YOUR IT CAREER
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400">
            Intensive 1-Month Course for International Students
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Card className="cyberpunk-border bg-black/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-3xl font-['Orbitron'] text-cyan-400">
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Technical Skills Content */}
                {/* Similar structure for other sections */}
              </CardContent>
            </Card>
            
            {/* Professional Development Card */}
          </div>

          <div className="space-y-8">
            {/* Course Format Card */}
            
            <Card className="cyberpunk-border bg-black/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-3xl font-['Orbitron'] text-cyan-400">
                  Chat with our AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 overflow-y-auto mb-4 space-y-4 p-2">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`chat-message ${msg.className} ${
                        msg.role === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div
                        className={`${
                          msg.role === 'user' ? 'ml-auto' : 'mr-auto'
                        } inline-block max-w-[80%] p-3 rounded ${
                          msg.role === 'user' ? 'bg-cyan-400/20' : 'bg-black/50'
                        } cyberpunk-border`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 p-3 bg-black/50 cyberpunk-border text-cyan-400"
                  />
                  <Button
                    onClick={sendMessage}
                    className="px-6 py-3 cyberpunk-border bg-cyan-400 text-black font-bold hover:bg-cyan-300"
                  >
                    <Icon name="send" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Investment Card */}
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-400">
          <p>
            Contact: Swaroop Ingavale |{' '}
            <a href="mailto:swaroopingavale73@gmail.com" className="hover:text-cyan-400">
              swaroopingavale73@gmail.com
            </a>
          </p>
          <p className="mt-2">
            Made with <Icon name="heart" className="text-red-500" /> in Canada
          </p>
        </footer>
      </div>
    </div>
  );
}

// styles/globals.css
`
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #0a0a0f;
  font-family: 'Rajdhani', sans-serif;
  color: #00ff9d;
  background-image: 
    linear-gradient(45deg, rgba(0,255,157,0.1) 1px, transparent 1px),
    linear-gradient(-45deg, rgba(0,255,157,0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.cyberpunk-border {
  border: 2px solid #00ff9d;
  box-shadow: 0 0 15px #00ff9d;
}

.glow-text {
  text-shadow: 0 0 10px #00ff9d;
}

.highlight-hover:hover {
  background: rgba(0, 255, 157, 0.1);
  transform: scale(1.02);
  transition: all 0.3s ease;
}

.chat-message {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.typing-indicator span {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
`