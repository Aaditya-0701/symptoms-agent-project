import React, { useState } from "react";
import goal_badge from "../assets/banner.png";
// Section Data
const sections = [
  {
    id: "t31",
    title: "Do you know how many lives are lost every year just due to lacking basic health care?",
    content:
      "Every day, thousands die simply because they lack access to even the most elementary medical attention—be it safe childbirth, emergency care, or essential medicines. In fact, maternal mortality still claims hundreds of thousands of women annually, the majority from preventable causes. Behind every number is a life that could have been saved by timely, competent care.",
  },
  {
    id: "t32",
    title: "What if you found out millions of children's deaths could have been prevented?",
    content:
      "In 2023 alone, 4.8 million children under 5 died. The tragedy? Most of these deaths could have been avoided with proper nutrition, vaccines, and prompt medical attention. These are not just numbers—they’re young lives and futures lost to circumstances the world can change.",
  },
  {
    id: "t33",
    title: "A disease a minute: Can you imagine someone dying from AIDS every 60 seconds?",
    content:
      "Despite progress, one person still dies from an AIDS-related cause each minute. Millions live with HIV without access to life-saving treatment. Tuberculosis, once thought nearly under control, hit 8.2 million new diagnoses last year—the highest on record. And over a billion people suffer from neglected tropical diseases, often without much hope for care or cure.",
  },
  {
    id: "t34",
    title: "Did you realize your lifestyle choices could decide your fate?",
    content:
      "Noncommunicable diseases like heart disease, cancer, and diabetes take over 18 million lives under the age of 70 each year. Tragically, a huge portion of these are directly linked to habits—like what we eat, how much we move, and regular health checkups. Every healthy choice today is a chance for a longer, happier life tomorrow.",
  },
  {
    id: "t37",
    title: "What if children became mothers before finishing school?",
    content:
      "Millions of girls, some as young as 10, enter motherhood far too soon—forced to abandon education and risk their health. Early motherhood can multiply health risks for mother and child and trap families in cycles of poverty. Empowering girls with knowledge and care breaks this chain.",
  },
  {
    id: "t3b",
    title: "Are unvaccinated children still at risk in today’s world?",
    content:
      "Shockingly, millions of children miss out on vital vaccinations each year, leaving them exposed to deadly yet preventable diseases. When vaccination rates drop, old threats resurface and claim lives that could have been saved. Protecting every child means upholding one of medicine's simplest promises.",
  },
  {
    id: "t3c",
    title: "What happens when there just aren’t enough doctors and nurses?",
    content:
      "The health workforce gap is vast: by 2030, the world is projected to fall short by over 11 million healthcare professionals. In the poorest regions, one doctor may serve thousands. This shortage has a direct, deadly impact—lives lost and communities left without hope for care.",
  },
];


export default function ProgressAndInfo() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="min-w-full p-6 mx-auto mt-6 overflow-hidden shadow-md bg-blue-50 rounded-2xl">
      <header className="mb-4 text-center">
        <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-neutral-700 drop-shadow">
          Progress and Info – 2025
        </h2>
        <p className="mb-1 text-base italic text-gray-600">
          Select any target to reveal more.
        </p>
      </header>
      <div className="flex justify-around min-w-full gap-12">

        <div className="w-1/2 mt-4">
          <img src={goal_badge} alt="Goal" />
        </div>
          
        
        <div className="w-1/2">
          {sections.map(({ id, title, content }) => {
            const open = openId === id;
            return (
              <div
                key={id}
                className="my-4 transition-shadow duration-200 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenId(open ? null : id)}
                  className="flex items-center justify-between w-full px-6 py-4 text-indigo-700 transition-colors bg-white rounded-xl focus:outline-none hover:bg-indigo-50 group"
                  aria-expanded={open}
                  aria-controls={id + "-panel"}
                  style={{
                    // Hard white background -- never dark
                    backgroundColor: "#fff",
                  }}
                >
                  <span className="text-lg font-semibold text-left transition-colors group-hover:text-indigo-900">
                    {title}
                  </span>
                  <span
                    className={`ml-3 flex items-center justify-center rounded-full border-2
                    ${
                      open
                        ? "border-indigo-400 bg-indigo-100 text-indigo-600"
                        : "border-gray-200 bg-gray-100 text-gray-500"
                    }
                    w-9 h-9 transition-all duration-300 shadow`}
                  >
                    {/* Plus/Minus Icon */}
                    <svg
                      className="transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                      width="28"
                      height="28"
                    >
                      <line
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                        strokeLinecap="round"
                      />
                      <line
                        x1="5"
                        y1="12"
                        x2="19"
                        y2="12"
                        strokeLinecap="round"
                        style={{
                          opacity: open ? 0 : 1,
                          transition: "opacity 0.1s",
                        }}
                      />
                    </svg>
                  </span>
                </button>
                {/* Collapsible Content */}
                <div
                  id={id + "-panel"}
                  className={`transition-all  duration-300 overflow-hidden px-8 pb-6
                  ${
                    open
                      ? "max-h-[500px] opacity-100 py-2"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                  aria-hidden={!open}
                >
                  <div className="pt-2 text-base leading-relaxed text-gray-700 animate-fadeIn">
                    {content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Animation style for fade-in content */}
        <style>
          {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(24px);}
            to   { opacity: 1; transform: none;}
          }
          .animate-fadeIn {
            animation: fadeIn 0.28s cubic-bezier(0.5,1.7,0.36,0.85) 1;
          }
        `}
        </style>
            
      </div>
    </section>
  );
}
