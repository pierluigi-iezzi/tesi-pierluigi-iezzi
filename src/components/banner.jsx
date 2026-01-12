import { ParallaxBanner } from 'react-scroll-parallax';
import './banner.css';

export default function Banner() {
  const background = {
    image:
      'https://www.cantinedidolianova.it/wp-content/uploads/2021/11/quanto-rende-un-ettaro-di-vigneto.jpg',
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
