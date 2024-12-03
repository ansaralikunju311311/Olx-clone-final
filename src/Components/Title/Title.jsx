import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Title.css'
const Title = () => {
  return (
    <div className='title'>
      <div className='category'><p>ALL CATEGORIES</p><FontAwesomeIcon icon={faAngleDown} className='dropdown-icon' />
</div>
      <ul>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Mobile Phones</li>
        <li>For Sale:Houses&Apartments</li>
        <li>Scooters</li>
        <li>Commercial&Other Vehicles</li>
        <li>For Rent:Houses&Apartments</li>
      </ul>
    </div>
  )
}

export default Title
