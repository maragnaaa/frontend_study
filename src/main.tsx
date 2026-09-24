import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HeaderBar from './components/layout/HeaderBar';
import GalleryOffer from './components/layout/GalleryOffer';
import Reviews from './components/layout/Reviews';
import TechSpecs from './components/layout/TechSpecs';
import ShippingCalculator from './components/layout/ShippingCalculator';
import Warranty from './components/layout/Warranty';
import Footer from './components/layout/Footer';
import CtaBar from './components/layout/CtaBar';
import './styles/global.css';
import './styles/fonts.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderBar />
    <GalleryOffer />
    <Reviews />
    <TechSpecs />
    <ShippingCalculator />
    <Warranty />
    <Footer />
    <CtaBar />
  </StrictMode>,
);
