// src/pages/AgentPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WatsonChat from '../Components/WatsonChat';

export default function AgentPage() {
  const [chatMessages, setChatMessages] = useState([]);

  const handleMessage = evt => {
    setChatMessages(prev => [...prev, evt.data]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-blue-600 hover:underline">
            &larr; Back to Home
          </Link>
          <h1 className="text-2xl font-semibold text-slate-800">
            HealthAgent AI Assistant
          </h1>
          <div style={{ width: 32 }} />
        </div>
      </header>

      {/* Subtitle */}
      <div className="py-6 bg-gradient-to-r from-blue-600 to-green-500 text-center text-white">
        <p className="text-lg">
          Your intelligent companion for health data analysis and support
        </p>
      </div>

      {/* Fullscreen Chat Container */}
      <main className="relative flex-1 overflow-hidden">
        {/* WatsonChat will fill this container */}
        <div className="absolute inset-0">
          <WatsonChat
            fullscreen={true}
            onChatLoad={() => console.log('Assistant loaded')}
            onMessage={handleMessage}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-white border-t text-center text-sm text-slate-500">
        © 2025 HealthAgent. All rights reserved.
      </footer>
    </div>
  );
}
