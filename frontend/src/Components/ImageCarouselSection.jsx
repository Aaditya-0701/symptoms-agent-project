




// // src/Components/ImageCarouselSection.jsx
// import React, { useEffect, useRef, useState } from "react";
// import { Shield } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import WatsonChat from "./WatsonChat";
// import ChatModal from "./ChatModal";

// import img1 from "../assets/view/img1.png";
// import img2 from "../assets/view/img2.png";
// import img3 from "../assets/view/img3.png";
// import img4 from "../assets/view/img4.png";
// import img5 from "../assets/view/img5.png";
// import img6 from "../assets/view/img6.png";
// import img7 from "../assets/view/img7.png";
// import img8 from "../assets/view/img8.png";

// import lg1 from "../assets/sdg3.png";
// import lg2 from "../assets/sdg4.png";
// import lg3 from "../assets/sdg8.png";
// import lg4 from "../assets/sdg9.png";

// const images = [img8, img7, img6];

// // Add this CSS in your global styles or CSS module
// // .float-animate {
// //   animation: float 3s ease-in-out infinite;
// // }
// // @keyframes float {
// //   0%, 100% { transform: translateY(0); }
// //   50% { transform: translateY(-8px); }
// // }

// function ImageCarouselSection({ className = "" }) {
//   const [current, setCurrent] = useState(0);
//   const timeoutRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     timeoutRef.current = setTimeout(
//       () => setCurrent((prev) => (prev + 1) % images.length),
//       4000
//     );
//     return () => clearTimeout(timeoutRef.current);
//   }, [current]);

//   const handleLaunchChat = () => {
//     navigate("/agent"); // Adjust if your route differs
//   };

//   return (
//     <section
//       className={`w-full h-[700px] md:h-[900px] lg:h-[900px] bg-gray-100 flex justify-center items-center relative overflow-hidden ${className}`}
//     >
//       {/* Carousel Images */}
//       <div className="absolute inset-0 w-full h-full">
//         {images.map((img, idx) => (
//           <img
//             key={idx}
//             src={img}
//             alt={`Healthcare scene ${idx + 1}`}
//             className={`
//               absolute inset-0 w-full h-full object-cover transition-opacity duration-1800
//               ${current === idx ? "opacity-100 z-10" : "opacity-0 z-0"}
//             `}
//             draggable={false}
//           />
//         ))}

//         {/* Overlayed info block */}
//         <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
//           <div className="w-full max-w-lg p-8 mx-auto text-center transition-all duration-300 transform border shadow-2xl pointer-events-auto bg-gray-50/10 backdrop-blur-lg rounded-3xl border-white/30 hover:scale-105">
            
//             {/* Animated Icon */}
//             <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full shadow-lg bg-black/20">
//               <Shield className="w-8 h-8 text-blue-600" />
//             </div>

//             {/* Professional Copy */}
//             <h3 className="mb-3 text-2xl font-bold text-white">
//               AI Health Assistant
//             </h3>
//             <p className="mb-6 leading-relaxed text-white">
//               Get instant, personalized health guidance powered by IBM Watson Orchestrate. 
//               Your 24/7 medical companion is ready to help.
//             </p>

//             {/* Enhanced CTA Button */} 
//             {/* Remove this button here  */}
//             <button
//               onClick={handleLaunchChat}
//               className="relative px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-xl group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-200"
//             >
//               🚀 Launch AI Chat
//             </button>
            
//             {/* add these instead of above button */}
//             <div className="absolute z-30 flex flex-row items-center justify-center gap-4 pointer-events-auto top-25 right-11">
//         {[lg1, lg2, lg3, lg4].map((logo, index) => (
//           <div key={index} className="relative group">
//             <span className="absolute z-0 bg-blue-600 rounded-full opacity-0 -inset-2 group-hover:opacity-20 group-hover:animate-pulse"></span>
//             <img
//               src={logo}
//               alt={`SDG logo ${index + 1}`}
//               className="relative z-10 object-contain w-12 h-12 transition duration-300 border-2 rounded-lg shadow-lg opacity-90 hover:opacity-100 hover:scale-125 float-animate border-white/60"
//               draggable={false}
//             />
//             <span className="absolute z-40 px-2 py-1 text-xs text-white -translate-x-1/2 rounded shadow opacity-0 pointer-events-none -top-8 left-1/2 group-hover:opacity-100 bg-black/70">
//               {["Good Health", "Quality Education", "Decent Work", "Industry Innovation"][index]}
//             </span>
//           </div>
//         ))}
//       </div>


      

