export type MemorialItem = {
  src: string;
  alt: string;
  caption: string;
  kind?: "image" | "video";
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
    sinceDate: string;
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
  };
};

export const memorial: MemorialContent = {
  meta: {
    title: "João & Maria",
    description:
      "Nossa história, do ônibus pro Suruvão ao sim no Vão. Um presente só seu.",
  },
  hero: {
    eyebrow: "Pra você, Maria",
    names: { first: "João", second: "Maria" },
    dateLabel: "28 MARÇO 2026",
    dateSub: "O dia em que tudo começou de verdade",
    dedication:
      "Fiz esse site só pra você. Cada foto aqui é um pedaço nosso, do dia em que te vi até hoje. Eu te amo de um jeito que não cabe em mensagem. Obrigado por existir na minha vida.",
    sinceDate: "2026-03-28T12:00:00-03:00",
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
      title: "Como te encontrei",
      subtitle: "Do ônibus pro Suruvão ao direct que demorou uma semana",
      items: [
        {
          src: "/media/capitulo-01-primeiro-encontro.jpeg",
          alt: "Primeiro encontro com a Maria",
          caption:
            "Te vi no ônibus pro Suruvão e nem falei com você. O Instagram insistiu uma semana inteira até eu ter coragem de te seguir. No nosso primeiro encontro eu já estava apaixonadinho no seu jeitinho.",
        },
        {
          src: "/media/capitulo-01-segundo-encontro.jpg",
          alt: "Segundo encontro com a Maria",
          caption:
            "Te ver de novo só confirmou: você é espetacular de linda e eu não consigo fingir indiferença.",
        },
      ],
    },
    {
      id: "passos",
      number: "II",
      title: "Nossa primeira saída",
      subtitle: "Escada rolante, comida e polaroids",
      items: [
        {
          src: "/media/capitulo-02-primeira-saida.jpg",
          alt: "Primeira saída para comer juntos",
          caption:
            "Eu te fiz raiva por ter atrasado. Mas nunca vou esquecer você descendo a escada rolante do metrô, brava e encantadoramente linda. Comemos, conversamos o dia inteiro e tiramos nossas primeiras fotinhas polaroides.",
        },
      ],
    },
    {
      id: "casa-maria",
      number: "III",
      title: "A casa dela",
      subtitle: "Seus amigos, sua mãe, seu pai, suas irmãs",
      items: [
        {
          src: "/media/casa-da-maria-01.mp4",
          alt: "Resenha na casa da Maria com os amigos",
          caption:
            "Reseninha na sua casa. Seus amigos, seu mundo, e eu tentando absorver cada detalhe de quem você é.",
          kind: "video",
        },
        {
          src: "/media/casa-da-maria-02.jpeg",
          alt: "Maria com a família em casa",
          caption:
            "Virados não sei como kkkkkkkk",
        },
      ],
    },
    {
      id: "proximidade",
      number: "IV",
      title: "Dormir do seu lado",
      subtitle: "Laura abriu a porta e eu nunca mais quis sair",
      items: [
        {
          src: "/media/capitulo-03-primeira-noite.jpg",
          alt: "Primeira vez que dormimos juntos",
          caption:
            "Nossa primeira noite juntos, depois da festa, com a Laura deixando eu dormir aí. Acordar do seu lado virou meu lugar favorito no mundo.",
        },
      ],
    },
    {
      id: "pedido",
      number: "V",
      title: "O pedido",
      subtitle: "Vão, drinks, sim e Manda Chuva",
      items: [
        {
          src: "/media/capitulo-04-pedido-01.jpg",
          alt: "Pedido de namoro no Vão, momento 1",
          caption: "Chegamos no Vão. Meu coração já sabia o que ia rolar.",
        },
        {
          src: "/media/capitulo-04-pedido-02.jpg",
          alt: "Pedido de namoro no Vão, momento 2",
          caption: "Drinks, conversa boa e você linda do meu lado.",
        },
        {
          src: "/media/capitulo-04-pedido-03.jpg",
          alt: "Pedido de namoro no Vão, momento 3",
          caption: "Nós sendo o puro suco do caos kkkkkk",
        },
        {
          src: "/media/capitulo-04-pedido-04.jpg",
          alt: "Pedido de namoro no Vão, momento 4",
          caption: "E então eu perguntei se você queria ser minha.",
        },
        {
          src: "/media/capitulo-04-pedido-05.jpeg",
          alt: "Pedido de namoro no Vão, momento 5",
          caption: "Seu sim. A resposta mais bonita que já ouvi na vida.",
        },
        {
          src: "/media/capitulo-04-pedido-06.jpeg",
          alt: "Pedido de namoro no Vão, momento 6",
          caption: "Fomos tão felizes. Eu ainda sinto isso quando olho essa foto.",
        },
        {
          src: "/media/capitulo-04-pedido-07.jpg",
          alt: "Pedido de namoro no Vão, momento 7",
          caption: "Oficialmente nós. Eu nunca me senti tão completo.",
        },
        {
          src: "/media/capitulo-04-pedido-08.jpg",
          alt: "Pedido de namoro no Vão, momento 8",
          caption: "Manda Chuva no palco e a gente no nosso mundinho.",
        },
        {
          src: "/media/capitulo-04-pedido-09.jpg",
          alt: "Pedido de namoro no Vão, momento 9",
          caption:
            "Mais fotinhas, te deixei na casa da sua irmã e fui pra casa flutuando.",
        },
      ],
      video: {
        src: "/media/video-pedido-namoro.mp4",
        poster: "/media/capitulo-04-pedido-01.jpg",
        caption: "A noite inteira em movimento. Pra rever quando bater saudade.",
      },
    },
    {
      id: "nos-dois",
      number: "VI",
      title: "Casa do Peretto",
      subtitle: "Ensaio de samba, terceiro surdo e nosso primeiro rolê oficial",
      items: [
        {
          src: "/media/capitulo-05-peretto-antes-da-casa-dele.jpeg",
          alt: "Antes de entrar na casa do Peretto",
          caption:
            "Antes da casa dele: ensaio da escolinha de samba e eu tocando meu primeiro instrumento, o terceiro surdo.",
        },
        {
          src: "/media/capitulo-05-peretto-01.jpg",
          alt: "Aniversário do Peretto, foto 1",
          caption: "Aniversário do Peretto. Nossa primeira saída oficial como namorados.",
        },
        {
          src: "/media/capitulo-05-peretto-02.jpg",
          alt: "Aniversário do Peretto, foto 2",
          caption: "Risadas que só a gente entende. Eu te olhando e derretendo.",
        },
        {
          src: "/media/capitulo-05-peretto-03.jpg",
          alt: "Aniversário do Peretto, foto 3",
          caption: "Pequenos gestos seu que me desmontam.",
        },
        {
          src: "/media/capitulo-05-peretto-04.jpg",
          alt: "Aniversário do Peretto, foto 4",
          caption: "Você e eu, sem pressa, só existindo junto.",
        },
        {
          src: "/media/capitulo-05-peretto-05.jpg",
          alt: "Aniversário do Peretto, foto 5",
          caption: "Cuidar de você é o que eu mais gosto de fazer.",
        },
        {
          src: "/media/capitulo-05-peretto-06.jpg",
          alt: "Aniversário do Peretto, foto 6",
          caption: "Cada foto aqui grita o quanto eu te amo.",
        },
        {
          src: "/media/capitulo-05-peretto-07.jpg",
          alt: "Aniversário do Peretto, foto 7",
          caption: "Te olhando e pensando: como eu tive tanta sorte?",
        },
        {
          src: "/media/capitulo-05-peretto-08.jpg",
          alt: "Aniversário do Peretto, foto 8",
          caption: "Nosso cantinho na festa, nosso mundinho.",
        },
        {
          src: "/media/capitulo-05-peretto-09.jpg",
          alt: "Aniversário do Peretto, foto 9",
          caption: "Momentos simples que eu quero guardar pra sempre.",
        },
        {
          src: "/media/capitulo-05-peretto-10.jpg",
          alt: "Aniversário do Peretto, foto 10",
          caption: "Sua mão na minha. Meu lugar seguro.",
        },
        {
          src: "/media/capitulo-05-peretto-11.jpg",
          alt: "Aniversário do Peretto, foto 11",
          caption: "A gente rindo de coisa boba, como sempre.",
        },
        {
          src: "/media/capitulo-05-peretto-12.jpeg",
          alt: "Aniversário do Peretto, foto 12",
          caption: "Mais um instante que eu não quero esquecer.",
        },
        {
          src: "/media/capitulo-05-peretto-13.jpg",
          alt: "Aniversário do Peretto, foto 13",
          caption: "Você iluminando qualquer lugar que pisa.",
        },
        {
          src: "/media/capitulo-05-peretto-14.jpg",
          alt: "Aniversário do Peretto, foto 14",
          caption: "Nós dois contra o resto do mundo, e ganhando fácil.",
        },
        {
          src: "/media/capitulo-05-peretto-15.jpg",
          alt: "Aniversário do Peretto, foto 15",
          caption: "Te amo nesta foto. Te amo na próxima também.",
        },
        {
          src: "/media/capitulo-05-peretto-16.jpg",
          alt: "Aniversário do Peretto, foto 16",
          caption: "Mostrando amor um pro outro sem vergonha nenhuma.",
        },
        {
          src: "/media/capitulo-05-peretto-17.jpg",
          alt: "Aniversário do Peretto, foto 17",
          caption: "E ainda estamos só começando, Maria.",
        },
      ],
    },
    {
      id: "viagem",
      number: "VII",
      title: "Nossa viagem",
      subtitle: "Ida só nós dois, volta com quem eu também amo",
      items: [
        {
          src: "/media/capitulo-06-viagem-01.jpg",
          alt: "Viagem juntos, ida",
          caption:
            "Na ida, só nós dois. Música, carinho meu em você, e eu feliz demais.",
        },
        {
          src: "/media/capitulo-06-viagem-02.jpg",
          alt: "Viagem juntos, volta",
          caption:
            "Na volta, com a sua irmã mais nova. Ela já tem um lugar enorme no meu coração também.",
        },
      ],
    },
    {
      id: "memes",
      number: "VIII",
      title: "Us",
      subtitle: "A energia da gente em meme e gatinho",
      items: [
        {
          src: "/media/memes/meme-01.jpeg",
          alt: "Meme Us que a gente manda no Instagram",
          caption: "Isso aqui é a gente. Sem filtro, sem explicação.",
        },
        {
          src: "/media/memes/meme-02.jpeg",
          alt: "Meme Us no Instagram",
          caption: "Mandado no direct, guardado no coração.",
        },
        {
          src: "/media/memes/meme-03.jpeg",
          alt: "Meme Us de casal",
          caption: "Nossa personalidade de casal em um meme só.",
        },
        {
          src: "/media/memes/meme-04.jpeg",
          alt: "Meme Us engraçado",
          caption: "Só faz sentido entre nós dois. E é por isso que eu amo.",
        },
        {
          src: "/media/memes/meme-05.jpeg",
          alt: "Meme Us representando o casal",
          caption: "Us. Porque ninguém traduz melhor quem a gente é junto.",
        },
      ],
    },
  ],
  stories: [
    {
      id: "inicio",
      icon: "solar:heart-linear",
      title: "Como te encontrei",
      paragraphs: [
        "A gente se cruzou no suposto ônibus pro Suruvão e eu nem falei com você. Dias depois o Instagram ficou te recomendando por quase uma semana até eu juntar coragem de te seguir e mandar mensagem.",
        "Desde a primeira vez que te vi eu achei você espetacular de linda. No nosso primeiro encontro eu fiquei apaixonadinho no seu jeitinho único. Não tem como voltar atrás depois disso.",
      ],
    },
    {
      id: "passos",
      icon: "solar:camera-linear",
      title: "Nossa primeira saída",
      paragraphs: [
        "Eu te fiz raiva por ter atrasado. Mas nunca vou esquecer de te ver descendo a escada rolante do metrô, brava e encantadoramente linda.",
        "Comemos, passamos o dia inteiro conversando e tiramos nossas primeiras fotinhas polaroides. Foi incrível. Eu soube na hora que queria repetir isso pra sempre.",
      ],
    },
    {
      id: "casa-maria",
      icon: "solar:home-smile-linear",
      title: "A casa dela",
      paragraphs: [
        "O dia que fui na sua casa eu pude conhecer melhor seus amigos na reseninha. Mas acima de tudo conheci sua mãe, seu pai e suas duas irmãs.",
        "Me senti parte da sua vida de um jeito que me acolheu. Eu quero estar presente nesse mundo seu cada vez mais.",
      ],
    },
    {
      id: "proximidade",
      icon: "solar:moon-linear",
      title: "Dormir do seu lado",
      paragraphs: [
        "Nossa primeira noite juntos foi depois da festa, graças à Laura ter deixado eu dormir na casa dela.",
        "Eu amo acordar do seu lado. Virou meu lugar favorito no mundo e eu não troco por nada.",
      ],
    },
    {
      id: "pedido",
      icon: "solar:heart-linear",
      title: "O pedido",
      paragraphs: [
        "Fomos pro Vão, bebemos, conversamos, e eu te pedi em namoro. Fomos muito felizes, tiramos um monte de fotos, assistimos o Manda Chuva tocar e ainda tiramos mais fotinhas antes de te deixar na casa da sua irmã.",
        "Foi a noite mais importante da minha vida. Seu sim ainda me arrepia quando eu lembro.",
      ],
    },
    {
      id: "nos-dois",
      icon: "solar:star-linear",
      title: "Casa do Peretto",
      paragraphs: [
        "Antes fomos no ensaio da escolinha de samba, onde toquei meu primeiro instrumento, o terceiro surdo. Depois, aniversário do Peretto na casa dele.",
        "Foi nossa primeira saída oficial como namorados. As fotos mostram o amor que a gente tem um pelo outro sem vergonha nenhuma. Eu te amo em cada uma.",
      ],
    },
    {
      id: "viagem",
      icon: "solar:map-point-linear",
      title: "Nossa viagem",
      paragraphs: [
        "Na ida fomos só nós dois, ouvindo música enquanto eu fazia carinho em você. Na volta, com a sua irmã mais nova, que com certeza já tem um lugar no meu coração também.",
        "Foi incrível. Onde você estiver, esse é o meu lugar favorito no mundo.",
      ],
    },
  ],
  milestones: [
    {
      number: "01",
      title: "Te vi",
      description:
        "28 de março de 2026. Ônibus, Instagram e coragem. Tudo começou aí.",
    },
    {
      number: "02",
      title: "Primeira saída",
      description: "Metrô, comida, conversa o dia inteiro e polaroids.",
    },
    {
      number: "03",
      title: "A casa dela",
      description: "Amigos, mãe, pai e suas duas irmãs.",
    },
    {
      number: "04",
      title: "Primeira noite",
      description: "Laura abriu a porta. Eu nunca mais quis sair.",
    },
    {
      number: "05",
      title: "O pedido",
      description: "22 de maio de 2026. Vão, sim e Manda Chuva.",
    },
    {
      number: "06",
      title: "Peretto",
      description: "Samba, aniversário e nosso primeiro rolê oficial.",
    },
    {
      number: "07",
      title: "A viagem",
      description: "Ida só nós. Volta com quem eu também amo.",
    },
  ],
  gallery: {
    title: "Nossa história em fotinhas",
    footer: "...e a gente ainda tá escrevendo os próximos capítulos.",
  },
  closing: {
    quote:
      "Você não é só minha namorada. Você é o meu lugar favorito no mundo, Maria.",
    signature:
      "Com todo meu amor, pro Dia dos Namorados e pra todos os dias que vierem.",
  },
};

export function getAllPhotos(content: MemorialContent): MemorialItem[] {
  return content.chapters.flatMap((chapter) => chapter.items);
}

export function getProposalVideo(content: MemorialContent) {
  return content.chapters.find((c) => c.id === "pedido")?.video;
}
