// src/Components/HealthcareSearchSection.jsx
import React, { useState } from "react";
import { Search, Calendar, MapPin, Activity, MessageCircle, ChevronRight, Bot } from "lucide-react";

const HealthcareSearchSection = ({ className = "" }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleAIAgent = () => {
    // Launch your Watson Orchestrate AI agent
    if (window.openFullscreenChat) {
      console.log("Launching AI Health Agent...");
      window.openFullscreenChat();
    } else {
      console.warn("AI Agent not available. Make sure Watson Orchestrate is loaded.");
    }
  };

  const actionItems = [
    {
      id: 1,
      title: "Book Appointment",
      icon: Calendar,
      color: "bg-blue-500",
      action: () => {
        // You can integrate with your booking system here
        console.log("Book Appointment clicked - integrate with booking system");
      }
    },
    {
      id: 2,
      title: "Find Hospital",
      icon: MapPin,
      color: "bg-green-500",
      action: () => {
        // You can integrate with hospital finder here
        console.log("Find Hospital clicked - integrate with location service");
      }
    },
    {
      id: 3,
      title: "Book Health Checkup",
      icon: Activity,
      color: "bg-purple-500",
      action: () => {
        // You can integrate with checkup booking here
        console.log("Book Health Checkup clicked - integrate with checkup system");
      }
    },
    {
      id: 4,
      title: "Get Expert Opinion",
      icon: Bot, // Using Bot icon to indicate AI
      color: "bg-gradient-to-r from-orange-500 to-red-500", // Special gradient for AI
      action: handleAIAgent,
      isAI: true // Special flag for AI agent
    }
  ];

  return (
    <section className={`w-full py-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 relative overflow-hidden ${className}`}>
      {/* Background medical pattern (subtle) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-10 w-8 h-8 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-12 right-20 w-6 h-6 border-2 border-white/20 rounded-full"></div>
        <div className="absolute bottom-8 left-1/3 w-4 h-4 border-2 border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          
          {/* Search Bar */}
          <div className="flex-1 w-full lg:max-w-2xl">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600 transition-colors" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search For Doctors & Specialities..."
                className="w-full pl-12 pr-16 py-4 bg-black/30 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:bg-black/40"
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-orange-500/25"
                onClick={() => console.log("Search clicked:", searchQuery)}
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-3">
            {actionItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`group relative flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap ${
                    item.isAI 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-400 hover:from-orange-600 hover:to-red-600 shadow-lg shadow-orange-500/25' 
                      : 'bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {item.isAI && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  )}
                  
                  <div className={`p-1.5 rounded-full transition-transform duration-300 group-hover:scale-110 ${
                    item.isAI ? 'bg-white/20' : `${item.color} text-white`
                  }`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  
                  <span className={`font-medium text-sm relative z-10 ${item.isAI ? 'text-white' : ''}`}>
                    {item.title}
                  </span>
                  
                  <ChevronRight className={`h-4 w-4 transition-all duration-300 group-hover:translate-x-1 ${
                    item.isAI ? 'text-white/80 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-700'
                  }`} />
                  
                  {item.isAI && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSearchSection;
