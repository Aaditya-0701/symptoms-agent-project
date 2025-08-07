// src/pages/ChatPage.jsx
import { useEffect } from "react";

const ChatPage = () => {
  useEffect(() => {
    window.wxOConfiguration = {
      orchestrationID: "4f0a62682fa846b78f4b99a4a458d11b_5c1395c8",
      hostURL: "https://us-south.watson-orchestrate.cloud.ibm.com",
      rootElementID: "chat-root",
      showLauncher: false,
      crn: "crn:v1:bluemix:public:watsonx-orchestrate:us-south:a/4f0a62682fa846b78f4b99a4a458d11b:5c1395c8-c8c5-4300-b6dd-01283d381814::",
      deploymentPlatform: "ibmcloud",
      chatOptions: {
        agentId: "YOUR_AGENT_ID",
        agentEnvironmentId: "YOUR_AGENT_ENV_ID"
      }
    };

    const script = document.createElement("script");
    script.src =
      window.wxOConfiguration.hostURL + "/wxochat/wxoLoader.js?embed=true";
    script.onload = () => {
      if (window.wxoLoader) window.wxoLoader.init();
    };
    document.head.appendChild(script);

    return () => {
      // Clean up when navigating away
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="chat-root" className="w-screen h-screen bg-white" />
  );
};

export default ChatPage;
