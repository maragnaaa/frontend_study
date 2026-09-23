import { CounterCart } from './CounterCart';

export function HeaderRight() {
  return (
    <div className="header-right-box">
      <div>
        <button type='button' className='search'>
          <img src="/src/assets/icons/search.svg" alt="search" />
        </button>
      </div>
      <div className="cart-box">
        <a href="#">
          <img src="src/assets/icons/shopping-cart.svg" alt="cart" />
        </a>
        <CounterCart />
      </div>
    </div>
  );
}
