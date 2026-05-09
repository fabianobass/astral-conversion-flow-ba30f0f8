import rinnaiDigital from "@/assets/trabalhos/instalacao-rinnai-digital-agua-verde.jpg";
import rinnaiAnalogico from "@/assets/trabalhos/instalacao-rinnai-analogico-batel.jpg";
import komecoDigital from "@/assets/trabalhos/instalacao-komeco-digital-bigorrilho.jpg";
import bosch from "@/assets/trabalhos/instalacao-bosch-cabral.jpg";
import komeco15fi from "@/assets/trabalhos/instalacao-komeco-15fi-juveve.jpg";
import rinnaiMerces from "@/assets/trabalhos/instalacao-rinnai-digital-merces.jpg";
import mTrocador from "@/assets/trabalhos/manutencao/manutencao-trocador-calor-portao.jpg";
import mValvula from "@/assets/trabalhos/manutencao/manutencao-valvula-gas-merces.jpg";
import mRinnai304 from "@/assets/trabalhos/manutencao/manutencao-rinnai-reu304-ventilador-cabral.jpg";
import mControle from "@/assets/trabalhos/manutencao/manutencao-controle-digital-juveve.jpg";
import mQueimador from "@/assets/trabalhos/manutencao/manutencao-queimador-bigorrilho.jpg";
import mAberto from "@/assets/trabalhos/manutencao/manutencao-aquecedor-aberto-batel.jpg";
import mCobre from "@/assets/trabalhos/manutencao/manutencao-trocador-cobre-cristo-rei.jpg";
import mRevisao from "@/assets/trabalhos/manutencao/manutencao-revisao-completa-santa-felicidade.jpg";
import mRinnai1500 from "@/assets/trabalhos/manutencao/manutencao-rinnai-reu1500-agua-verde.jpg";
import type { WorkPhoto } from "@/components/sections/RealWorkGallery";

export const installPhotos: WorkPhoto[] = [
  {
    src: rinnaiDigital,
    alt: "Instalação de aquecedor a gás Rinnai digital em Curitiba — bairro Água Verde, feita pela Astral Gás",
    caption: "Aquecedor Rinnai Digital instalado",
    neighborhood: "Água Verde, Curitiba",
  },
  {
    src: bosch,
    alt: "Instalação de aquecedor a gás Bosch com controle remoto em Curitiba — bairro Cabral, feita pela Astral Gás",
    caption: "Bosch com controle remoto digital",
    neighborhood: "Cabral, Curitiba",
  },
  {
    src: komecoDigital,
    alt: "Instalação de aquecedor a gás Komeco com display digital em Curitiba — bairro Bigorrilho, feita pela Astral Gás",
    caption: "Komeco Digital — acabamento espelhado",
    neighborhood: "Bigorrilho, Curitiba",
  },
  {
    src: rinnaiAnalogico,
    alt: "Instalação de aquecedor a gás Rinnai em Curitiba — bairro Batel, feita pela Astral Gás",
    caption: "Rinnai instalado em apartamento",
    neighborhood: "Batel, Curitiba",
  },
  {
    src: komeco15fi,
    alt: "Instalação de aquecedor a gás Komeco 15FI em Curitiba — bairro Juvevê, feita pela Astral Gás",
    caption: "Komeco 15FI — instalação completa",
    neighborhood: "Juvevê, Curitiba",
  },
];
// rinnaiMerces reservado para uso futuro
void rinnaiMerces;

export const maintenancePhotos: WorkPhoto[] = [
  {
    src: mTrocador,
    alt: "Manutenção de aquecedor a gás em Curitiba — limpeza do trocador de calor no bairro Portão, feita pela Astral Gás",
    caption: "Limpeza do trocador de calor",
    neighborhood: "Portão, Curitiba",
  },
  {
    src: mValvula,
    alt: "Manutenção de aquecedor a gás em Curitiba — revisão da válvula de gás no bairro Mercês, feita pela Astral Gás",
    caption: "Revisão da válvula de gás",
    neighborhood: "Mercês, Curitiba",
  },
  {
    src: mRinnai304,
    alt: "Manutenção de aquecedor a gás Rinnai REU-304 em Curitiba — troca de ventilador no bairro Cabral, feita pela Astral Gás",
    caption: "Rinnai REU-304 — troca do ventilador",
    neighborhood: "Cabral, Curitiba",
  },
  {
    src: mControle,
    alt: "Manutenção de aquecedor a gás em Curitiba — diagnóstico no controle digital no bairro Juvevê, feita pela Astral Gás",
    caption: "Diagnóstico no controle digital",
    neighborhood: "Juvevê, Curitiba",
  },
  {
    src: mQueimador,
    alt: "Manutenção de aquecedor a gás em Curitiba — limpeza do queimador no bairro Bigorrilho, feita pela Astral Gás",
    caption: "Limpeza completa do queimador",
    neighborhood: "Bigorrilho, Curitiba",
  },
  {
    src: mAberto,
    alt: "Manutenção corretiva de aquecedor a gás em Curitiba — bairro Batel, feita pela Astral Gás",
    caption: "Manutenção corretiva completa",
    neighborhood: "Batel, Curitiba",
  },
  {
    src: mCobre,
    alt: "Manutenção de aquecedor a gás em Curitiba — revisão do trocador de cobre no bairro Cristo Rei, feita pela Astral Gás",
    caption: "Revisão do trocador de cobre",
    neighborhood: "Cristo Rei, Curitiba",
  },
  {
    src: mRevisao,
    alt: "Revisão completa de aquecedor a gás em Curitiba — bairro Santa Felicidade, feita pela Astral Gás",
    caption: "Revisão preventiva completa",
    neighborhood: "Santa Felicidade, Curitiba",
  },
  {
    src: mRinnai1500,
    alt: "Manutenção de aquecedor a gás Rinnai REU-1500 em Curitiba — bairro Água Verde, feita pela Astral Gás",
    caption: "Rinnai REU-1500 — manutenção interna",
    neighborhood: "Água Verde, Curitiba",
  },
];

// Aguardando fotos reais específicas de cada serviço.
export const heatPumpPhotos: WorkPhoto[] = [];
export const pressurizerPhotos: WorkPhoto[] = [];
