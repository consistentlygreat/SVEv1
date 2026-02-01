
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

// Keep a simple cache to avoid frequent requests that hit quota limits
let cachedIntel: string[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes cache

export const fetchTacticalIntel = async (): Promise<string[]> => {
  const fallback = [
    "916 RECLAMATION: Meta anchors $50M into Sac State innovation.",
    "CAPITAL_SYNC: Tech migration from Bay Area to 916 increases 12%.",
    "SVE_CORE: SECTOR STEADY",
    "GROWTH PROJECTION: BULLISH",
    "COMMERCE_UPLINK: Stripe-enabled secure checkout active."
  ];

  // Return cache if it exists and is fresh
  if (cachedIntel && (Date.now() - lastFetchTime < CACHE_DURATION)) {
    return cachedIntel;
  }

  if (!API_KEY) return fallback;

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate 5 short tactical headlines about Sacramento technology, growth, economy, and business. Format as a simple list of single-sentence strings. Use a serious, slightly cyber-corporate tone. Include concepts like '916 RECLAMATION' and 'CAPITAL_SYNC'. Keep them under 60 characters.",
    });

    const text = response.text || "";
    const lines = text.split('\n')
      .map(line => line.replace(/^\d+\.\s*/, '').trim())
      .filter(line => line.length > 10 && line.length < 120);
      
    if (lines.length > 0) {
      cachedIntel = lines;
      lastFetchTime = Date.now();
      return lines;
    }
    return fallback;
  } catch (error: any) {
    // If we hit a 429 or any other error, log it once and return fallback
    if (error?.message?.includes('429') || error?.status === 429) {
      console.warn("SVE_INTEL_UPLINK: Rate limit exceeded. Operating on stored local buffer.");
    } else {
      console.error("SVE_INTEL_UPLINK: Transmission failed.", error);
    }
    return fallback;
  }
};
