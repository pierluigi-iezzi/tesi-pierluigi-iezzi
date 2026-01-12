import './parola-del-giorno.css';

export default function ParolaDelGiorno() {
  return (
    <div id="card-container">
      <div id="card" className="rounded-1 p-2">
        <div className="pt-2 pb-1 testo-chiaro">Parola del giorno</div>
        <div className="pt-1 pb-0 testo-scuro" style={{ fontSize: '1.3rem' }}>
          a • gro • e • co • lo • gì • a
        </div>
        <div className="pt-0 pb-2 testo-chiaro">sostantivo</div>
        <div className="pt-2 pb-1 testo-scuro">
          applicazione dei principi ecologici alla gestione di agrosistemi
        </div>

        <div
          className="pt-3 pb-1 testo-chiaro fst-italic"
          style={{ fontSize: '0.7rem' }}
        >
          «una scienza, un movimento e una pratica»
          <p>Alexander Wezel</p>
        </div>
      </div>
    </div>
  );
}
