import React from 'react'
import element from './All_Images/element.png'
import  './footer.css'
import {HiLocationMarker} from 'react-icons/hi'

export default function Footer() {
  return (
    <>
        <div className="footer">
    <div className="footer_contain container">
            <div className="imageElement">
                <img src={element} alt="element_image" />
            </div>
            <div class="company-about row">
    <div class="col">
      <p>Super Minds IT services private limited is a wholy <br />
      owned subsiduary of o9 Limited (Hong Kong)</p>
      <p>2022. All Rights Reserved</p>
    </div>
    <div class="start_address col">
    <span><HiLocationMarker className='location_icon'/></span><p> 76-d, udyog vihar phase iv <br />sector 18 gurugram, haryana-122001</p>
     <p>Terms & Conditions</p>
    </div>
  </div>
        </div>
    </div>
    </>
  )
}
