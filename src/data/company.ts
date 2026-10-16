/**
 * ============================================================
 * DADOS DA EMPRESA — arquivo único de configuração
 * ============================================================
 * Para reaproveitar este site para outro cliente, basta editar
 * os valores abaixo. Nenhum outro arquivo precisa ser tocado
 * para trocar textos, contatos, serviços ou endereço.
 *
 * Os valores atuais são um EXEMPLO ilustrativo (Espaço Bella
 * Estética, Itatiba/SP) para fins de demonstração comercial.
 * ============================================================
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  duration?: string;
  highlight?: string;
  image?: string;
  benefits?: string[];
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  number?: string;
}

export interface GalleryImage {
  id: string;
  alt: string;
  size: "tall" | "wide" | "square";
  imageUrl: string;
  title?: string;
  category?: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  comment: string;
  rating: number;
  date?: string;
}

export const company = {
  name: "Espaço Bella Estética",
  shortName: "Bella Estética",
  tagline: "Ateliê de Beleza, Cuidado & Estética em Itatiba",
  segment: "Estética & Bem-Estar",
  city: "Itatiba",
  state: "SP",

  // Formato: apenas números, com DDI 55 e DDD.
  whatsappNumber: "5519999999999",
  whatsappDefaultMessage:
    "Olá! Gostaria de agendar um horário na Espaço Bella Estética em Itatiba.",

  instagramHandle: "@bellaestetica.itatiba",
  instagramUrl: "https://instagram.com/bellaestetica.itatiba",

  address: {
    street: "Rua das Flores, 123",
    neighborhood: "Centro",
    city: "Itatiba",
    state: "SP",
    zip: "13250-000",
    reference: "Próximo à Praça da Bandeira, com fácil estacionamento",
    mapsUrl: "https://maps.google.com/?q=Rua+das+Flores+123+Centro+Itatiba+SP",
  },

  hours: [
    { days: "Terça a Sexta", hours: "09h às 19h" },
    { days: "Sábado", hours: "09h às 17h" },
    { days: "Domingo e Segunda", hours: "Fechado para recarga da equipe" },
  ] as BusinessHours[],

  stats: {
    rating: "4.9",
    totalReviews: "+1.200",
    experienceYears: "8 anos",
    clientsServed: "1.200+",
  },

  trustBadges: [
    "Atendimento Individual com Hora Marcada",
    "Protocolos Exclusivos & Personalizados",
    "Biossegurança e Esterilização Hospitalar",
    "Ambiente Climatizado e Silencioso",
  ],

  hero: {
    eyebrow: "ATELIÊ DE BELEZA & ESTÉTICA • ITATIBA/SP",
    headline: "A sua beleza em evidência, com a naturalidade que você merece.",
    subheadline:
      "Um refúgio de tranquilidade no Centro de Itatiba. Combinamos protocolos estéticos avançados, cosméticos de alta performance e um acolhimento pensado para o seu bem-estar completo.",
    ctaPrimary: "Agendar pelo WhatsApp",
    ctaSecondary: "Explorar Procedimentos",
    urgencyText: "Agenda da semana com vagas limitadas",
  },

  about: {
    eyebrow: "NOSSO MANIFESTO",
    heading: "Mais que procedimentos estéticos: um momento genuíno de autocuidado",
    paragraphs: [
      "O Espaço Bella Estética nasceu em Itatiba da crença de que cada pessoa possui uma beleza singular que não deve ser padronizada, mas sim valorizada com delicadeza e precisão técnica.",
      "Criamos um ambiente onde o ritmo acelerado da rotina dá lugar a uma experiência de pausa, conforto e atenção exclusiva. Aqui, você nunca é apenas mais um horário na agenda: realizamos uma avaliação cuidadosa antes de cada atendimento.",
      "Utilizamos apenas dermocosméticos consagrados, ativos com eficácia comprovada e instrumentos que passam por rigoroso processo de esterilização hospitalar em autoclave.",
    ],
    pillars: [
      {
        title: "Avaliação Honestamente Personalizada",
        description: "Ouvimos suas queixas e desejos antes de qualquer aplicação, indicando apenas o que sua pele e estética realmente necessitam.",
      },
      {
        title: "Biossegurança Inegociável",
        description: "Controle estrito de desinfecção, materiais descartáveis e autoclave com laudo de esterilização a cada ciclo.",
      },
      {
        title: "Conforto Sensorial Pleno",
        description: "Música relaxante, iluminação suave e aromaterapia discreta para que sua sessão seja um verdadeiro momento de descanso.",
      },
    ],
  },

  services: [
    {
      id: "svc-1",
      name: "Design & Reconstrução de Sobrancelhas",
      description:
        "Visagismo facial que respeita a simetria natural do seu rosto. Inclui higienização, mapeamento geométrico personalizado, epilação precisa e finalização com ativos fortalecedores de fios.",
      duration: "45 min",
      highlight: "O Queridinho",
      image: "/images/service-eyebrows.jpg",
      benefits: [
        "Mapeamento personalizado sob medida",
        "Técnica suave com mínimo desconforto",
        "Harmonização natural do olhar",
      ],
    },
    {
      id: "svc-2",
      name: "Limpeza de Pele Profunda & Detox Facial",
      description:
        "Protocolo completo com vapor de ozônio, extração delicada de impurezas, peeling ultrassônico, alta frequência bactericida e máscara hidroplástica calmante de efeito glow imediato.",
      duration: "1h 20 min",
      highlight: "Alta Demanda",
      image: "/images/service-skincare.jpg",
      benefits: [
        "Desobstrução e controle da oleosidade",
        "Extração sem marcas indesejadas",
        "Hidratação intensa e viço renovado",
      ],
    },
    {
      id: "svc-3",
      name: "Spa das Mãos & Esmaltação em Gel",
      description:
        "Cuidado minucioso da saúde das unhas e cutículas com esfoliação com óleos essenciais, massagem hidratante e esmaltação premium de brilho espelhado e alta durabilidade de até 21 dias.",
      duration: "1h 10 min",
      highlight: "Elegância Duradoura",
      image: "/images/service-nails.jpg",
      benefits: [
        "Esmaltes hipoalergênicos e veganos",
        "Alicates esterilizados em autoclave",
        "Brilho impecável por semanas",
      ],
    },
    {
      id: "svc-4",
      name: "Massagem Relaxante & Drenagem Terapêutica",
      description:
        "Manobras fluidas e precisas associadas a pedras quentes vulcânicas e óleos botânicos aromáticos aquecidos. Alivia dores lombares, tensões nos ombros e reduz a retenção de líquidos com conforto profundo.",
      duration: "1h 00 min",
      highlight: "Relaxamento Total",
      image: "/images/service-massage.jpg",
      benefits: [
        "Alívio instantâneo do estresse e cansaço",
        "Estímulo da circulação e desinchaço",
        "Maca aquecida e ambiente relaxante",
      ],
    },
  ] as Service[],

  testimonials: [
    {
      id: "t1",
      name: "Camila Rodrigues",
      service: "Limpeza de Pele & Sobrancelhas",
      comment:
        "O atendimento da Bella Estética é impecável. Moro no Centro de Itatiba e não troco por nenhum outro lugar. A limpeza de pele não deixou minha pele vermelha e as sobrancelhas ficaram super naturais.",
      rating: 5,
      date: "Há 2 semanas",
    },
    {
      id: "t2",
      name: "Mariana Alcantara",
      service: "Spa das Mãos em Gel",
      comment:
        "Ambiente aconchegante, cheiroso e super calmo. A durabilidade do esmalte em gel é inacreditável, durou mais de 20 dias perfeito. O agendamento pelo WhatsApp foi super rápido e atencioso.",
      rating: 5,
      date: "Há 1 mês",
    },
    {
      id: "t3",
      name: "Patrícia Silveira",
      service: "Massagem com Pedras Quentes",
      comment:
        "Entrei travada de dor nas costas por conta do trabalho e saí renovada. Dá para sentir o cuidado em cada detalhe, desde o chazinho de boas-vindas até o carinho da massoterapeuta.",
      rating: 5,
      date: "Há 3 semanas",
    },
  ] as Testimonial[],

  differentials: [
    {
      id: "diff-1",
      number: "01",
      title: "Atendimento Individual e Sem Pressa",
      description:
        "Reservamos tempo de sobra entre os agendamentos. Você é atendida no horário exato e desfruta de uma experiência calma, sem fila de espera ou correria.",
    },
    {
      id: "diff-2",
      number: "02",
      title: "Biossegurança Rigorosa em Autoclave",
      description:
        "Todos os materiais metálicos passam por higienização cirúrgica e esterilização monitorada. Descartáveis abertos na sua frente com total transparência.",
    },
    {
      id: "diff-3",
      number: "03",
      title: "Localização Privilegiada no Centro de Itatiba",
      description:
        "Acesso fácil e seguro, perto de tudo, com facilidade de estacionamento nas imediações para que a sua visita seja leve do início ao fim.",
    },
    {
      id: "diff-4",
      number: "04",
      title: "Agendamento Ágil via WhatsApp",
      description:
        "Nada de formulários complicados. Você conversa diretamente com nossa equipe, tira dúvidas e escolhe o horário que melhor se adapta à sua rotina.",
    },
  ] as Differential[],

  gallery: [
    {
      id: "g1",
      alt: "Ateliê do Espaço Bella Estética em Itatiba",
      size: "tall",
      imageUrl: "/images/hero-main.jpg",
      title: "Atendimento Personalizado",
      category: "Nossa Filosofia",
    },
    {
      id: "g2",
      alt: "Cabine de tratamento facial e relaxamento",
      size: "wide",
      imageUrl: "/images/about-clinic.jpg",
      title: "Ambiente Exclusivo & Acolhedor",
      category: "O Espaço",
    },
    {
      id: "g3",
      alt: "Design de sobrancelhas com acabamento natural",
      size: "square",
      imageUrl: "/images/service-eyebrows.jpg",
      title: "Visagismo de Sobrancelhas",
      category: "Olhar",
    },
    {
      id: "g4",
      alt: "Cuidado de manicure e esmaltação sofisticada",
      size: "square",
      imageUrl: "/images/service-nails.jpg",
      title: "Esmaltação & Cuidados em Gel",
      category: "Nails Care",
    },
    {
      id: "g5",
      alt: "Tratamento facial com dermocosméticos de luxo",
      size: "tall",
      imageUrl: "/images/service-skincare.jpg",
      title: "Detox & Renovação Facial",
      category: "Skincare",
    },
    {
      id: "g6",
      alt: "Sessão de massagem relaxante com pedras quentes",
      size: "wide",
      imageUrl: "/images/service-massage.jpg",
      title: "Terapia Corporal & Spa",
      category: "Bem-Estar",
    },
  ] as GalleryImage[],

  seo: {
    title: "Espaço Bella Estética | Clínica de Estética e Beleza em Itatiba/SP",
    description:
      "Espaço Bella Estética em Itatiba/SP. Design de sobrancelhas, limpeza de pele profunda, manicure em gel e massagem relaxante. Agende seu horário pelo WhatsApp com atendimento exclusivo.",
  },
};

export type Company = typeof company;
