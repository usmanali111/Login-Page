import React from 'react'
import Servicecard from '../../../global/component/servicecard'
import { serviceData } from '../../../global/utils/data'
const OurServices = () => {
console.log("Servicecard" ,serviceData )

  return (
    <section className="services_section">
    <div className="page_width">
      <h2>
        Explore our <span>Services</span> 
      </h2>
      <div className="services_card">
        {serviceData.map{(item,index)=>{
          return (
            
          )

        }}}
      <Servicecard/>
      <Servicecard/>
      <Servicecard/>
      <Servicecard/>  
        </div>
    </div></section>
  )
}

export default OurServices
