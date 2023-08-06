import React from 'react'; // Import React module if not already done

import './App.css'; // Corrected import statement

import Img from './Physics_wallah_logo.svg.png';
import Img2 from './pexels-afta-putta-gunawan-683039.jpg'

function App() {
  return (
    <div className='bg-slate-900 grid place-content-center h-screen'>
      
    <div className='p-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg flex items-center space-x-4'>
      <div>
        <img className='h-12 w-12' src={Img} alt="Physics Wallah Logo" />
      </div>
      <div>
        <div className='text-2xl font-medium text-black'>
          TailwindCSS
          <p className='text-slate-500 text-base'>By Waleed Choudhary</p>
        </div>
      </div>
    </div>
    <button className='bg-sky-500 mt-2 text-white text-base p-2 rounded-xl hover:bg-white hover:text-black'>Buy Now</button>
    <div className='mt-3'>
    <div className='max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
      <div>
        <img className='h-48  w-full object-cover md:h-full md:w-48'src={Img2} alt='Coffee' />
      </div>
        <div className='uppercas tracking-wide text-sm text-indigo-500 font-semibold'>
          An Awesome Card
        </div>
        <a className='block mt-1 text-lg font-medium text-black hover:text-blue-700' 
        href='#'>Tailwind CSS is Amazing once you understand the power of it</a>
        <p className='mt-2 text-slate-500'>Lorem3 </p>
      </div>
      </div>
    </div>
    
    </div>
  );
}

export default App;
