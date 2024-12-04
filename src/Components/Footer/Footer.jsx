
import './Footer.css';
import facebook_icon from '../../assets/facebook_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import twitter from '../../assets/twitter_icon.png';

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer_cat'>
        <h5>POPULAR LOCATIONS</h5>
        <ul className='footer_list'>
          <li>Kolkata</li>
          <li>Mumbai</li>
          <li>Chennai</li>
          <li>Pune</li>
        </ul>
      </div>

    
      <div className='footer_cat'>
        <h5>TRENDING LOCATIONS</h5>
        <ul className='footer_list'>
          <li>Bhubaneshwar</li>
          <li>Hyderabad</li>
          <li>Chandigarh</li>
          <li>Nashik</li>
        </ul>
      </div>

      
      <div className='footer_cat'>
        <h5>ABOUT US</h5>
        <ul className='footer_list'>
          <li>Tech@OLX</li>
        </ul>
      </div>

      <div className='footer_cat'>
        <h5>OLX</h5>
        <ul className='footer_list'>
          <li>Blog</li>
          <li>Help</li>
          <li>Sitemap</li>
          <li>Legal & Privacy Information</li>
          <li>Vulnerability Disclosure Program</li>
        </ul>
      </div>

     
      <div className='footer_cat'>
        <h5>FOLLOW US</h5>
        <div className='social_meida'>
          <img src={facebook_icon} alt="Facebook" />
          <img src={instagram_icon} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
