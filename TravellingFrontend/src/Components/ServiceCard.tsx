import "../styles/components/service-card.scss";
import cardImage from "./1.png";
import icon_price from '../assets/Components/service-cards/icon_price.png'
import icon_location from '../assets/Components/service-cards/icon_location.png'
import icon_support from '../assets/Components/service-cards/icon_support.png'
import icon_driver from '../assets/Components/service-cards/icon_driver.png'

const ServiceCard = () => {
  return (
    <>
      <div className="service-card">
        <div>
          <img src={cardImage} alt='service photo'/>
        </div>
        <div className="service-description">
          <h2 style={{fontSize: 21, textAlign: 'center'}}>Transfer</h2>
          <div className="price daily-price">
            10
          </div>
          <ul className="service-description-items">
            <li><i className="fa fa-angle-double-right" aria-hidden="true"></i>Personal driver</li>
            <li><i className="fa fa-angle-double-right" aria-hidden="true"></i>Wherever you want</li>
            <li><i className="fa fa-angle-double-right" aria-hidden="true"></i>At the best price</li>
            <li><i className="fa fa-angle-double-right" aria-hidden="true"></i>Guaranteed support</li>
          </ul>
          <div>
            <button className="button-orange">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
