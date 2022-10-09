import React from 'react'
import { Link } from 'react-router-dom';
import './PricingCartStyles.css';

const PricingCart = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>$ 100</p>
            <p>- 3 days -</p>
            <p>- 3 videos -</p>
            <p>- Recorded -</p>
            <p>- Responsive Design -</p>
            <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>
        <div className='card'>
            <h3>- Premium -</h3>
            <span className='bar'></span>
            <p className='btc'>$ 200</p>
            <p>- 3 days -</p>
            <p>- 5 videos -</p>
            <p>- Recorded -</p>
            <p>- Responsive Design -</p>
            <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>
        <div className='card'>
            <h3>- Business -</h3>
            <span className='bar'></span>
            <p className='btc'>$ 500</p>
            <p>- 5 days -</p>
            <p>- 10 videos -</p>
            <p>- Recorded -</p>
            <p>- Responsive Design -</p>
            <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default PricingCart
