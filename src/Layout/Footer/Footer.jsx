


import React from 'react'
import footer from './Footer.module.css'

const Footer = () => {
  return (
    <div className={footer.wrapper}>
    
    <div className='container'>
      <div className={footer.block}></div>
      <div className={footer.footer__card}>
        
           <div className={footer.footer__text}>
            <h5>МП «ЦЕНТР ЦИФРОВЫХ ТЕХНОЛОГИЙ»</h5>
                
           </div>
        </div>

    </div>
    </div>
  )
}

export default Footer