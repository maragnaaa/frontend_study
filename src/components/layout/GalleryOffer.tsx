import { Carousel } from '../ui/Carousel';
import { ColorSwatch } from '../ui/ColorSwatch';
import { OfferCard } from '../ui/OfferCard';
import '../../styles/galleryOffer.css';

function GalleryOffer() {
  return (
    <div className="gallery-offer-section">
      <div className="gallery-box">
        <div className="gallery-header">
          <h1 className="gallery-title">Lenovo Yoga 9i 2-in-1</h1>
          <h3 className="gallery-description">Versatility meets performance</h3>
        </div>
        <div className="main-image" />
        <div>
          <Carousel />
        </div>
        <div>
          <ColorSwatch />
        </div>
      </div>
      <div>
        <OfferCard />
      </div>
    </div>
  );
}

export default GalleryOffer;
