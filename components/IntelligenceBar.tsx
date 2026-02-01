
import React, { useState, useEffect } from 'react';
import { fetchTacticalIntel } from '../services/geminiService';
import { Typewriter } from './VisualWidgets';
import { COLORS } from '../constants';

const IntelligenceBar: React.FC<{ isBeaming?: boolean }> = ({ isBeaming }) => {
  const [intel, setIntel] = useState<string[]>(["INITIALIZING SECURE UPLINK..."]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const loadIntel = async () => {
      const data = await fetchTacticalIntel();
      setIntel(data);
    };
    loadIntel();

    const ticker = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % intel.length);
    }, 10000);

    // PWA Install Logic
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      clearInterval(ticker);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [intel.length]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setDeferredPrompt(null);
      }
    } else {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
      if (isIOS) {
        alert("COMMAND_UPLINK: To install the Power Portal on iOS, tap 'Share' then 'Add to Home Screen'. [UPLINK_STABLE]");
      } else if (window.matchMedia('(display-mode: standalone)').matches) {
        alert("COMMAND_UPLINK: Portal already established as standalone application. [SYNC_COMPLETE]");
      } else {
        alert("COMMAND_UPLINK: Secure this portal by adding it to your home screen or desktop via your browser's menu. [SYNC_ACTIVE]");
      }
    }
  };

  const barBg = isBeaming ? 'bg-[#5A2D81]' : 'bg-[#154734]';
  const borderColor = isBeaming ? 'border-white/40' : 'border-white/10';

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] ${barBg} px-4 py-2 border-b ${borderColor} transition-colors duration-500 flex items-center justify-between text-sm font-mono tracking-wider overflow-hidden text-white shadow-lg h-10`}>
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="flex items-center gap-2 shrink-0">
          <span className={`w-2 h-2 rounded-full animate-pulse ${isBeaming ? 'bg-white' : 'bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,1)]'}`}></span>
          <span className="hidden sm:inline font-bold uppercase tracking-widest text-[10px] md:text-[12px]">SVE_COMMAND</span>
        </div>
        <div className="flex-1 truncate border-l border-white/20 pl-4 text-[10px] md:text-[12px]">
          <span className={`mr-2 font-black ${isBeaming ? 'text-white' : 'text-white/60'}`}>INTEL:</span>
          <Typewriter key={currentIndex} text={intel[currentIndex]} />
        </div>
      </div>
      
      <div className="flex items-center border-l border-white/20 pl-4 ml-4 shrink-0 h-full">
        <button 
          onClick={handleInstall}
          className={`font-black px-3 py-1 rounded transition-all text-[10px] md:text-[12px] tracking-widest uppercase active:scale-95 ${deferredPrompt ? 'bg-white text-[#154734] animate-pulse' : 'hover:bg-white/20'}`}
        >
          {deferredPrompt ? 'DOWNLOAD_PORTAL' : 'INSTALL_APP'}
        </button>
      </div>
    </div>
  );
};

export default IntelligenceBar;
