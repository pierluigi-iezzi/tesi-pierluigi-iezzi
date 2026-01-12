import { useState, useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';
import './economia-circolare.css';

const sfere = [
  {
    label: 'Vigna',
    tooltip:
      '34.100 ettari vitati. 8 regioni italiane. Una ricchezza di terreni unici per caratteristiche di esposizione, clima e metodo di coltivazione. Ogni vigna esprime il suo massimo valore e racconta una storia diversa. Tutto quello che nasce dalla terra viene valorizzato dal nostro circolo virtuoso, a partire dal grappolo d’uva fino al residuo della potatura.',
    background: 'img',
  },
  {
    label: 'Uva',
    tooltip:
      'L’esperienza, la passione e la cura di oltre 14.900 viticoltori al servizio del nostro bene più prezioso: l’uva che a ogni vendemmia viene conferita alle cantine sociali di riferimento, certificando l’appartenenza alla filiera tracciata ed integrata del Gruppo Caviro.',
    background: 'img',
  },
  {
    label: 'Vino',
    tooltip:
      'Il frutto paziente di un anno di lavoro, seguito passo dopo passo da 24 cantine socie ed oltre 50 enologi, che condividono lo stesso obiettivo: garantire i massimi standard di qualità e offrire una vasta gamma di tipologie di vino, uniche, distintive e pluripremiate nel panorama italiano e internazionale.',
    background: 'img',
  },
  {
    label: 'Derivati filiera',
    tooltip:
      'Niente va perso durante la lavorazione del vino. Otteniamo e raccogliamo tonnellate di materia prima, come feccia, vinaccia e vinaccioli: quello che resta delle uve è pronto a trasformarsi in ingredienti e prodotti ad alto valore aggiunto.',
    background: 'img',
  },
  {
    label: 'Prodotti nobili',
    tooltip:
      'Competenze tecnologiche e di processo ci permettono di ottenere alcoli ed altri estratti, così come acido tartarico, enocianina e polifenoli. Nuova materia prima, di grandissima rilevanza per aziende agronomiche, industriali, farmaceutiche, alimentari e beverage di tutto il mondo, cui si aggiunge la valorizzazione dei mosti conferiti dalla filiera.',
    background: 'img',
  },
  {
    label: 'Scarti vegetali',
    tooltip:
      'Il cuore della nostra ecosostenibilità. Il segreto dell’autosufficienza energetica. La reputazione e l’eccellenza che i partner ci riconoscono. Dobbiamo tutto questo agli scarti vegetali: raccogliamo sfalci, potature e sovvalli dal territorio, indispensabili per produrre energia elettrica e termica.',
    background: 'img',
  },
  {
    label: 'Bioenergia',
    tooltip:
      'Digestione anaerobica, combinazione di parole che suona complessa ma, nelle realtà dei fatti, genera qualcosa di semplice e di grande utilità: attraverso i nostri impianti processiamo i sottoprodotti della vinificazione e le acque reflue conferite da aziende agro-alimentari italiane, generando biogas e biometano avanzato.',
    background: 'img',
  },
  {
    label: 'Fertilizzanti naturali',
    tooltip:
      'Gli ultimi elementi del nostro ciclo virtuoso sono i fanghi e gli ammendanti ottenuti dalla digestione anaerobica, da impiegare in agricoltura come fertilizzanti naturali. Dalla terra alla terra, torniamo ad arricchire con nuova sostanza organica i nostri vigneti. Ancora una volta ci impegniamo per una produzione in piena ottica di economia circolare: la meta del viaggio è sempre un nuovo inizio.',
    background: 'img',
  },
];

export default function EconomiaCircolare() {
  const [selectedSfera, setSelectedSfera] = useState(0);
  const [pause, setPause] = useState(false);

  const parallax = useParallax({ rotate: [-45, 0, 'easeOutQuad'] });

  useEffect(() => {
    if (!pause) {
      const prossimaSfera = selectedSfera < 7 ? selectedSfera + 1 : 0;

      const timer = setTimeout(() => setSelectedSfera(prossimaSfera), 3000);
      return () => clearTimeout(timer);
    }
  }, [selectedSfera, pause]);

  return (
    <div>
      <h2 className="text-center mb-4">La nostra Economia Circolare</h2>
      <div className="row">
        <ul
          id="contenitore-economia-circolare"
          className="col-md-12 col-lg-6"
          ref={parallax.ref}
        >
          {sfere.map((sfera, index) => (
            <li
              key={sfera.label}
              id={`sfera-${index + 1}`}
              onMouseOver={() => {
                setSelectedSfera(index);
                setPause(true);
              }}
              onMouseOut={() => setPause(false)}
              className={`p-4 ${
                selectedSfera == index ? 'sfera-zoommata' : ''
              }`}
              style={{
                backgroundImage: `url("/sfere/${index + 1}.jpg")`,
              }}
            />
          ))}
        </ul>
        <div id="testo-economia-circolare" className="col-md-12 col-lg-6 p-4">
          <h2 className="text-center mb-4">{sfere[selectedSfera].label}</h2>
          {sfere[selectedSfera].tooltip}
        </div>
      </div>
    </div>
  );
}
