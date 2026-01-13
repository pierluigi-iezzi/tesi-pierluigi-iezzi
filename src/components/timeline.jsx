/*
  Importo il componente esportato da react-chrono, un file di
  styling e un file json contenente un array di oggetti
  contenenti l’anno e un elenco delle certificazioni ottenute
  nell’anno in questione
*/

import { Chrono } from 'react-chrono';
import timeline from './timeline.json';
import './timeline.css';

/*
  Per ogni elemento dell’array JSON importato, produco un elemento
  Nel formato richiesto da react-chrono. Salvo il tutto dentro
  l’array items
*/

const items = timeline.map((el) => ({
  title: el.anno,
  cardTitle: el.anno,
  items: el.certificazioni.map((certificazione) => ({
    cardTitle: certificazione.certificazione,
    cardSubtitle: certificazione.tag,
    cardDetailedText:
      certificazione.azienda + '<br> (' + certificazione.sede + ')',
  })),
}));

export default function Timeline() {
  return (
    <Chrono
      items={items}
      mode="HORIZONTAL" // La timeline può essere mostrata verticalmente, più adatta a dispositivi mobile 
      showAllCardsHorizontal // Mostra tutti gli elementi della timeline invece che solo l’anno selezionato
      itemWidth={70}
      disableToolbar // Disabilita una toolbar che ho reputato superflua
      cardWidth={'200'}
      parseDetailsAsHTML // Serve ad interpretare i <br> utilizzati precedentemente
      timelinePointShape="diamond"
      theme={{
        primary: '#7e133e' /* Linea */,
        secondary: '#ffffff' /* Nodo selezionato */,
        titleColor: '#7e133e' /* Colore testo nodi */,
        titleColorActive: '#7e133e' /* Colore testo nodo selezionato */,
        cardBgColor: '#ffffff',
        cardTitleColor: '#ffffff',
        cardSubtitleColor: '#ffffff',
        cardDetailsBackGround: '#7e133e',
        nestedCardBgColor: '#7e133e',
        timelineContentDetailsColor: '#ff0000',
      }}
    />
  );
}
