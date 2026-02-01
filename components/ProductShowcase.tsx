
import React from 'react';
import { PRODUCTS, COLORS } from '../constants';

const ProductShowcase: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-10 flex flex-col md:flex-row overflow-hidden bg-[#111827]">
      {/* Strategy Header */}
      <div className="absolute top-16 left-0 w-full z-30 text-center pointer-events-none px-4">
        <div className="font-mono text-[10px] md:text-[12px] text-white/40 tracking-[0.5em] mb-2 uppercase font-black">Strategy Code: COMMAND_DECISION</div>
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white">BATTLE OF THE COLORS</h2>
        <p className="mt-2 font-mono text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-white/60">"Two identities. One city. Secure your founding heavyweight merch today."</p>
      </div>

      {PRODUCTS.map((product, index) => (
        <div
          key={product.id}
          className={`
            relative flex-1 flex flex-col items-center justify-center p-8 transition-all duration-500
            ${product.id === 'h-purple' ? 'bg-gradient-to-b from-[#1e1b4b] to-[#111827]' : 'bg-gradient-to-b from-[#154734] to-[#111827]'}
            border-b md:border-b-0 ${index === 0 ? 'md:border-r border-white/10' : ''}
          `}
        >
          {/* Product Image Section */}
          <div className="relative w-full max-w-sm aspect-[4/5] flex items-center justify-center mt-24 md:mt-0">
            <div 
              className="absolute inset-0 blur-[120px] opacity-40 scale-110"
              style={{ backgroundColor: product.color }}
            />
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Product Info Section */}
          <div className="mt-8 text-center max-w-sm z-20 w-full">
            <div className="font-mono text-[12px] text-white/40 mb-2 uppercase tracking-widest font-bold">
              {product.faction} // {product.edition}
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">
              {product.name}
            </h2>
            
            <p className="mt-4 font-mono text-sm leading-relaxed text-slate-300 px-4 md:px-0">
              {product.description}
            </p>
            
            <div className="mt-6 space-y-2">
              {product.specs.map((spec: string) => (
                <div key={spec} className="text-[12px] font-mono uppercase tracking-wider font-bold text-slate-400">
                  {spec}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center">
              <div className="flex flex-col items-center mb-6">
                <span className="text-4xl font-black text-white">{product.price}</span>
                <span className="text-[12px] font-mono line-through text-white/30">FULL_PRICE: {product.fullPrice}</span>
              </div>
              
              <a 
                href={product.paymentLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`
                  w-full py-5 px-8 font-black text-white uppercase tracking-[0.3em] text-base md:text-lg transition-all active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/20 hover:border-white text-center flex items-center justify-center group
                  ${product.id === 'h-purple' ? 'bg-[#5A2D81]' : 'bg-[#154734]'}
                `}
              >
                <span>PRE-ORDER</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <div className="mt-4 font-mono text-[10px] text-white/30 uppercase tracking-widest font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                SECURE_GATEWAY: STRIPE_DIRECT_SSL
              </div>
            </div>
          </div>
          
          <div className="mt-12 font-mono text-[10px] md:text-[12px] text-white/20 font-black uppercase tracking-widest mb-10 md:mb-0">
            EST_SHIPPING: Late Q1 2025
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
