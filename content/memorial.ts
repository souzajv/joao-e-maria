export type MemorialItem = {
  src: string;
  alt: string;
  caption: string;
};

export type MemorialChapter = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  items: MemorialItem[];
  video?: {
    src: string;
    caption: string;
    poster: string;
  };
};

export type MemorialStory = {
  id: string;
  icon: string;
  title: string;
  paragraphs: string[];
};

export type MemorialContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    names: { first: string; second: string };
    dateLabel: string;
    dateSub: string;
    dedication: string;
    proposalDate: string;
    background: {
      mp4: string;
      gif: string;
      poster: string;
    };
  };
  chapters: MemorialChapter[];
  stories: MemorialStory[];
  milestones: {
    number: string;
    title: string;
    description: string;
  }[];
  gallery: {
    title: string;
    footer: string;
  };
  closing: {
    quote: string;
    signature: string;
    footer: string;
  };
};

export const memorial: MemorialContent = {
  meta: {
    title: "João & Maria",
    description:
      "Um memorial da nossa história — do primeiro encontro ao nosso sim.",
  },
  hero: {
    eyebrow: "Com muito amor...",
    names: { first: "João", second: "Maria" },
    dateLabel: "22 MAIO 2026",
    dateSub: "O dia do nosso sim",
    dedication:
      "Este site é só seu. Cada foto aqui é um instante que eu guardo com carinho, do primeiro encontro até hoje. Obrigado por existir na minha vida.",
    proposalDate: "2026-05-22T12:00:00-03:00",
    background: {
      mp4: "/media/hero-pedido-loop.mp4",
      gif: "/media/hero-pedido-loop.gif",
      poster: "/media/hero-pedido-poster.jpg",
    },
  },
  chapters: [
    {
      id: "inicio",
      number: "I",
      title: "O começo",
      subtitle: "Antes de saber que seria tudo",
      items: [
        {
          src: "/media/capitulo-01-primeiro-encontro.jpg",
          alt: "Primeiro encontro",
          caption:
            "O dia em que te vi e o mundo ficou um pouco mais bonito.",
        },
      ],
    },
    {
      id: "passos",
      number: "II",
      title: "Primeiros passos",
      subtitle: "Aprendendo a caminhar juntos",
      items: [
        {
          src: "/media/capitulo-02-primeira-saida.jpg",
          alt: "Primeira saída juntos",
          caption: "Nossa primeira saída. Eu já sabia que queria repetir.",
        },
      ],
    },
    {
      id: "proximidade",
      number: "III",
      title: "Proximidade",
      subtitle: "Quando a distância entre nós sumiu",
      items: [
        {
          src: "/media/capitulo-03-primeira-noite.jpg",
          alt: "Primeira vez que dormimos juntos",
          caption:
            "Acordar do seu lado virou meu lugar favorito no mundo.",
        },
      ],
    },
    {
      id: "pedido",
      number: "IV",
      title: "O pedido",
      subtitle: "O dia em que perguntei se você queria ser minha",
      items: [
        {
          src: "/media/capitulo-04-pedido-01.jpg",
          alt: "Pedido de namoro, momento 1",
          caption:
            "Meu coração batia tão forte que achei que você ia ouvir.",
        },
        {
          src: "/media/capitulo-04-pedido-02.jpg",
          alt: "Pedido de namoro, momento 2",
          caption:
            "Cada detalhe pensado, mas nada comparava ao seu sorriso.",
        },
        {
          src: "/media/capitulo-04-pedido-03.jpg",
          alt: "Pedido de namoro, momento 3",
          caption: "O nervoso antes das palavras saírem.",
        },
        {
          src: "/media/capitulo-04-pedido-04.jpg",
          alt: "Pedido de namoro, momento 4",
          caption: "E então eu perguntei.",
        },
        {
          src: "/media/capitulo-04-pedido-05.jpg",
          alt: "Pedido de namoro, momento 5",
          caption: "Seu sim foi a resposta mais bonita que já ouvi.",
        },
        {
          src: "/media/capitulo-04-pedido-06.jpg",
          alt: "Pedido de namoro, momento 6",
          caption:
            "Um instante que eu revisito no pensamento todo dia.",
        },
        {
          src: "/media/capitulo-04-pedido-07.jpg",
          alt: "Pedido de namoro, momento 7",
          caption:
            "Oficialmente nós. E eu nunca me senti tão completo.",
        },
      ],
      video: {
        src: "/media/video-pedido-namoro.mp4",
        poster: "/media/capitulo-04-pedido-01.jpg",
        caption: "O momento em movimento, para rever quando quiser.",
      },
    },
    {
      id: "nos-dois",
      number: "V",
      title: "Nós dois",
      subtitle: "Casa do Peretto e tudo que construímos",
      items: [
        {
          src: "/media/capitulo-05-peretto-01.jpg",
          alt: "Casa do Peretto, foto 1",
          caption: "Nossos primeiros dias de namoro, leves e nossos.",
        },
        {
          src: "/media/capitulo-05-peretto-02.jpg",
          alt: "Casa do Peretto, foto 2",
          caption: "Risadas que só a gente entende.",
        },
        {
          src: "/media/capitulo-05-peretto-03.jpg",
          alt: "Casa do Peretto, foto 3",
          caption: "Pequenos gestos que significam tudo.",
        },
        {
          src: "/media/capitulo-05-peretto-04.jpg",
          alt: "Casa do Peretto, foto 4",
          caption: "Você e eu, sem pressa.",
        },
        {
          src: "/media/capitulo-05-peretto-05.jpg",
          alt: "Casa do Peretto, foto 5",
          caption: "Cuidar de você é o que eu mais gosto de fazer.",
        },
        {
          src: "/media/capitulo-05-peretto-06.jpg",
          alt: "Casa do Peretto, foto 6",
          caption: "Cada foto aqui é prova de que escolhi certo.",
        },
        {
          src: "/media/capitulo-05-peretto-07.jpg",
          alt: "Casa do Peretto, foto 7",
          caption: "Te olhando e pensando: como eu tive tanta sorte.",
        },
        {
          src: "/media/capitulo-05-peretto-08.jpg",
          alt: "Casa do Peretto, foto 8",
          caption: "Nosso cantinho, nossa rotina, nosso amor.",
        },
        {
          src: "/media/capitulo-05-peretto-09.jpg",
          alt: "Casa do Peretto, foto 9",
          caption: "Momentos simples que viram eternidade.",
        },
        {
          src: "/media/capitulo-05-peretto-10.jpg",
          alt: "Casa do Peretto, foto 10",
          caption: "Sua mão na minha. Meu lugar seguro.",
        },
        {
          src: "/media/capitulo-05-peretto-11.jpg",
          alt: "Casa do Peretto, foto 11",
          caption: "A gente rindo de coisa boba, como sempre.",
        },
        {
          src: "/media/capitulo-05-peretto-12.jpg",
          alt: "Casa do Peretto, foto 12",
          caption: "Mais um dia que eu quero guardar para sempre.",
        },
        {
          src: "/media/capitulo-05-peretto-13.jpg",
          alt: "Casa do Peretto, foto 13",
          caption: "Você iluminando qualquer lugar.",
        },
        {
          src: "/media/capitulo-05-peretto-14.jpg",
          alt: "Casa do Peretto, foto 14",
          caption: "Nós dois contra o resto do mundo, e ganhando.",
        },
        {
          src: "/media/capitulo-05-peretto-15.jpg",
          alt: "Casa do Peretto, foto 15",
          caption: "Te amo nesta foto. Te amo na próxima também.",
        },
        {
          src: "/media/capitulo-05-peretto-16.jpg",
          alt: "Casa do Peretto, foto 16",
          caption: "E ainda estamos só começando.",
        },
      ],
    },
    {
      id: "viagem",
      number: "VI",
      title: "A viagem",
      subtitle: "A última vez que estivemos juntos",
      items: [
        {
          src: "/media/capitulo-06-viagem-01.jpg",
          alt: "Viagem juntos, momento 1",
          caption:
            "Longe de casa, mas exatamente onde eu queria estar: com você.",
        },
        {
          src: "/media/capitulo-06-viagem-02.jpg",
          alt: "Viagem juntos, momento 2",
          caption:
            "Cada lugar novo ficou mais bonito porque você estava lá.",
        },
      ],
    },
  ],
  stories: [
    {
      id: "pedido",
      icon: "solar:heart-linear",
      title: "O pedido",
      paragraphs: [
        "No dia 22 de maio de 2026, eu finalmente perguntei se você queria ser minha. Foi um momento simples e ao mesmo tempo o mais importante da minha vida.",
        "Cada detalhe foi pensado com carinho, mas nada se comparava ao seu sorriso quando você disse sim. Desde então, oficialmente somos nós.",
      ],
    },
    {
      id: "nos-dois",
      icon: "solar:home-smile-linear",
      title: "Nós dois",
      paragraphs: [
        "Na Casa do Peretto e em cada cantinho que conquistamos juntos, construímos uma rotina que é só nossa: risadas bobas, silêncios confortáveis, carinho no meio do dia.",
        "Cada foto desse capítulo é prova de que escolhi certo e de que ainda estamos só começando.",
      ],
    },
    {
      id: "viagem",
      icon: "solar:map-point-linear",
      title: "A viagem",
      paragraphs: [
        "Nossa última viagem juntos ficou guardada em cada olhar e em cada foto. Longe da rotina, perto um do outro.",
        "Foi mais um lembrete de que, onde você estiver, esse é o meu lugar favorito no mundo.",
      ],
    },
  ],
  milestones: [
    {
      number: "01",
      title: "O encontro",
      description: "O dia em que nos vimos pela primeira vez.",
    },
    {
      number: "02",
      title: "Primeira saída",
      description: "Saímos juntos e eu soube que queria mais.",
    },
    {
      number: "03",
      title: "Primeira noite",
      description: "Dormimos juntos. E tudo mudou.",
    },
    {
      number: "04",
      title: "O pedido",
      description: "22 de maio de 2026. Você disse sim.",
    },
    {
      number: "05",
      title: "Nós",
      description: "Cada dia desde então.",
    },
    {
      number: "06",
      title: "A viagem",
      description: "Nossa última aventura juntos.",
    },
  ],
  gallery: {
    title: "Nossos momentos",
    footer: "...e ainda estamos escrevendo os próximos capítulos.",
  },
  closing: {
    quote:
      "Você não é só minha namorada. É meu lugar favorito no mundo.",
    signature:
      "Com todo meu amor, para o Dia dos Namorados e para todos os dias.",
    footer: "João & Maria · 2026",
  },
};

export function getAllPhotos(content: MemorialContent): MemorialItem[] {
  return content.chapters.flatMap((chapter) => chapter.items);
}

export function getProposalVideo(content: MemorialContent) {
  return content.chapters.find((c) => c.id === "pedido")?.video;
}
