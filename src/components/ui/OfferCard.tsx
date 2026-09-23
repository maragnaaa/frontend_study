import { Button } from './Button';

export function OfferCard() {
  return (
    <div className="offer-card-box">
      <div className="price-box">
        <div className="original-price-row">
          <h3 className="original-price">$1,499.99</h3>
          <div className="discount">
            <h3 className="discount-text">15% OFF</h3>
          </div>
        </div>
        <h1 className="new-price">$1,274.99</h1>
        <h4 className="interest-free">or 12x of $99.90 interest-free</h4>
      </div>
      <div className="line" />

      <div className="scarcity-block">
        <div className="units-left">
          <img src="/src/assets/icons/ellipse.svg" alt="ellipse" />
          <p className="units-counter"> Only 6 units left</p>
        </div>
        <div className="countdown">
          <img src="/src/assets/icons/clock.svg" alt="clock" />
          <p className="clock">02:14:37</p>
        </div>
      </div>
      <Button text="Buy Now" classname="button-cta" />
      <p className="week-trial">7-day trial or your money back</p>
      <div className="compatibility-badges">
        <h3 className="h3-title">SUPPORTED TECHNOLOGY</h3>
        <div className="badges-row">
          <div className="row">
            <p className="compatibilities">Windows 11</p>
          </div>
          <div className="row">
            <p className="compatibilities">USB-C</p>
          </div>
          <div className="row">
            <p className="compatibilities">Thunderbolt 4</p>
          </div>
        </div>
      </div>
      <div className='security-badges'>
        <h3 className="h3-title">COMPLIANCE & SAFETY</h3>
        <div className="security-rows">
          <p className='row-security'>• SSL Certified</p>
          <p className='row-security'>• Anatel</p>
          <p className='row-security'>• CE Approved</p>
          <p className='row-security'>• FCC</p>
        </div>
      </div>
    </div>
  );
}
