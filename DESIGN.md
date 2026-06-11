# DESIGN.md — Meu Amorzinho (Carta Vinho)

## Direção visual

**Metáfora:** carta digital romântica — convite íntimo  
**Tom:** leve, elegante, pastoral moderno com acento vermelho vinho  
**Referência:** convite Natalia & Olek (Aura) — adaptado para memorial João & Maria  
**Layout:** card creme centralizado em fundo `#faf6f4`, bordas duplas wine, decor floral nos cantos

## Tipografia

| Papel | Fonte | Uso |
|-------|-------|-----|
| Script | Alex Brush | Nomes, título counter |
| Serif | Cormorant Garamond | Datas, títulos, citações, legendas galeria |
| Sans | Source Sans 3 | Labels, corpo |

## Tokens

```css
--color-page: #faf6f4;
--color-card: #fffdfa;
--color-primary: #7b2d3b;
--color-primary-light: #a64d5e;
--color-primary-dark: #5c2230;
--color-body: #475569;
--color-gold: #eab308;
```

## Component Map

| Componente | Função |
|------------|--------|
| LetterShell | Card + bordas wine duplas + decor cantos |
| LetterDecor | 3 trepadeiras + 3 flor principal (cantos verticais) |
| LetterBodyFlorals | 3 flor sem caule no corpo da carta |
| HeroVideoBlob | Vídeo 6s no shape orgânico (transform no wrapper) |
| LetterHero | Eyebrow, nomes, data, dedicação |
| TogetherCounter | Dias juntos desde 22/05/2026 |
| TimelineSection | Marcos da história |
| StorySection | Textos O pedido, Nós dois, A viagem |
| ProposalVideoInline | Vídeo completo do pedido |
| MomentsGallery | Grid 3 col, legendas sempre visíveis |
| LetterClosing | Citação + assinatura |

## Florais (`lib/letter-florals.ts`)

| Grupo | Qtd | Posição |
|-------|-----|---------|
| Trepadeiras | 3 | Cantos da carta (fundo) |
| Flor principal | 3 | Cantos verticais — caule na borda |
| Flor sem caule | 3 | Corpo — enfeite sutil entre seções |

Assets em `public/media/flores/` (kebab-case).

## Motion Stack

| Camada | Escolha | Notas |
|--------|---------|-------|
| UI | CSS hover | scale galeria |
| Load | GSAP fade | LetterHero apenas |
| Scroll | nenhum | carta legível sem hide |

**Max 1 motion lib:** GSAP only.

## Anti-Frankenstein

- Sem shadcn
- Ícones: @iconify/react (Solar) + PNGs florais
- Tokens via tailwind + globals.css — sem hex soltos
- Sem backdrop-blur no vídeo hero
- Transform apenas no wrapper do HeroVideoBlob, nunca no `<video>`
