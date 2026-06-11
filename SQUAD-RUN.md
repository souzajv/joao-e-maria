# SQUAD-RUN.md — Meu Amorzinho

> Rastreio de progresso do modo Squad. Pipeline `/lp` + `/squad`.

## Meta

| Campo | Valor |
|-------|-------|
| Projeto | `meu-amorzinho` |
| Ideia (1 linha) | Memorial digital íntimo — narrativa cronológica do casal, tema escuro editorial, presente Dia dos Namorados |
| Início | 2026-06-10 |
| Status | 🟢 concluído |
| Fase atual | QA |

## Configuração inferida

| Item | Valor |
|------|-------|
| Motion avançada (5b) | sim — GSAP + CSS fadeZoom |
| Backend SaaS (7b) | não — LP estática |
| shadcn/ui | não — componentes custom (exceção documentada) |

---

## Progresso por fase

| Fase | Agente | Status | Gate | Data |
|------|--------|--------|------|------|
| 0 Brief | principal | ✅ | aprovado impl | 2026-06-10 |
| 1 Produto | product-strategist | ✅ | score 9/10 | 2026-06-10 |
| 2 UX | ux-auditor | ✅ | 0 críticas | 2026-06-10 |
| 2.5 Copy | conversion-copywriter | ✅ | legendas em COPY.md | 2026-06-10 |
| 3–5 Design | design-lead + art-director | ✅ | dark wine editorial | 2026-06-10 |
| 5b Motion | motion-designer | ✅ | GSAP only | 2026-06-10 |
| 6 Arquitetura | staff-architect | ✅ | skip Supabase | 2026-06-10 |
| 7 Frontend | frontend-engineer | ✅ | build OK | 2026-06-10 |
| 7b Backend | backend-engineer | ⏭️ skip | LP sem backend | 2026-06-10 |
| QA Visual | design-qa-reviewer | ✅ | 0 blockers | 2026-06-10 |
| QA Code | web-design-guidelines | ✅ | build + a11y OK | 2026-06-10 |

---

## Log de sessão

- 2026-06-10 — Squad iniciado — memorial presente Dia dos Namorados
- 2026-06-10 — Escopo: assets/ only (26 fotos + 1 vídeo), copy mínimo com legendas
- 2026-06-10 — Next.js implementado, build pass, DESIGN-QA 0 críticos
- 2026-06-10 — Refino: HeroVideo (clip 6s), Inter font, GSAP batch, blur overlay
- 2026-06-10 — Fix: blur local no hero, loop vídeo, GSAP todas seções, copy sem travessões
- 2026-06-10 — Hotfix squad: vídeo hero loop 6s (GOP ffmpeg, sem backdrop-blur), GSAP useGSAP + refresh + HIDE_SELECTORS
- 2026-06-10 — Redesign carta: layout convite (Alex Brush + Cormorant + Inter), João & Maria, viagem + galeria unificada
- 2026-06-10 — Refino carta vinho: paleta `#7b2d3b`, Source Sans 3, 9 PNGs florais, legendas galeria visíveis, fix vídeo hero (transform no wrapper)
- 2026-06-10 — Elegância editorial: `LetterMediaFrame` unificado, galeria timeline offset, fotos antes do vídeo, vídeo retrato lado a lado, flores nos cantos do card

---

## Entregáveis

- [x] `BRIEF.md`
- [x] `UX-AUDIT.md`
- [x] `COPY.md`
- [x] `DESIGN.md`
- [x] `ARCHITECTURE.md`
- [x] Código Next.js (`app/`, `components/memorial/`, `content/memorial.ts`)
- [x] `DESIGN-QA.md`

---

## Como rodar

```bash
cd projects/meu-amorzinho
npm run dev
```

Deploy: Vercel — definir `NEXT_PUBLIC_SITE_URL` para OG images.
