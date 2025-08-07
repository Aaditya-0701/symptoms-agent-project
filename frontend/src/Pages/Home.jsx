
// Home.jsx (Updated with floating animation)
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../layout/HeroSection";
import { NavbarSimple } from "../Components/NavbarSimple";
import WatsonChat from "../Components/WatsonChat";
import ChatModal from "../Components/ChatModal";
import ImageCarouselSection from "../Components/ImageCarouselSection";
import ProgressAndInfo from "../Components/ProgressAndInfo";
import {
  Shield,
  Heart,
  Brain,
  Apple,
  Dumbbell,
  Stethoscope,
  Users,
  Clock,
  Award
} from "lucide-react";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  const handleChatMessage = (evt) => {
    setChatMessages((prev) => [...prev, evt.data]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <NavbarSimple />

      <section>
      <ImageCarouselSection />
      {/* Other home page content */}
    </section>

        
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-blue-600 rounded-2xl animate-float">
              <Stethoscope className="w-10 h-10 text-white" />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
              Your AI Health <span className="text-blue-600">Companion</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-xl leading-relaxed text-gray-600">
              Get instant, intelligent healthcare guidance powered by IBM Watson Orchestrate.
              From general health questions to specialized advice, we're here to support your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-5">
            {[{ name: 'General Health', icon: Stethoscope, color: 'bg-blue-500' },
              { name: 'Emergency', icon: Heart, color: 'bg-red-500' },
              { name: 'Mental Health', icon: Brain, color: 'bg-purple-500' },
              { name: 'Nutrition', icon: Apple, color: 'bg-green-500' },
              { name: 'Fitness', icon: Dumbbell, color: 'bg-orange-500' }
            ].map((agent, index) => {
              const Icon = agent.icon;
              return (
                <div key={index} className="p-4 transition-shadow bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md animate-fade">
                  <div className={`w-12 h-12 ${agent.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">{agent.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Intelligent Healthcare at Your Fingertips
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Powered by IBM Watson Orchestrate, our AI agents provide personalized,
              reliable health guidance tailored to your specific needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[{ icon: Users, title: 'Multi-Agent Intelligence', description: 'Choose from 5 specialized AI health agents, each trained for specific healthcare domains and ready to assist you.' },
              { icon: Clock, title: '24/7 Availability', description: 'Get instant health guidance anytime, anywhere. Our AI agents are always ready to help with your health concerns.' },
              { icon: Award, title: 'Evidence-Based Advice', description: 'Receive reliable, medically-informed guidance powered by IBM Watson\'s advanced AI and healthcare knowledge.' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-2xl animate-float">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="leading-relaxed text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      
{/* SDG 3: Good Health & Well-being  */}
<ProgressAndInfo />




      {/* <section className="w-full py-12 text-white bg-blue-600 animate-slideInUp">
        <div className="container px-6 mx-auto text-center">
          <h3 className="text-3xl font-bold">Ready to Start?</h3>
          <p className="mt-2">Sign up and transform your lab report workflow.</p>
          <Link
            to="/agent"
            className="inline-block px-6 py-3 mt-6 font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-100"
          >
            Open AI Assistant
          </Link>
        </div>
      </section> */}
       
      
      

      {isChatOpen && (
        <WatsonChat
          onChatLoad={() => console.log("Chat loaded on Home")}
          onMessage={handleChatMessage}
        />
      )}

      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-8 h-8 mr-2 bg-blue-600 rounded-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">HealthCompanion AI</span>
            </div>
            <p className="mb-4 text-gray-600">
              Empowering better health decisions through intelligent AI assistance
            </p>
            <p className="text-sm text-gray-500">
              Powered by IBM Watson Orchestrate • Supporting SDG 3: Good Health & Well-being
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}









































