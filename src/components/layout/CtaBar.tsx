import { Button } from '../ui/Button';
import '../../styles/ctaBar.css';

function CtaBar() {
  return (
    <div className="sticky-section">
      <div className="sticky-left">
        <h2 className="sticky-product">Yoga 9i 2-in-1</h2>
        <h2 className="sticky-price">$1,274.99</h2>
      </div>
        <Button text='Buy Now' classname='sticky-button'/>
    </div>
  );
}

export default CtaBar;
