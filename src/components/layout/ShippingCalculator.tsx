import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import '../../styles/shippingCalculator.css';

function ShippingCalculator() {
  return (
    <div className="shipping-section">
      <h1 className="shipping-title">Shipping Estimator</h1>
      <div className='shipping-calculator'>
        <Input placeholder="10001" inputClass="shipping-input" />
        <Button text='Calculate' classname='shipping-button' />
      </div>
      <h3 className="shipping-hint">Enter your ZIP code to see delivery options</h3>
    </div>
  );
}

export default ShippingCalculator;
