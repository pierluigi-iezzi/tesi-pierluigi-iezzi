import oliveto from '/oliveto.jpg';
import vigneto from '/vigneto.jpg';

export default function CardColture() {
  return (
    <div className="row align-items-center my-5">
      <div className="col-6 text-center">
        <img src={oliveto} className="img-fluid rounded-4 shadow mb-3" />
        <h3>Oliveti biologici</h3>
        <p>
          Olio extravergine d'oliva, estratto a freddo da olive biologiche
          coltivate in modo sostenibile.
        </p>
        <a className="btn" href="about:blank" target="_blank">
          Scopri il nostro olio
        </a>
      </div>
      <div className="col-6">
        <img src={vigneto} className="img-fluid rounded-4 shadow mb-3" />
        <h3>Vigneti sostenibili</h3>
        <p>
          Vini dal gusto unico, realizzati con tecniche ecocompatibili e che
          valorizzano ogni risorsa della terra.
        </p>
        <a className="btn" href="about:blank" target="_blank">
          Scopri il nostro vino
        </a>
      </div>
    </div>
  );
}
