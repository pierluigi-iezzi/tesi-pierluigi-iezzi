import { ParallaxBanner } from 'react-scroll-parallax';
import './banner.css';
import bannerLogo from '/banner.jpg'

export default function Banner() {
  /*
    Qui l'effetto Parallax è un po' più complesso, composto da 3 layer
    1. Il background, con un fade out, zoom out e uno spostamento in basso
    2. Il titolo, con zoom in e spostamento in basso
    3. Una sfumatura sul nero
  */
  const background = {
    image: bannerLogo,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="headset">
        <h1 className="titolo">Caviro</h1>
        <h2 className="sottotitolo">L'Agricoltura che piace alla Terra</h2>
      </div>
    ),
  };

  const gradientOverlay = {
    opacity: [0, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };
  return (
    <ParallaxBanner
      layers={[background, headline, gradientOverlay]}
      className="full"
    />
  );
}
