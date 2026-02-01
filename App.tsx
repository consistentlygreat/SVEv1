
import React, { useState, useEffect } from 'react';
import IntelligenceBar from './components/IntelligenceBar';
import { PortalStatus } from './types';
import { DigitalRain } from './components/VisualWidgets';
import { SVELogo, COLORS } from './constants';
import TacticalIntake from './components/TacticalIntake';
import ProductShowcase from './components/ProductShowcase';
import MembershipTiers from './components/MembershipTiers';
import AboutPhilosophy from './components/AboutPhilosophy';

const App: React.FC = () => {
  const [status, setStatus] = useState<PortalStatus>(PortalStatus.ACTIVE);
  const [isBeaming, setIsBeaming] = useState(false);

  // Scroll to top on every status (page) change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [status]);

  const handleIgniteBeam = () => {
    setIsBeaming(true);
    setTimeout(() => {
      setIsBeaming(false);
      setStatus(PortalStatus.INTAKE);
    }, 1500);
  };

  // Determine root background color based on active status to eliminate white "seams"
  const isDarkSection = status === PortalStatus.BATTLE;
  const rootBg = isDarkSection ? 'bg-[#111827]' : 'bg-[#F9FAFB]';

  return (
    <div className={`relative min-h-[100dvh] ${rootBg} flex flex-col transition-colors duration-1000 overflow-x-hidden text-[#111827] selection:bg-[#5A2D81] selection:text-white`}>
      <style>
        {`
          @keyframes beam-pulse {
            0%, 100% { transform: scale(0.8); opacity: 0.2; filter: blur(80px); }
            50% { transform: scale(1.3); opacity: 0.6; filter: blur(120px); }
          }
          @keyframes beam-wash-anim {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.9; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          .green-beam-glow {
            animation: beam-pulse 5s ease-in-out infinite;
            background: radial-gradient(circle, #4ade80 0%, #22c55e 40%, transparent 70%);
            width: 300px;
            height: 300px;
          }
          .beam-wash {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100dvh;
            background: linear-gradient(to bottom, transparent, #5A2D81, white, #5A2D81, transparent);
            z-index: 200;
            pointer-events: none;
            animation: beam-wash-anim 1.5s ease-in-out forwards;
          }
          .glass-noise {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.12;
            mix-blend-mode: overlay;
          }
          @media (min-width: 768px) {
            .green-beam-glow { width: 800px; height: 800px; }
          }
          /* iOS safe area support */
          .pb-safe {
            padding-bottom: env(safe-area-inset-bottom, 2rem);
          }
          .bottom-safe {
            bottom: calc(env(safe-area-inset-bottom, 0px) + 2rem);
          }
        `}
      </style>
      
      {isBeaming && <div className="beam-wash" />}
      
      <IntelligenceBar isBeaming={isBeaming} />
      <DigitalRain />
      <div className="scanline-effect" />
      <div className="vignette" />

      {/* Main Navigation Overlay - Fixed overflow and width issues */}
      <nav className="fixed bottom-safe left-1/2 -translate-x-1/2 z-[100] flex gap-1 md:gap-3 p-1.5 md:p-2 bg-[#5A2D81]/90 backdrop-blur-2xl rounded-full border border-white/20 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.02] ring-1 ring-white/10 w-[94%] max-w-lg md:w-auto">
        <div className="absolute inset-0 rounded-full glass-noise pointer-events-none overflow-hidden" />
        
        <button 
          onClick={() => setStatus(PortalStatus.ACTIVE)}
          className={`flex-1 md:flex-none relative z-10 px-3 md:px-6 py-2.5 rounded-full font-black text-[10px] md:text-[12px] uppercase tracking-widest transition-all whitespace-nowrap ${status === PortalStatus.ACTIVE ? 'bg-white text-[#5A2D81] shadow-lg' : 'text-white/60 hover:text-white'}`}
        >
          HUB
        </button>
        <button 
          onClick={() => setStatus(PortalStatus.BATTLE)}
          className={`flex-1 md:flex-none relative z-10 px-3 md:px-6 py-2.5 rounded-full font-black text-[10px] md:text-[12px] uppercase tracking-widest transition-all whitespace-nowrap ${status === PortalStatus.BATTLE ? 'bg-white text-[#5A2D81] shadow-lg' : 'text-white/60 hover:text-white'}`}
        >
          MERCH
        </button>
        <button 
          onClick={() => setStatus(PortalStatus.MEMBERSHIP)}
          className={`flex-1 md:flex-none relative z-10 px-3 md:px-6 py-2.5 rounded-full font-black text-[10px] md:text-[12px] uppercase tracking-widest transition-all whitespace-nowrap ${status === PortalStatus.MEMBERSHIP ? 'bg-white text-[#5A2D81] shadow-lg' : 'text-white/60 hover:text-white'}`}
        >
          F50
        </button>
        <button 
          onClick={() => setStatus(PortalStatus.ABOUT)}
          className={`flex-1 md:flex-none relative z-10 px-3 md:px-6 py-2.5 rounded-full font-black text-[10px] md:text-[12px] uppercase tracking-widest transition-all whitespace-nowrap ${status === PortalStatus.ABOUT ? 'bg-white text-[#5A2D81] shadow-lg' : 'text-white/60 hover:text-white'}`}
        >
          ABOUT
        </button>
      </nav>

      {/* View Rendering */}
      <main className="flex-1 transition-all duration-500 pt-10">
        {status === PortalStatus.ACTIVE && (
          <div className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 pb-32">
            <div className="mb-4 flex flex-col items-center font-mono text-[10px] md:text-[12px] text-slate-400 uppercase tracking-[0.4em] space-y-1 font-bold">
              <span>STATUS: STABLE // BUFFER: 4096KB</span>
              <span>High_Fidelity_Sync [100%]</span>
            </div>
            
            <div className="relative group flex items-center justify-center">
              <div className="absolute z-0 pointer-events-none">
                <div className="green-beam-glow rounded-full" />
              </div>
              <SVELogo className="w-56 md:w-[600px] h-auto transition-transform duration-700 hover:scale-105 relative z-10" />
              <div className="absolute inset-0 bg-[#5A2D81] blur-[150px] opacity-0 z-0 group-hover:opacity-25 transition-opacity pointer-events-none" />
            </div>

            <div className="mt-8 space-y-6 md:space-y-8 max-w-2xl relative z-10">
              <h1 className="text-lg md:text-2xl font-mono text-slate-500 uppercase tracking-[0.3em] font-black leading-relaxed">
                INSTINCT MEETS BOARDROOM
              </h1>
              
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={() => setStatus(PortalStatus.INTAKE)}
                  className="font-mono text-[10px] md:text-[12px] text-slate-400 hover:text-[#5A2D81] transition-colors uppercase tracking-[0.4em] mb-2 font-black active:scale-95"
                >
                  APPLY FOR MEMBERSHIP
                </button>
                <button 
                  onClick={handleIgniteBeam} 
                  className="px-10 md:px-16 py-5 md:py-6 bg-[#5A2D81] text-white font-black text-lg md:text-xl uppercase tracking-[0.2em] shadow-[0_20px_60px_-15px_rgba(90,45,129,0.5)] hover:scale-105 active:scale-95 transition-all relative overflow-hidden group rounded-full"
                >
                  <span className="relative z-10">IGNITE THE BEAM</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </button>
              </div>
            </div>
          </div>
        )}

        {status === PortalStatus.BATTLE && <ProductShowcase />}
        {status === PortalStatus.MEMBERSHIP && <MembershipTiers />}
        {status === PortalStatus.ABOUT && <AboutPhilosophy />}
        
        {status === PortalStatus.INTAKE && (
          <div className="fixed inset-0 z-[150] bg-slate-900/60 backdrop-blur-xl flex items-center justify-center p-4">
            <TacticalIntake onClose={() => setStatus(PortalStatus.ACTIVE)} />
          </div>
        )}
      </main>

      <footer className="w-full py-8 bg-[#154734] text-white/70 font-mono text-[10px] md:text-[12px] uppercase tracking-[0.3em] border-t border-white/20 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] pb-safe">
        <div className="flex items-center gap-4">
          <span className="text-white font-black">SVE_PORTAL // 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-bold text-white uppercase tracking-widest text-center">SECURED BY SVE SACRAMENTO</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
