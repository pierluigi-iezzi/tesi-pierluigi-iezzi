const lista = [
  { title: '100%', text: 'di autosufficienza energetica' },
  { title: '82.000', text: 'tonnellate di saving emissivo di CO2' },
  { title: '543 milioni', text: "di litri d'acqua recuperati" },
  { title: '<40%', text: "d'acqua prelevata da falda" },
  {
    title: '135.000',
    text: 'tonnellate di fertilizzanti naturali',
  },
  { title: '99%', text: 'di scarti recuperati' },
  { title: '7 milioni', text: 'di famiglie consumatrici' },
  { title: '22.000', text: 'ore di formazione erogate' },
  { title: '1 milione', text: 'di analisi di laboratorio' },
  { title: '15.000', text: 'soci viticoltori' },
  { title: '50', text: 'enologi' },
  { title: '175 milioni', text: 'di litri di vino prodotti' },
  { title: '8', text: 'certificazioni etiche e di sicurezza sul lavoro' },
  { title: '385 milioni', text: 'euro di ricavo' },
  { title: '>80', text: 'paesi di destinazione dei prodotti' },
  { title: '561', text: 'dipendenti' },
  { title: '1°', text: 'in Italia per quota di mercato a volume' },
  { title: '34.000', text: 'ettari di vigne dei soci' },
];

export default function Numeri() {
  return (
    <div>
      <h2 className="text-center pt-5 mb-4">I nostri numeri</h2>
      <div className="row text-center g-4">
        {lista.map((el) => {
          return (
            <div key={el.title} className="col">
              <div
                className="rounded-circle light-bg p-4 center flex-column"
                style={{ width: 150, height: 150 }}
              >
                <h4>{el.title}</h4>
                <p>{el.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
