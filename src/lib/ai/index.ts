/**
 * Capa de Abstracción de IA — Punto de Entrada
 * ================================================
 * Las 10 funciones de negocio. El resto de la app llama AQUÍ, nunca
 * directamente a un proveedor. Cambiar de Claude a Gemini = cambiar
 * AI_PROVIDER en el .env. Sin downtime, sin reescribir código.
 *
 * Principio: el resto del sistema nunca sabe qué modelo se está usando.
 */

// TODO: importar adaptadores cuando estén implementados
// import * as claude from "./providers/claude";
// import * as gemini from "./providers/gemini";

// ---------- Selección de proveedor ----------

type Provider = "claude" | "gemini";
const PROVIDER: Provider = (process.env.AI_PROVIDER as Provider) ?? "claude";
// AI_COMPLEX_MODEL: tareas con razonamiento profundo (grafo, evaluación)
// AI_SIMPLE_MODEL:  tareas livianas (warmup, hints, curiosity feed)

// ---------- 1. Generación de Grafos ----------

export async function generateMasterGraph(
  url: string,
  profile: unknown,
): Promise<unknown> {
  // Llama al modelo de mayor contexto con el Prompt Maestro.
  // Detecta dependencias, versiones (estable | legacy | vanguardia | nuevo | deprecado)
  // y genera el JSON completo del Grafo Maestro.
  throw new Error("generateMasterGraph: no implementado");
}

export async function generateUserGraph(
  profile: unknown,
  masterGraph: unknown,
): Promise<unknown> {
  // Clona y personaliza el Grafo Maestro para el usuario específico.
  // Aplica el resultado del Reto de Validación: marca nodosValidados.
  throw new Error("generateUserGraph: no implementado");
}

// ---------- 2. Onboarding y Diagnóstico ----------

export async function runValidationChallenge(
  userId: string,
  tech: string,
): Promise<unknown> {
  // Genera y evalúa los 3-5 ejercicios prácticos calibrados del Reto de Validación.
  // No preguntas teóricas: problemas reales que demuestran dominio operativo.
  throw new Error("runValidationChallenge: no implementado");
}

export async function generateIntelligentPackage(
  profile: unknown,
  graph: unknown,
  goal: string,
): Promise<unknown> {
  // Crea el Paquete Inteligente por meta en Modo Aspiracional.
  // Identifica gaps críticos y organiza una ruta sugerida.
  throw new Error("generateIntelligentPackage: no implementado");
}

// ---------- 3. Lecciones y Ejercicios ----------

export async function generateLesson(
  nodeId: string,
  profile: unknown,
): Promise<unknown> {
  // Genera la lección adaptada al perfil, analogías previas y modo activo.
  // Streaming. Incluye Meta-Commentary y Suggested Focus.
  throw new Error("generateLesson: no implementado");
}

export async function evaluateExercise(
  code: string,
  exercise: unknown,
  profile: unknown,
): Promise<unknown> {
  // Evalúa el código con análisis de intención:
  // distingue error tipográfico de falla conceptual profunda.
  // En el MVP es evaluación estática. En v2 ejecuta con Judge0.
  throw new Error("evaluateExercise: no implementado");
}

export async function generateHint(
  level: 1 | 2 | 3,
  exercise: unknown,
  currentCode: string,
): Promise<unknown> {
  // Pistas progresivas:
  //   Nivel 1: área del error
  //   Nivel 2: concepto olvidado
  //   Nivel 3: solución (último recurso)
  throw new Error("generateHint: no implementado");
}

// ---------- 4. Sesión y Continuidad ----------

export async function generateDailyWarmup(
  userId: string,
  sessionHistory: unknown,
): Promise<unknown> {
  // Calentamiento personalizado al iniciar sesión.
  // Repetición espaciada: conceptos con fallas previas reaparecen aquí.
  // Incluye el Diagnóstico del Tutor.
  throw new Error("generateDailyWarmup: no implementado");
}

export async function generateGapAnalysis(
  userId: string,
  completedGraph: unknown,
): Promise<unknown> {
  // Analiza brechas y genera la Sugerencia Proactiva del Loop Infinito.
  // Activado cuando el usuario completa su meta.
  throw new Error("generateGapAnalysis: no implementado");
}

export async function generateCuriosityFeed(
  profile: unknown,
): Promise<unknown> {
  // Genera las 3 sugerencias del Feed de Curiosidad del sidebar del dashboard.
  throw new Error("generateCuriosityFeed: no implementado");
}
