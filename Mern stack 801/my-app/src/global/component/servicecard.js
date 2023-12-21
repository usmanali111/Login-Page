import React from 'react'
import ProductImg from '../../assets/images/home/service_card_oe.jpg'

const Servicecard = ({img, title}) => {
  return (
    <div className="product_card">
    <div className="Product_Img">
      <img src={img ? img : ProductImg} alt="" />
      <div className="over_lay">
        <div className="text_section">
          <h2>
            {title ? title : "Ac Cleaning"}
            
          </h2>
          <button>
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Servicecard