//             {/* Feature Pills */}
//             <div className="flex flex-wrap justify-center gap-2 mt-6">
//               <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
//                 24/7 Available
//               </span>
//               <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
//                 HIPAA Compliant
//               </span>
//               <span className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
//                 AI-Powered
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SDG Logos - Top Right with Creative Effects and shifted down */}
//       {/* <div className="absolute z-30 flex flex-col gap-4 pointer-events-auto top-25 right-11">
//         {[lg1, lg2, lg3, lg4].map((logo, index) => (
//           <div key={index} className="relative group">
//             <span className="absolute z-0 bg-blue-600 rounded-full opacity-0 -inset-2 group-hover:opacity-20 group-hover:animate-pulse"></span>
//             <img
//               src={logo}
//               alt={`SDG logo ${index + 1}`}
//               className="relative z-10 object-contain w-12 h-12 transition duration-300 border-2 rounded-lg shadow-lg opacity-90 hover:opacity-100 hover:scale-125 float-animate border-white/60"
//               draggable={false}
//             />
//             <span className="absolute z-40 px-2 py-1 text-xs text-white -translate-x-1/2 rounded shadow opacity-0 pointer-events-none -top-8 left-1/2 group-hover:opacity-100 bg-black/70">
//               {["Good Health", "Quality Education", "Decent Work", "Industry Innovation"][index]}
//             </span>
//           </div>
//         ))}
//       </div> */}

//       {/* Indicators */}
//       <div className="absolute left-0 right-0 z-30 flex justify-center gap-2 bottom-3">
//         {images.map((_, idx) => (
//           <span
//             key={idx}
//             className={`w-2 h-2 rounded-full ${
//               current === idx
//                 ? "bg-blue-600"
//                 : "bg-white border border-blue-600"
//             } transition-colors duration-200`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ImageCarouselSection;

























// src/Components/ImageCarouselSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

import WatsonChat from "./WatsonChat";
import ChatModal from "./ChatModal";

import img1 from "../assets/view/img1.png";
import img2 from "../assets/view/img2.png";
import img3 from "../assets/view/img3.png";
import img4 from "../assets/view/img4.png";
import img5 from "../assets/view/img5.png";
import img6 from "../assets/view/img6.png";
import img7 from "../assets/view/img7.png";
import img8 from "../assets/view/img8.png";

import lg1 from "../assets/sdg3.png";
import lg2 from "../assets/sdg4.png";
import lg3 from "../assets/sdg8.png";
import lg4 from "../assets/sdg9.png";

const images = [img8, img7, img6];

// Add this CSS in your global styles or CSS module
// .float-animate {
//   animation: float 3s ease-in-out infinite;
// }
// @keyframes float {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-8px); }
// }

function ImageCarouselSection({ className = "" }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const handleLaunchChat = () => {
    navigate("/agent"); // Adjust if your route differs
  };

  return (
    <section
      className={`w-full h-[700px] md:h-[900px] lg:h-[900px] bg-gray-100 flex justify-center items-center relative overflow-hidden ${className}`}
    >
      {/* Carousel Images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Healthcare scene ${idx + 1}`}
            className={`
              absolute inset-0 w-full h-full object-cover transition-opacity duration-1800
              ${current === idx ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
            draggable={false}
          />
        ))}

        {/* Overlayed info block */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-lg p-8 mx-auto text-center transition-all duration-300 transform border shadow-2xl pointer-events-auto bg-gray-50/10 backdrop-blur-lg rounded-3xl border-white/30 hover:scale-105">
            
            {/* Animated Icon */}
            <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full shadow-lg bg-black/20">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>

            {/* Professional Copy */}
            <h3 className="mb-3 text-2xl font-bold text-white">
              AI Health Assistant
            </h3>
            <p className="mb-6 leading-relaxed text-white">
              Get instant, personalized health guidance powered by IBM Watson Orchestrate. 
              Your 24/7 medical companion is ready to help.
            </p>

            {/* Replaced Button with SDG Logos */}
            <div className="flex flex-row items-center justify-center gap-4 mt-6 pointer-events-auto">
              {[lg1, lg2, lg3, lg4].map((logo, index) => (
                <div key={index} className="relative group">
                  <span className="absolute z-0 bg-blue-600 rounded-full opacity-0 -inset-2 group-hover:opacity-20 group-hover:animate-pulse"></span>
                  <img
                    src={logo}
                    alt={`SDG logo ${index + 1}`}
                    className="relative z-10 object-contain w-12 h-12 transition duration-300 border-2 rounded-lg shadow-lg opacity-90 hover:opacity-100 hover:scale-125 float-animate border-white/60"
                    draggable={false}
                  />
                  <span className="absolute z-40 px-2 py-1 text-xs text-white -translate-x-1/2 rounded shadow opacity-0 pointer-events-none -top-8 left-1/2 group-hover:opacity-100 bg-black/70">
                    {["Good Health", "Quality Education", "Decent Work", "Industry Innovation"][index]}
                  </span>
                </div>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                24/7 Available
              </span>
              <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                HIPAA Compliant
              </span>
              <span className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
                AI-Powered
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute left-0 right-0 z-30 flex justify-center gap-2 bottom-3">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              current === idx
                ? "bg-blue-600"
                : "bg-white border border-blue-600"
            } transition-colors duration-200`}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageCarouselSection;
