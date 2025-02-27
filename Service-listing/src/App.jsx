import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceCard from '../components/ServiceCARD.JSX'

function App() {

  return (
    <div>
      <h1>Web  Services</h1>

      <ServiceCard 
        title="Web Development" 
        description="We specialize in building responsive and modern websites that fulfil to your business needs."
      />
      
      <ServiceCard 
        title="SEO Optimization" 
        description="Enhance your website's visibility on search engines to reach a broader audience."
      />
      
    </div>
  );
};

export default App;