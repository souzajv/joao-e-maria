# DESIGN-QA.md — Meu Amorzinho (Carta Vinho)

## Resumo

| Severidade | Count |
|------------|-------|
| Crítico | 0 |
| Médio | 0 |
| Baixo | 0 |

**Gate QA Visual:** [x] Pass (0 críticos)

Data: 2026-06-10 (elegância editorial + flores + galeria timeline)  
Reviewer: design-qa-reviewer

---

## Findings

Refino editorial: moldura orgânica unificada, galeria por capítulo com offset, vídeo retrato lateral, flores nos cantos do card.

---

## Checklist

- [x] Layout carta: fundo `#faf6f4`, card creme, bordas duplas wine
- [x] Fontes: Alex Brush, Cormorant Garamond, Source Sans 3
- [x] Paleta: primary `#7b2d3b`, primary-light `#a64d5e`
- [x] Hero: vídeo blob orgânico 6s loop (transform no wrapper)
- [x] Nomes João & Maria + data 22 MAIO 2026
- [x] Counter "Juntos há..." desde pedido
- [x] Flores: cantos do card via `LetterShell` — sem overlap no closing
- [x] Galeria: capítulos cronológicos, grid 2 col com offset Y alternado, moldura orgânica
- [x] Vídeo completo: retrato `object-contain`, texto em paralelo, após fotos
- [x] Capítulo viagem (2 fotos novas)
- [x] Galeria unificada (~28 fotos)
- [x] PT-BR only (sem language switcher)
- [x] Hero vídeo: loop mp4 sempre (fallback gif, sem poster estático)
- [x] npm run build OK

---

## Build

```
npm run build — OK (2026-06-10 fix flores + legendas + vídeo)
```
