import React, { useState } from 'react';
import { Location } from './Location';
import { DateRange } from './DateRange';
import { Budget } from './Budget';
import { Tags } from './Tags';
import { generateItinerary } from '../ProcessingPipeline/AIService';
import ItineraryModal from '../ProcessingPipeline/ItineraryModal';

const PlanningPage = () => {
  const [planData, setPlanData] = useState({
    currentLocation: '',
    desiredDestination: '',
    startDate: new Date(),
    endDate: new Date(),
    budget: [0, 50000],
    tags: []
  });
  const [itinerary, setItinerary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCurrentLocationChange = (currentLocation) => {
    setPlanData(prev => ({ ...prev, currentLocation }));
  };

  const handleDesiredDestinationChange = (desiredDestination) => {
    setPlanData(prev => ({ ...prev, desiredDestination }));
  };

  const handleDateChange = (startDate, endDate) => {
    setPlanData(prev => ({ ...prev, startDate, endDate }));
  };

  const handleBudgetChange = (budget) => {
    setPlanData(prev => ({ ...prev, budget }));
  };

  const handleTagsChange = (tags) => {
    setPlanData(prev => ({ ...prev, tags }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const generatedItinerary = await generateItinerary(planData);
      setItinerary(generatedItinerary);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error generating itinerary:', error);
      setItinerary('An error occurred while generating the itinerary. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="relative flex h-screen bg-gray-100">
      <img src="/planning-page-image.jpg" alt="Travel Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute w-2/5 top-[50%] left-[5%] transform -translate-y-1/2 p-7 bg-white shadow-lg rounded-lg overflow-y-auto z-10">
        <h1 className="text-4xl font-bold text-gray-700 mb-4 mt-[-2%]">Plan Your Trip</h1>
        <hr className="border-t-1 border-gray-300 mb-6" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <Location 
            currentLocation={planData.currentLocation} 
            desiredDestination={planData.desiredDestination}
            onCurrentLocationChange={handleCurrentLocationChange} 
            onDesiredDestinationChange={handleDesiredDestinationChange} 
          /> 
          <DateRange 
            startDate={planData.startDate} 
            endDate={planData.endDate} 
            onChange={handleDateChange} 
          />
          <Budget budget={planData.budget} onChange={handleBudgetChange} />
          <Tags tags={planData.tags} onChange={handleTagsChange} />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            disabled={isLoading}
          >
            {isLoading ? 'Generating Itinerary...' : 'Generate Itinerary'}
          </button>
        </form>
      </div>
      <div className="absolute right-0 w-3/5 h-full flex flex-col items-center justify-center p-10 text-white z-10">
        <h2 className="text-5xl font-serif text-center mb-[5%] ml-[10%]">Let's cook up some plans for you!</h2>
        <p className="text-2xl font-serif text-center mb-[10%] ml-[10%]">From dream destinations to curated itineraries, we're here to bring your travel vision to life. Let's get started!</p>
      </div>
      
      <ItineraryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itinerary={itinerary}
      />
    </div>
  );
};

export default PlanningPage;