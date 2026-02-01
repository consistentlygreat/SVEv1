
import React from 'react';
import { TIERS, COLORS } from '../constants';

const MembershipTiers: React.FC = () => {
  return (
    <div className="min-h-[100dvh] pt-24 md:pt-32 pb-32 px-4 md:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="font-mono text-[10px] md:text-[12px] text-[#5A2D81] tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase font-black">Deployment Code: 02_Deployment</div>
          <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter text-[#111827] mb-6">Founding 50: The Vanguard</h2>
          <p className="max-w-3xl mx-auto text-sm md:text-lg text-slate-600 font-mono leading-relaxed text-center px-2">
            "The Founding 50 is a foundational contribution to SVE, fueling the very architecture we are building for the city's future. It is a vanguard group of 50 leaders dedicated to bridging the gap between local instinct and boardroom power. By contributing, you join the Front Office in engineering Sacramento's next dynasty. This is the run."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {TIERS.map((tier) => (
            <div 
              key={tier.name}
              className={`
                relative p-6 md:p-8 border-4 transition-all duration-300 flex flex-col
                ${tier.featured ? 'border-[#5A2D81] bg-white scale-100 md:scale-105 shadow-2xl z-10' : 'border-[#E5E7EB] bg-slate-50 opacity-90'}
              `}
            >
              <div className="mb-4">
                <div className="font-mono text-[10px] md:text-[12px] text-slate-400 uppercase tracking-widest mb-1 font-black">{tier.inventory}</div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2" style={{ color: tier.color }}>{tier.name}</h3>
                <div className="flex items-baseline gap-3">
                   <div className="text-3xl md:text-4xl font-black text-[#111827]">{tier.price}</div>
                   <div className="text-[10px] md:text-[12px] font-mono text-slate-400 uppercase">{tier.msrp}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-10 md:mb-12 flex-1">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-3 font-mono text-[13px] md:text-[14px] text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5A2D81] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <a 
                  href={tier.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    block w-full py-4 text-center font-black uppercase tracking-widest transition-all active:scale-[0.98]
                    ${tier.featured ? 'bg-[#5A2D81] text-white hover:bg-[#111827]' : 'bg-[#111827] text-white hover:bg-slate-700'}
                  `}
                >
                  AUTHORIZE PAYMENT
                </a>
                <div className="flex justify-between items-center font-mono text-[9px] md:text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  <span>SECURE_GATEWAY</span>
                  <span>RSA_4096_ACTIVE</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center font-mono text-[10px] md:text-[12px] text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
          GATEWAY: STRIPE_DIRECT_v4.1 // RECLAIMING_THE_CAPITAL
        </div>
      </div>
    </div>
  );
};

export default MembershipTiers;
