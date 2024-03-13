import React from 'react'
import onlinePayment from '../images/online-payment.svg'

export default function Result({rate}) {
  return (
    <div className='resultCard'>
        <section className='imageSection'>
            <img src={onlinePayment} alt="online payment" />
        </section>
        <h3 className='selectRate'>You rate us {rate} out of 5</h3>
        <section className='gratitudeSection'>
            <h2 className='gratitude'>Thank you!</h2>
            <p className='gratitudeText'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </section>
    </div>
  )
}
