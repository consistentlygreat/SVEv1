
import React, { useState, useEffect } from 'react';
import { ProgressBar } from './VisualWidgets';
import { COLORS } from '../constants';

const ScrambledLabel: React.FC<{ text: string }> = ({ text }) => {
  const [display, setDisplay] = useState('');
  const chars = '!@#$%^&*()_+{}[]|;:,.<>?';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="font-mono text-[10px] md:text-[12px] uppercase text-slate-400 tracking-[0.2em] font-black">{display}</span>;
};

const TacticalIntake: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [step, setStep] = useState<'FORM' | 'TRANSMITTING' | 'CONFIRMED'>('FORM');
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('TRANSMITTING');
    
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setStep('CONFIRMED'), 500);
      }
      setProgress(current);
    }, 200);
  };

  if (step === 'CONFIRMED') {
    return (
      <div className="max-w-sm md:max-w-md w-full bg-white p-6 md:p-8 border-4 border-[#5A2D81] text-center shadow-[12px_12px_0px_rgba(90,45,129,0.3)] md:shadow-[20px_20px_0px_rgba(90,45,129,0.3)] ring-2 ring-[#111827] animate-in zoom-in-95 duration-300 mx-4">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#5A2D81] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-2 text-[#111827]">Dispatch Secured.</h2>
        <p className="text-slate-500 font-mono text-[10px] md:text-sm mb-6 md:mb-8 italic">Blueprint received. Tactical channels are now active.</p>
        <button 
          onClick={onClose}
          className="w-full py-3 md:py-4 bg-[#111827] text-white font-black uppercase tracking-widest hover:bg-[#5A2D81] transition-colors text-sm active:scale-95"
        >
          RETURN TO COMMAND
        </button>
      </div>
    );
  }

  if (step === 'TRANSMITTING') {
    return (
      <div className="max-w-sm md:max-w-md w-full bg-white p-6 md:p-8 border-4 border-[#5A2D81] shadow-[12px_12px_0px_rgba(90,45,129,0.3)] ring-2 ring-[#111827] mx-4">
        <h2 className="text-lg md:text-2xl font-black uppercase tracking-tighter mb-4 text-center text-[#5A2D81]">TRANSMITTING_BLUEPRINT</h2>
        <div className="space-y-4">
          <ProgressBar progress={progress} />
          <div className="flex justify-between font-mono text-[10px] md:text-[12px] text-slate-400 uppercase font-bold">
            <span>Routing...</span>
            <span>{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg w-full bg-white p-5 md:p-10 border-4 border-[#5A2D81] shadow-[10px_10px_0px_rgba(90,45,129,0.3)] md:shadow-[15px_15px_0px_rgba(90,45,129,0.3)] ring-2 ring-[#111827] relative overflow-y-auto max-h-[85dvh] md:max-h-[90vh] transition-all duration-700 animate-in fade-in zoom-in-95 mx-4">
      <div className="absolute top-0 right-0 p-2 md:p-4 font-mono text-[8px] md:text-[10px] text-[#5A2D81] font-black opacity-50">PORTAL_INTAKE_v2.5</div>
      
      <div className="mb-5 md:mb-8">
        <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-2 text-[#111827]">The Scouting Report</h2>
        <p className="text-slate-400 font-mono text-[9px] md:text-[12px] uppercase tracking-widest font-black italic">Founding 50 // Intake Process</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-1">
            <label className="block mb-1"><ScrambledLabel text="FULL NAME" /></label>
            <input required className="w-full bg-[#F9FAFB] border-2 border-[#E5E7EB] p-2.5 md:p-3 font-mono text-xs md:text-sm focus:border-[#5A2D81] focus:ring-1 focus:ring-[#5A2D81] outline-none transition-all placeholder:text-slate-300 text-[#111827]" placeholder="IDENTITY" />
          </div>
          <div className="space-y-1">
            <label className="block mb-1"><ScrambledLabel text="EMAIL ADDRESS" /></label>
            <input required type="email" className="w-full bg-[#F9FAFB] border-2 border-[#E5E7EB] p-2.5 md:p-3 font-mono text-xs md:text-sm focus:border-[#5A2D81] focus:ring-1 focus:ring-[#5A2D81] outline-none transition-all placeholder:text-slate-300 text-[#111827]" placeholder="SECURE_COMMS" />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block mb-1"><ScrambledLabel text="CAPABILITY" /></label>
          <input required className="w-full bg-[#F9FAFB] border-2 border-[#E5E7EB] p-2.5 md:p-3 font-mono text-xs md:text-sm focus:border-[#5A2D81] focus:ring-1 focus:ring-[#5A2D81] outline-none transition-all placeholder:text-slate-300 text-[#111827]" placeholder="PROFESSION / SKILLSET" />
        </div>

        <div className="space-y-1">
          <label className="block mb-1"><ScrambledLabel text="JOIN THE RUN" /></label>
          <textarea required rows={2} className="w-full bg-[#F9FAFB] border-2 border-[#E5E7EB] p-2.5 md:p-3 font-mono text-xs md:text-sm focus:border-[#5A2D81] focus:ring-1 focus:ring-[#5A2D81] outline-none transition-all resize-none placeholder:text-slate-300 text-[#111827]" placeholder="STRATEGIC INTENT" />
        </div>

        <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-3 md:gap-4">
          <button 
            type="button"
            onClick={onClose}
            className="flex-1 py-3 md:py-4 border-2 border-[#111827] text-[#111827] font-black uppercase tracking-widest hover:bg-slate-50 transition-colors text-xs md:text-sm active:scale-95"
          >
            ABORT
          </button>
          <button 
            type="submit"
            className="flex-[2] py-3 md:py-4 bg-[#111827] text-white font-black uppercase tracking-widest hover:bg-[#5A2D81] shadow-lg transition-all text-xs md:text-sm active:scale-95"
          >
            TRANSMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default TacticalIntake;
