import React from 'react'
import FeaturesImg from '../../../assets/images/home/after_banner/dollar.svg'
import ImgSection from '../../../assets/images/home/after_banner/start.svg'
import FeatureImg from '../../../assets/images/home/after_banner/users.svg'

const Ourfeatures = () => {
    return ( 
    <section className="features_div">
    <div className="feature_card">
      <div className="Features_Img">
        <img src={FeaturesImg} alt="" />
      </div>
      <p>
        24/7 Service
      </p>
    </div>
    <div className="feature_card">
      <div className="Img_Section">
        <img src={ImgSection} alt="" />
      </div>
      <p>
        Reasonable Rates
      </p>
    </div>
    <div className="feature_card">
      <div className="Feature_Img">
        <img src={FeatureImg} alt="" />
      </div>
      <p>
        Experienced Team
      </p>
    </div>
  </section>
   )
}

export default Ourfeatures
