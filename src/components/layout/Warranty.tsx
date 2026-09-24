import '../../styles/warranty.css';

function Warranty() {
  return (
    <div className="warranty-section">
      <div className="shield-circle">
        <div className="icon-div">
          <img src="/src/assets/icons/shield.svg" alt="shield" />
        </div>
      </div>
      <h1 className='warranty-title'>12-Month Factory Warranty</h1>
      <h3 className='warranty-hint'>Extended warranty options available at checkout</h3>
    </div>
  );
}

export default Warranty;
