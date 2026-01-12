import { Chrono } from 'react-chrono';
import timeline from './timeline.json';
import './timeline.css';

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
      mode="HORIZONTAL"
      showAllCardsHorizontal
      itemWidth={70}
      disableToolbar
      cardWidth={'200'}
      parseDetailsAsHTML
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
