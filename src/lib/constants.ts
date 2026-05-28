export const WHATSAPP_URL =
  "https://wa.me/351912307599?text=" +
  encodeURIComponent(
    "Olá JN Ar Condicionado, gostaria de pedir um orçamento. "
  );

export const PHONE_DISPLAY = "+351 912 307 599";
export const PHONE_HREF = "tel:+351912307599";
export const EMAIL = "jnarcondicionadopt@gmail.com";

export const COMPANY = {
  name: "JN AR CONDICIONADO",
  short: "JN",
  tagline: "Climatização e refrigeração com certificação europeia",
  fullName: "JN Ar Condicionado",
  region: "Vagos · Aveiro · Centro",
  email: EMAIL,
  phone: PHONE_DISPLAY,
  address: "Rua Comandante Rocha e Cunha nº 292, 2º I, 3840-415 Vagos",
} as const;

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const SERVICES = [
  {
    title: "Instalação de Ar Condicionado",
    desc: "Sistemas residenciais e comerciais. Mono e multi-split, alta eficiência, instalação certificada por técnico GFEE.",
    icon: "snowflake",
  },
  {
    title: "Bombas de Calor",
    desc: "AQS e climatização eficiente. Soluções dimensionadas para reduzir factura energética até 70%.",
    icon: "heat",
  },
  {
    title: "Manutenção & Assistência",
    desc: "Contratos preventivos e intervenções rápidas. Garantimos performance, higiene e longevidade do equipamento.",
    icon: "wrench",
  },
  {
    title: "Refrigeração Comercial",
    desc: "Frigoríficos, arcas, vitrinas e câmaras frigoríficas. Reparação especializada para HORECA e retalho.",
    icon: "fridge",
  },
  {
    title: "Máquinas de Gelo",
    desc: "Instalação, manutenção e reparação de produtores de gelo para bares, restaurantes e supermercados.",
    icon: "ice",
  },
  {
    title: "Carregamentos de Gás",
    desc: "Carga e recolha de gases fluorados com registo legal. Conformidade total com o Regulamento (UE) 517/2014.",
    icon: "gas",
  },
] as const;

export const CERTIFICATIONS = [
  {
    code: "GFEE",
    title: "Gases Fluorados",
    desc: "Técnico certificado em manuseamento de Gases Fluorados com Efeito de Estufa.",
  },
  {
    code: "CAT I",
    title: "AIPOR",
    desc: "Categoria I — habilitação máxima para intervenções em sistemas de refrigeração e AC.",
  },
  {
    code: "APCER",
    title: "ET 3014",
    desc: "Empresa certificada pela APCER segundo a especificação técnica APCER 3014.",
  },
  {
    code: "UE 517/2014",
    title: "Conformidade",
    desc: "Operações em conformidade com o Regulamento (UE) 517/2014 e Decreto-Lei nº 145/2017.",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Visita ou avaliação remota. Medição de áreas, exposição solar e necessidade térmica real.",
  },
  {
    step: "02",
    title: "Proposta técnica",
    desc: "Orçamento detalhado com equipamento adequado, prazos e garantia. Sem custos escondidos.",
  },
  {
    step: "03",
    title: "Instalação certificada",
    desc: "Execução por técnico GFEE. Furos limpos, tubagem isolada, vácuo completo e teste de estanquidade.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    desc: "Registo do equipamento, fichas de intervenção e plano de manutenção preventiva opcional.",
  },
] as const;
