import { useState, useEffect } from "react";
import gyraLogo from "@/assets/gyra_logo.webp";

const phases = ["DISCOVERING", "COLLECTING", "ANALYZING", "PUBLISHING"];

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 40ms * 100 = 4s total

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(onComplete, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  let currentPhaseIndex = 0;
  if (progress >= 75) {
    currentPhaseIndex = 3;
  } else if (progress >= 50) {
    currentPhaseIndex = 2;
  } else if (progress >= 25) {
    currentPhaseIndex = 1;
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa] font-sans">
      <style>{`
        @keyframes gentle-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.97); opacity: 0.85; }
        }
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-gentle-pulse {
          animation: gentle-pulse 2.5s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Main Loader Container */}
      <div className="relative flex items-center justify-center w-64 h-64 mb-8">
        {/* Background Radar Ping Effect */}
        <div className="absolute inset-4 rounded-full border border-[#b89e63] animate-ping-slow"></div>

        {/* SVG Circular Progress Bar */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90 drop-shadow-md" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#b89e63" strokeWidth="2" strokeOpacity="0.2" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#8c2c16"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-75 ease-linear"
          />
        </svg>

        {/* Center Logo */}
        <div className="relative w-44 h-44 bg-white rounded-full flex items-center justify-center p-5 shadow-inner animate-gentle-pulse z-10">
          <img
            src={gyraLogo}
            alt="GYRA Logo"
            className="w-full h-full object-contain"
            onError={(e) => {
              const img = e.currentTarget;
              img.style.display = "none";
              const fallback = img.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div className="hidden flex-col items-center justify-center">
            <span className="text-[#8c2c16] font-bold text-4xl tracking-wider">GYRA</span>
          </div>
        </div>
      </div>

      {/* Loading Status Text */}
      <div className="flex flex-col items-center h-20">
        <div className="flex items-center justify-between w-64 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100">
          <span className="text-[#8c2c16] font-bold text-sm tracking-widest transition-opacity duration-300">
            {phases[currentPhaseIndex]}
          </span>
          <span className="text-[#b89e63] font-mono font-semibold">{progress}%</span>
        </div>

        <p className="text-xs text-slate-400 tracking-[0.2em] mt-4 uppercase">
          Global Young Researchers' Academy
        </p>
      </div>
    </div>
  );
};

export default Loader;
