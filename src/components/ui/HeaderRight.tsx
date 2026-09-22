import { CounterCart } from './CounterCart';

export function HeaderRight() {
  return (
    <div className="header-right-box">
      <div>
        <img src="/src/assets/search.svg" alt="search" />
      </div>
      <div className="cart-box">
        <a href="#">
          <img src="src/assets/shopping-cart.svg" alt="cart" />
        </a>
        <CounterCart />
      </div>
    </div>
  );
}
