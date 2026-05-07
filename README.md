# learning-ia-api

REST API de la **Plataforma Adaptativa de Aprendizaje Técnico**.
Lógica de negocio + capa de abstracción de IA + jobs nocturnos de versionado del grafo.

> Base: Documento Maestro v6.0 (Mayo 2026), secciones 4 y 5.

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Runtime | Node.js 20+ + TypeScript |
| Framework | Express.js |
| ORM | Prisma + PostgreSQL (JSONB) |
| Capa de IA | Módulo propio `/lib/ai` con adaptadores Claude y Gemini |
| Scraping | Puppeteer (v2 — Admin Panel) |
| Jobs | node-cron |
| Deploy | Railway / Render |

---

## Estructura

```
src/
  routes/           Endpoints REST por dominio
  services/         Lógica de negocio pura
  lib/
    ai/             Capa de abstracción de IA
      index.ts      10 funciones de negocio
      providers/
        claude.ts   Adaptador Anthropic
        gemini.ts   Adaptador Google AI
prisma/
  schema.prisma     Schema con JSONB
```

---

## Comandos

```bash
npm install                 # primera vez
cp .env.example .env        # configurar variables
npm run prisma:generate     # generar el cliente Prisma
npm run prisma:migrate      # aplicar migraciones
npm run dev                 # desarrollo con hot-reload (tsx watch)
npm run build               # compilar a dist/
npm start                   # producción
```

---

## La capa `/lib/ai` — regla de oro

El resto del sistema **nunca llama directamente a un proveedor de IA**.
Solo invoca las 10 funciones de negocio de `lib/ai/index.ts`.
Cambiar de Claude a Gemini = cambiar dos variables en `.env`.

```ts
// ✅ Correcto
import { generateLesson } from "@/lib/ai";

// ❌ Prohibido
import Anthropic from "@anthropic-ai/sdk";
```

---

## Tablas

`users`, `user_profiles`, `master_graphs`, `user_courses`, `validation_attempts`, `sessions_log`, `feedback`.

`progress_data` y `master_graphs.jsonData` usan JSONB — flexibilidad total
para inyectar nodos de refuerzo dinámicos sin migraciones.
