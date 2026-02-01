
import React from 'react';

export const COLORS = {
  beamPurple: '#5A2D81', // Kings Accent
  ghostWhite: '#F9FAFB', // Daylight Gallery Main Background
  deepSlate: '#111827', // Primary Text (Deep Slate)
  hornetGreen: '#154734', // Sac State Accent (Hornet Green)
  neonGlow: '#22C55E', // The Signature Glow
  softSilver: '#E5E7EB', // Structural Borders
};

export const LOGO_URL = "https://res.cloudinary.com/dkonebytq/image/upload/v1769923448/2_pkv5yh.svg";

export const SVELogo = ({ className }: { className?: string }) => (
  <img src={LOGO_URL} alt="Sacramento vs Everybody Logo" className={className} />
);

export const PRODUCTS = [
  {
    id: 'h-purple',
    name: 'BEAM PURPLE',
    faction: 'THE BEAM FACTION',
    edition: 'DYNASTY_CORE',
    status: 'PREORDER_OPEN',
    color: COLORS.beamPurple,
    price: '$80.00',
    fullPrice: '$110.00',
    description: "A tribute to the glow that commands the skyline. Built for the architects of the city’s nocturnal dominance.",
    specs: ['Finish: Obsidian Vintage Wash', 'Identity: High-Fidelity Beam Purple', 'Rotation: Dropped-Shoulder Heavyweight'],
    imageUrl: 'https://res.cloudinary.com/dkonebytq/image/upload/v1769937046/Untitled_design-5_j4yzrh.png',
    paymentLink: 'https://buy.stripe.com/00w5kD10o6MN5a8fZ1bQY04'
  },
  {
    id: 'h-green',
    name: 'HORNET GREEN',
    faction: 'THE STING FACTION',
    edition: 'STRENGTH_CORE',
    status: 'PREORDER_OPEN',
    color: COLORS.hornetGreen,
    price: '$80.00',
    fullPrice: '$110.00',
    description: "Rooted in the raw energy that fuels the city’s academic and athletic grit. Built for the vanguard striking from the 916.",
    specs: ['Finish: Obsidian Vintage Wash', 'Identity: High-Fidelity Hornet Green', 'Rotation: Dropped-Shoulder Heavyweight'],
    imageUrl: 'https://res.cloudinary.com/dkonebytq/image/upload/v1769937571/Untitled_design-6_gxoqbk.png',
    paymentLink: 'https://buy.stripe.com/bJe14nbF24EF7igcMPbQY03'
  }
];

export const TIERS = [
  {
    name: 'THE FOUNDER',
    price: '$200',
    msrp: 'MSRP: $250',
    inventory: 'Slots 11–20',
    features: ['Founding Hoodie', 'Discord HQ Access', 'Ticket to the First SVE Event'],
    color: COLORS.deepSlate,
    paymentLink: 'https://buy.stripe.com/4gM8wPcJ6dbbbyw003bQY02'
  },
  {
    name: 'THE ARCHITECT',
    price: '$400',
    msrp: 'MSRP: $500',
    inventory: 'Slots 8–10',
    features: ['Everything in THE FOUNDER', 'Top 10 Spot on Founding 50 List', '30-minute Blueprint Session'],
    color: COLORS.beamPurple,
    featured: true,
    paymentLink: 'https://buy.stripe.com/aFafZh38w1stbyw6orbQY01'
  }
];

export const PILLARS = [
  { title: 'THE BRIDGE', desc: 'We turn homecourt instinct into boardroom wins.' },
  { title: 'THE RUN', desc: 'We are engineering the next decade of Sacramento excellence.' },
  { title: 'THE ROSTER', desc: 'Excellence has no gatekeepers; if you’re ready to contribute, you have a spot.' },
  { title: 'THE GOAL', desc: 'Local talent, global standards, one city.' }
];
