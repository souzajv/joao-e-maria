# UX-AUDIT.md — Meu Amorzinho

## Resumo

Violações críticas: **0** | Médias: **2** | OK: **18**

## Checklist Laws of UX

| Lei | Status | Observação |
|-----|--------|------------|
| Jakob's Law | ✅ | Scroll vertical familiar; sem padrões SaaS confusos |
| Hick's Law | ✅ | Uma jornada linear — capítulos em sequência |
| Fitts's Law | ✅ | Vídeo com controles nativos grandes; nav mínima |
| Miller's Law | ✅ | Capítulos agrupam fotos; legendas de 1 frase |
| Gestalt | ✅ | Grid editorial + proximidade por capítulo |
| Peak-End Rule | ✅ | Vídeo do pedido + fechamento emocional como picos |
| Aesthetic-Usability Effect | ✅ | Estética premium reforça valor emocional |
| Law of Proximity | ✅ | Legenda junto à foto no grid |
| Serial Position Effect | ✅ | Hero forte + fechamento memorável |
| Tesler's Law | ✅ | Complexidade visual absorvida pelo design; usuário só scrolla |

## Jornada emocional (substitui conversion funnel)

1. **Abertura:** Hero — "nossa história" em < 5s
2. **Contexto:** Dedicação curta — tom íntimo
3. **Narrativa:** Capítulos I–V — progressão cronológica
4. **Clímax:** Vídeo do pedido de namoro
5. **Encerramento:** Citação + assinatura — peak-end

Gargalos identificados: vídeo pesado no mobile; legendas sobre fotos precisam overlay para contraste.

## Mobile-first

- [x] Touch targets ≥ 44px (vídeo controls nativos)
- [x] Conteúdo crítico nos primeiros 2 viewports (hero + início cap. I)
- [x] Sem overflow horizontal
- [x] Legendas legíveis em 375px (gradiente inferior nas fotos)

## Fluxo proposto

1. Hero slideshow → 2. Dedicação → 3. Capítulos (scroll) → 4. Timeline marcos → 5. Vídeo → 6. Fechamento

## Violações críticas (bloqueiam design)

_Nenhuma._

## Recomendações (médias)

1. **Média:** Lazy-load imagens abaixo da dobra com `next/image`
2. **Média:** `prefers-reduced-motion` — hero estático, sem ScrollTrigger

## Gate

- [x] 0 violações críticas → avançar para **conversion-copywriter** (COPY.md)

## Handoff para Copy

Mensagens-chave: amor, tempo, marcos (primeiro encontro → pedido → vida a dois).
Gaps: 26 legendas + 5 títulos de capítulo + hero + fechamento.
Estrutura: hero → dedicação → capítulos → timeline → vídeo → fechamento → footer.
