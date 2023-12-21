import React from 'react'
import BannerImg from '../../../assets/images/home/banner/banner.svg'

const Banner = () => {
  return (
    <div>
      <section className="banner_section">
        <div className="page-width">
          <div className="banner_inner">
            <div className="left_side">
              <span className="badge">Best in Dubai</span>
              <br />
              <span className="Welcome">Welcome To</span>
              <h2>Home <span>Comfort</span></h2>
              <p>
                Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with home comfort professional experts.
              </p>
              <div className="button_btn">
                <button className="btn_btn_1">Contact Us</button>
                <button className="btn_btn_2">Learn More</button>
              </div>
            </div>
            <div className="right_side">
              <div className="right_image">
                <img src={BannerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
