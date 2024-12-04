import './BottomFooter.css'
import bikewale from '../../../assets/bikewale.svg'
import cartrade_tech from '../../../assets/cartrade_tech.svg'
import cartrade from '../../../assets/cartrade.svg'
import carwale from '../../../assets/carwale.svg'
import olx from '../../../assets/olx.svg'
import mobility from '../../../assets/mobility.svg'

const BottomFooter = () => {
  return (
    <div className='footer-container'>
      <div className='bottomfooter'>
        <img src={cartrade_tech} alt="CarTrade Tech" />
        <div className="divider"></div>
        <img src={olx} alt="OLX" />
        <img src={carwale} alt="CarWale" />
        <img src={bikewale} alt="BikeWale" />
        <img src={cartrade} alt="CarTrade" />
        <img src={mobility} alt="Mobility Outlook" />
      </div>
      <div className="footer-text">
        <p>Help - Sitemap</p>
        <p>All rights reserved 2006-2024 OLX</p>
      </div>
    </div>
  )
}

export default BottomFooter
