import React, { useState } from 'react';
import { Link} from 'react-router-dom';




function Home() {

  return (
    <div>
      <section className='home' id='home'>
        <div className='content'>
          <h3>Welcome to the place full of healthy food</h3>
          <h2>It's not about perfect. It's about effort. And when you bring that effort every single day, that's where transformation happens. That's how change occurs.</h2>
          <img id='png' src="../src/components/assets/png-transparent-business-management-customer-service-eye-lead-generation-sorpresa-hand-service-girl-thumbnail-removebg-preview.png" alt='default png'/> 
          <button id='button'><Link to="/calories-calculator"> Calories Calculator</Link>
            <img id='img' src='../src/assets/touch.png' alt='touch'/>
          </button>
      
        
        </div>
      </section>
    </div>
  );
}

export default Home;
