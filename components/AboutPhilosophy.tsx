
import React from 'react';
import { COLORS } from '../constants';

const AboutPhilosophy: React.FC = () => {
  const pillars = [
    { label: '01_STRATEGY', title: 'THE BRIDGE', desc: '"We turn homecourt instinct into boardroom wins."' },
    { label: '02_MOMENTUM', title: 'THE RUN', desc: '"We are engineering the next decade of Sacramento excellence."' },
    { label: '03_INCLUSION', title: 'THE ROSTER', desc: '"Excellence has no gatekeepers; if you’re ready to contribute to the win, you have a spot."' },
    { label: '04_OBJECTIVE', title: 'THE GOAL', desc: '"Local talent, global standards, one city."' },
  ];

  return (
    <div className="min-h-[100dvh] pt-24 md:pt-32 pb-32 px-4 md:px-8 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        
        {/* Mission Statement Section */}
        <section className="text-center space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="font-mono text-[10px] md:text-[12px] text-[#5A2D81] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black">System Tag: Mission_Statement</div>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-[#111827]">The Mission Statement</h2>
          
          <div className="max-w-4xl mx-auto border-l-4 border-[#5A2D81] pl-5 md:pl-8 py-5 md:py-6 bg-white shadow-sm text-left border-y border-r border-[#E5E7EB]">
            <p className="text-lg md:text-2xl font-bold text-[#111827] leading-tight italic">
              "SVE is the Front Office for the 916. We bridge the gap between local instinct and boardroom power to build Sacramento’s next dynasty and reclaim the crown on our own soil. This is a city-wide movement—the rotation is open to everyone ready to join the run. Let’s ignite the beam."
            </p>
          </div>
        </section>

        {/* Strategic Pillars Grid */}
        <section className="space-y-10 md:space-y-12">
          <div className="text-center font-mono text-[10px] md:text-[12px] text-slate-400 tracking-[0.4em] md:tracking-[0.5em] uppercase font-black">3. The Strategic Pillars</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={pillar.label} 
                className="p-6 md:p-8 bg-white border border-[#E5E7EB] hover:border-[#5A2D81] transition-all duration-300 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] md:text-[12px] font-mono text-slate-400 mb-4 uppercase tracking-widest font-black">{pillar.label}</div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#111827] group-hover:text-[#5A2D81] transition-colors mb-4">{pillar.title}</h3>
                </div>
                <p className="text-[13px] md:text-sm font-mono text-slate-600 leading-relaxed italic">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPhilosophy;
