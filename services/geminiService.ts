import { GoogleGenAI } from "@google/genai";

/**
 * API_KEY is sourced from Cloudflare Pages Environment Variables.
 * Ensure you have added 'API_KEY' in your Cloudflare Project Settings.
 */
const API_KEY = process.env.API_KEY;

let cachedIntel: string[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

export const fetchTacticalIntel = async (): Promise<string[]> => {
  const fallback = [
    "916 RECLAMATION: Tech migration to Sacramento up 12%.",
    "CAPITAL_SYNC: SVE infrastructure reaching peak stability.",
    "SVE_CORE: SECTOR STEADY // 2026 HORIZON ACTIVE",
    "GROWTH PROJECTION: BULLISH // SACRAMENTO DOMINANCE",
    "COMMERCE_UPLINK: Secure Stripe checkout active."
  ];

  if (cachedIntel && (Date.now() - lastFetchTime < CACHE_DURATION)) {
    return cachedIntel;
  }

  // Use fallback if API key is missing or explicitly undefined string
  if (!API_KEY || API_KEY === "undefined") {
    console.warn("SVE_INTEL: No API_KEY detected in Cloudflare environment. Using local buffer.");
    return fallback;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate 5 short tactical headlines about Sacramento technology, growth, economy, and business. Format as a simple list of single-sentence strings. Use a serious, slightly cyber-corporate tone. Include concepts like '916 RECLAMATION' and 'CAPITAL_SYNC'. Keep them under 60 characters.",
    });

    const text = response.text || "";
    const lines = text.split('\n')
      .map(line => line.replace(/^\d+\.\s*/, '').trim())
      .filter(line => line.length > 5 && line.length < 120);
      
    if (lines.length > 0) {
      cachedIntel = lines;
      lastFetchTime = Date.now();
      return lines;
    }
    return fallback;
  } catch (error: any) {
    console.error("SVE_INTEL_ERROR:", error);
    return fallback;
  }
};