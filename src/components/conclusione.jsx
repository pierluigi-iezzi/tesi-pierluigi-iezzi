import { useParallax } from 'react-scroll-parallax';
import ParolaDelGiorno from './parola-del-giorno';

export default function Conclusione() {
  const card = useParallax({
    onProgressChange: (progress) => {
      if (card.ref.current) {
        // salvo il progresso in variabili css
        card.ref.current.style.setProperty('--progress', progress * 2);
      }
    },
  });
  const testo = useParallax({
    onProgressChange: (progress) => {
      if (testo.ref.current) {
        // salvo il progresso in variabili css
        testo.ref.current.style.setProperty('--progress', progress * 3);
      }
    },
  });

  return (
    <div className="row center h-100">
      <div
        ref={card.ref}
        id="conclusione-paroladelgiorno"
        className="col-xl-4 col-lg-5 col-md-6 col-12"
      >
        <ParolaDelGiorno />
      </div>
      <div
        ref={testo.ref}
        className="col-xl-8 col-lg-7 col-md-6 col-12"
        id="conclusione-testo"
        style={{ fontSize: '1.2rem' }}
      >
        <p className="pb-1 pb-sm-4">
          385 milioni di euro di ricavi, oltre 34 mila ettari di vigne dei soci,
          più di 80 mercati esteri raggiunti e primi in Italia per quota di
          mercato.
        </p>
        <p className="pb-1 pb-sm-4">
          La filosofia Caviro tuttavia, in linea col pensiero della Comunità
          Europea, non tiene in considerazione solo questi indicatori
          economico-finanziari, ma anche e soprattutto l'impatto sul territorio.
        </p>

        <p className="pb-1 pb-sm-4">
          Il nostro Bilancio di Sostenibilità evidenza i risultati ottenuti, i
          progetti in corso e le prospettive future, per continuare a essere
          sostenibili dal punto di vista economico, ambientale e sociale.
        </p>
        <a
          className="btn"
          href="https://www.caviro.com/wp-content/uploads/2025/04/BdS_CAVIRO-2024_WEB_D-min.pdf"
          target="_blank"
        >
          Scarica il bilancio
        </a>
      </div>
    </div>
  );
}
