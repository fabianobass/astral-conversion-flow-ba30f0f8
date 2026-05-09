import heroBanho from "@/assets/hero-banho.jpg";
import heroAquecedor from "@/assets/hero-aquecedor.jpg";
import heroManutencao from "@/assets/hero-manutencao.jpg";
import type { WorkPhoto } from "@/components/sections/RealWorkGallery";

// PLACEHOLDERS — substituir pelas fotos reais quando enviadas.
// Manter alt-text descritivo: "[Serviço] [marca/modelo] em Curitiba — [bairro]"

export const installPhotos: WorkPhoto[] = [
  {
    src: heroBanho,
    alt: "Instalação de aquecedor a gás Rinnai em Curitiba — Água Verde",
    caption: "Instalação Rinnai 20L Digital",
    neighborhood: "Água Verde, Curitiba",
  },
  {
    src: heroAquecedor,
    alt: "Aquecedor a gás Komeco instalado em apartamento em Curitiba — Batel",
    caption: "Aquecedor Komeco 15L",
    neighborhood: "Batel, Curitiba",
  },
  {
    src: heroManutencao,
    alt: "Instalação de aquecedor Bosch com tubulação nova em Curitiba — Bigorrilho",
    caption: "Instalação Bosch + tubulação nova",
    neighborhood: "Bigorrilho, Curitiba",
  },
  {
    src: heroBanho,
    alt: "Aquecedor a gás Lorenzetti instalado em Curitiba — Cabral",
    caption: "Lorenzetti 18L instalado",
    neighborhood: "Cabral, Curitiba",
  },
  {
    src: heroAquecedor,
    alt: "Instalação certificada de aquecedor a gás em Curitiba — Champagnat",
    caption: "Instalação certificada e segura",
    neighborhood: "Champagnat, Curitiba",
  },
  {
    src: heroManutencao,
    alt: "Equipe Astral Gás finalizando instalação em Curitiba — Juvevê",
    caption: "Acabamento limpo e organizado",
    neighborhood: "Juvevê, Curitiba",
  },
];

export const maintenancePhotos: WorkPhoto[] = [
  {
    src: heroManutencao,
    alt: "Manutenção de aquecedor a gás Rinnai em Curitiba — Centro",
    caption: "Manutenção corretiva Rinnai",
    neighborhood: "Centro, Curitiba",
  },
  {
    src: heroAquecedor,
    alt: "Conserto de aquecedor Bosch com peças originais em Curitiba — Batel",
    caption: "Conserto Bosch com peça original",
    neighborhood: "Batel, Curitiba",
  },
  {
    src: heroBanho,
    alt: "Limpeza interna de aquecedor a gás em Curitiba — Mercês",
    caption: "Limpeza interna completa",
    neighborhood: "Mercês, Curitiba",
  },
  {
    src: heroManutencao,
    alt: "Troca de placa eletrônica de aquecedor em Curitiba — Portão",
    caption: "Troca de placa eletrônica",
    neighborhood: "Portão, Curitiba",
  },
  {
    src: heroAquecedor,
    alt: "Manutenção preventiva de aquecedor Komeco em Curitiba — Santa Felicidade",
    caption: "Preventiva Komeco",
    neighborhood: "Santa Felicidade, Curitiba",
  },
  {
    src: heroBanho,
    alt: "Diagnóstico técnico de aquecedor a gás em Curitiba — Cristo Rei",
    caption: "Diagnóstico técnico completo",
    neighborhood: "Cristo Rei, Curitiba",
  },
];
