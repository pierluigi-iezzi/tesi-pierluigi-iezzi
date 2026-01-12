import Banner from './components/banner';
import CardColture from './components/card-colture';
import EconomiaCircolare from './components/economia-circolare';
import Footer from './components/footer';
import Mission from './components/mission';
import Timeline from './components/timeline';
import Numeri from './components/numeri';
import Conclusione from './components/conclusione';

export default function App() {
  return (
    <>
      <Banner />

      <div id="body">
        <div className="dark-bg p-4 full center">
          <EconomiaCircolare />
        </div>

        <div className="light-bg p-4 full">
          <Mission />
        </div>

        <div className="dark-bg p-4 full">
          <Numeri />
        </div>

        <div className="light-bg py-4">
          <Timeline />
        </div>

        <div className="dark-bg p-4 full center">
          <Conclusione />
        </div>

        <div className="light-bg py-4 full center">
          <CardColture />
        </div>

        <Footer />
      </div>
    </>
  );
}
