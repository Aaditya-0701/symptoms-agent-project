// src/components/WatsonChat.jsx
import React, { useEffect, useState } from 'react';
import { WebChatContainer, setEnableDebug } from '@ibm-watson/assistant-web-chat-react';

export default function WatsonChat({ onChatLoad, onMessage, fullscreen = false }) {
  const [loaded, setLoaded] = useState(false);

  const config = {
    integrationID: import.meta.env.VITE_WATSON_INTEGRATION_ID,       // Corrected variable name
    region: import.meta.env.VITE_WATSON_REGION,
    serviceInstanceID: import.meta.env.VITE_WATSON_SERVICE_INSTANCE_ID,
    agentId: import.meta.env.VITE_WATSON_AGENT_ID,
    agentEnvironmentId: import.meta.env.VITE_WATSON_AGENT_ENV_ID,
    layout: {
      hasLauncher: false,
      isFullscreen: fullscreen,
      hasHeader: true,
      hasCloseButton: false
    },
    style: {
      headerColor: '#0f172a',        // slate-900
      primaryColor: '#2563eb',       // blue-600
      userMessageBackgroundColor: '#2563eb',
      agentMessageBackgroundColor: '#f1f5f9'  // slate-100
    },
    showLauncher: false,
    enableDebug: import.meta.env.DEV,
    onLoad: instance => {
      setLoaded(true);
      onChatLoad?.(instance);
      instance.on({ type: 'receive', handler: onMessage });
    },
    onError: err => console.error('WatsonChat error:', err)
  };

  useEffect(() => {
    if (import.meta.env.DEV) setEnableDebug(true);
  }, []);

  const containerClass = fullscreen
    ? 'w-full h-full'
    : 'fixed bottom-0 right-0 z-50 w-96 h-96 bg-white shadow-xl rounded-lg overflow-hidden';

  return (
    <div className={containerClass}>
      <WebChatContainer config={config} />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
          <span className="text-slate-700">Loading assistant…</span>
        </div>
      )}
    </div>
  );
}



// src/Components/WatsonChat.jsx
// import React, { useEffect } from 'react';

// const WatsonChat = ({ onChatLoad = () => {}, onMessage = () => {} }) => {
//   useEffect(() => {
//     const scriptId = 'watson-assistant-script';
//     const existingScript = document.getElementById(scriptId);
//     if (existingScript) return; // Already loaded

//     const script = document.createElement('script');
//     script.id = scriptId;
//     script.src = 'https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js';
//     script.async = true;

//     script.onload = () => {
//       window.watsonAssistantChatOptions = {
//         integrationID: import.meta.env.VITE_WATSON_INTEGRATION_ID,
//         region: import.meta.env.VITE_WATSON_REGION,
//         serviceInstanceID: import.meta.env.VITE_WATSON_SERVICE_INSTANCE_ID,
//         onLoad: async (instance) => {
//           await instance.render();
//           onChatLoad();
//         },
//       };
//     };

//     document.head.appendChild(script);

//     // Optional: Cleanup if needed
//     return () => {
//       const chatRoot = document.getElementById('watson-chat-root');
//       if (chatRoot) chatRoot.remove();
//     };
//   }, [onChatLoad]);

//   useEffect(() => {
//     window.addEventListener('message', onMessage);
//     return () => window.removeEventListener('message', onMessage);
//   }, [onMessage]);

//   return null; // Assistant auto mounts outside React DOM
// };

// export default WatsonChat;
