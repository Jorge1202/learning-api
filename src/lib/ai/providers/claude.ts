/**
 * Adaptador Anthropic (Claude)
 * ============================
 * Implementa las llamadas concretas al SDK de Anthropic.
 * No exponer fuera de /lib/ai — el resto del sistema solo ve las
 * funciones de negocio de index.ts.
 *
 * Modelos por defecto:
 *   AI_COMPLEX_MODEL = claude-sonnet-4-6
 *   AI_SIMPLE_MODEL  = claude-haiku-4-5
 */

// TODO: import Anthropic from "@anthropic-ai/sdk";

// const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function callComplex(prompt: string): Promise<string> {
  // Modelo de razonamiento profundo (Sonnet).
  // Usado por: generateMasterGraph, evaluateExercise, generateLesson, etc.
  throw new Error("claude.callComplex: no implementado");
}

export async function callSimple(prompt: string): Promise<string> {
  // Modelo económico (Haiku).
  // Usado por: generateDailyWarmup, generateHint, generateCuriosityFeed.
  throw new Error("claude.callSimple: no implementado");
}
