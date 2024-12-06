import React from 'react';
import { useNavigate } from 'react-router-dom';

const Content = () => {
    const navigate = useNavigate();

    const handlePlanNowClick = () => {
      navigate('/plan');
    };

  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img src="/landing-page-image.jpg" alt="Travel Background" className="w-full h-full object-cover" />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-start items-start bg-black bg-opacity-40 text-white text-left px-4 pl-20">
        <div className='lg:mt-44'>
        <h2 className="text-5xl font-bold mb-4">Welcome Home,</h2>
        <h2 className="text-7xl font-bold mb-20">Voyager.</h2>
        <p className="text-xl mb-6">Ready to explore the world? Just tell us where you want to go, <br/> and we’ll handle the rest. Your next journey awaits!<br/><br/>
        Start planning your dream trip today!</p>
        </div>
        <button 
        className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        onClick={handlePlanNowClick}
      >
        Plan Now!
      </button>
      </div>
      
    </section>
  );
};

export default Content;
