import { FooterColumn } from '../ui/FooterColumn';
import { Badge } from '../ui/Badge';
import '../../styles/footer.css';

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-columns">
        <div className="footer-column-1">
          <a href="#">
            <img src="/src/assets/icons/brand-logo.svg" alt="lenovo" />
          </a>
          <div className="footer-column-div-1">
            <h2 className="footer-column-title">Support & Live Chat</h2>
            <p className="footer-column-text">Mon-Fri 8am-8pm EST</p>
          </div>
        </div>
        <FooterColumn
          columnClass="footer-column-2"
          titleClass="footer-column-title"
          columnTitle="Policy Info"
          optionsDivClass="footer-column-div-2"
          options={['Warranty & returns', 'Sustainability note', 'Trade-In program']}
          textClass="footer-column-text"
        />
        <FooterColumn
          columnClass="footer-column-2"
          titleClass="footer-column-title"
          columnTitle="Product Lines"
          optionsDivClass="footer-column-div-2"
          options={['Yoga Convertible', 'ThinkPad Laptops', 'ThinkPad Laptops', 'ThinkBook Series']}
          textClass="footer-column-text"
        />
        <FooterColumn
          columnClass="footer-column-2"
          titleClass="footer-column-title"
          columnTitle="Compliance"
          optionsDivClass="footer-column-div-1"
          options={['SSL Secured Connection', 'Anatel homologated', 'CE & FCC Compliance Certified']}
          textClass="footer-column-text"
        />
      </div>
      <div className="line" />
      <div className='footer-bottom'>
        <div className='payments'>
            <Badge text='Credit' classname='badges' />
            <Badge text='Debit' classname='badges' />
            <Badge text='PayPal' classname='badges' />
            <Badge text='Apple Pay' classname='badges' />
        </div>
        <div className='copyrights'>
            <p className='legal-links'>© 2026 Lenovo. All rights reserved.</p>
            <a href="#" className='legal-links'>Privacy Policy</a>
            <a href="#" className='legal-links'>Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
