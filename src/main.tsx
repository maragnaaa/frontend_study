import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HeaderBar from './components/layout/HeaderBar';
import GalleryOffer from './components/layout/GalleryOffer';
import './styles/global.css';
import './styles/fonts.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderBar />
    <GalleryOffer />
  </StrictMode>,
);
