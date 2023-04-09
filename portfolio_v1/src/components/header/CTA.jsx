import React from 'react'
import UmerFarooq_CV from '../../assets/docs/UmerFarooq_CV.pdf'



const CTA = () => {
  return (
    <div className="cta">
       <a href={UmerFarooq_CV} download className='btn' >Download CV</a>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
   </div>
  )
}
export default CTA