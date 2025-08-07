import React, { useEffect } from 'react';
import WatsonChat from './WatsonChat';

export default function ChatModal({ isOpen, onClose, onMessage }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div className="relative bg-white w-full max-w-md h-[600px] rounded-lg shadow-2xl overflow-hidden z-50">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">HealthAgent Chat</h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
            aria-label="Close chat modal"
          >
            ✕
          </button>
        </div>

        {/* Chat container */}
        <div className="h-full">
          <WatsonChat onChatLoad={() => {}} onMessage={onMessage} />
        </div>
      </div>
    </div>
  );
}
