import { Parallax } from 'react-scroll-parallax';

const lista = [
  {
    title: 'Agricoltura Bio',
    text: 'Utilizziamo metodi naturali che rispettano la biodiversità del territorio',
    translateYStart: -120,
    translateYEnd: 10,
  },
  {
    title: 'Energia Verde',
    text: 'Impianti alimentati da energie rinnovabili per un futuro più pulito',
    translateYStart: -160,
    translateYEnd: 5,
  },
  {
    title: 'Prodotti di Qualità',
    text: 'Olio e vino prodotti con cura, passione e rispetto per la natura',
    translateYStart: -130,
    translateYEnd: 0,
  },
  {
    title: 'Sostenibilità Sociale',
    text: 'Da oltre 50 anni rappresentiamo una garanzia per le migliaia di famiglie che conferiscono',
    translateYStart: -160,
    translateYEnd: 45,
  },
  {
    title: 'Economia Circolare',
    text: 'Valorizziamo ogni scarto agricolo trasformandolo in prodotti nobili, bioenergia e fertilizzanti naturali',
    translateYStart: -120,
    translateYEnd: 60,
  },
  {
    title: 'Impronta Idrica',
    text: "Recuperiamo oltre 543 milioni di litri d'acqua all'anno e preleviamo da falda il 40% del fabbisogno totale",
    translateYStart: -90,
    translateYEnd: 50,
  },
];

export default function Mission() {
  return (
    <div>
      <Parallax translateY={[-40, 0]}>
        <h2 className="text-center pt-5 mb-4">La nostra Mission</h2>
      </Parallax>
      <div className="row text-center g-5 mt-5">
        {lista.map((el) => (
          <Parallax
            className="col-4"
            key={el.title}
            translateY={[el.translateYStart, el.translateYEnd]}
          >
            <h4>{el.title}</h4>
            <p>{el.text}</p>
          </Parallax>
        ))}
      </div>
    </div>
  );
}
