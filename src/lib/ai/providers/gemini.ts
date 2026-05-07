/**
 * Adaptador Google AI (Gemini)
 * ============================
 * Implementa las llamadas concretas al SDK de Google Generative AI.
 * No exponer fuera de /lib/ai.
 *
 * Modelos por defecto:
 *   AI_COMPLEX_MODEL = gemini-2.5-pro    (1M tokens de contexto, ideal para Grafo Maestro)
 *   AI_SIMPLE_MODEL  = gemini-2.5-flash
 */

// TODO: import { GoogleGenerativeAI } from "@google/generative-ai";

// const client = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

export async function callComplex(prompt: string): Promise<string> {
  throw new Error("gemini.callComplex: no implementado");
}

export async function callSimple(prompt: string): Promise<string> {
  throw new Error("gemini.callSimple: no implementado");
}
