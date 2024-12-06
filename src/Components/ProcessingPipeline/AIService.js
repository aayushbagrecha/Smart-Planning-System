// src/services/aiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export const generateItinerary = async (planData) => {
  if (!process.env.REACT_APP_GEMINI_API_KEY) {
    throw new Error('Gemini API key is not configured');
  }

  try {
    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = formatPrompt(planData);

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error('No response generated from the model');
    }

    return text;

  } catch (error) {
    console.error('Gemini API Error:', error);
    if (error.message.includes('API key')) {
      throw new Error('Invalid API key. Please check your Gemini API configuration.');
    }
    if (error.message.includes('quota')) {
      throw new Error('API quota exceeded. Please try again later.');
    }
    throw new Error('Failed to generate itinerary. Please try again.');
  }
};

// Optimized prompt formatting for Gemini
const formatPrompt = (planData) => {
  const {
    currentLocation,
    desiredDestination,
    startDate,
    endDate,
    budget,
    tags
  } = planData;

  const tripDays = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
  const [minBudget, maxBudget] = budget;

  return `As an expert travel planner, create a detailed ${tripDays}-day travel itinerary with the following specifications:

Travel Details:
- From: ${currentLocation}
- To: ${desiredDestination}
- Dates: ${new Date(startDate).toLocaleDateString()} to ${new Date(endDate).toLocaleDateString()}
- Budget Range: $${minBudget} to $${maxBudget}
- Preferences/Interests: ${tags.join(', ') || 'None specified'}

Please structure the itinerary as follows for each day:

Day [X]:
1. Morning Activities:
   - [Activity with time and cost]
   - [Activity with time and cost]
2. Afternoon Activities:
   - [Activity with time and cost]
   - [Activity with time and cost]
3. Evening Activities:
   - [Activity with time and cost]
   - [Activity with time and cost]
4. Meals:
   - Breakfast: [Suggestion and estimated cost]
   - Lunch: [Suggestion and estimated cost]
   - Dinner: [Suggestion and estimated cost]
5. Accommodation: [Type, name, and cost]
6. Daily Transportation: [Options and costs]

Please also include:
1. Total daily cost breakdown
2. Local cultural tips and customs
3. Weather-appropriate suggestions
4. Must-try local specialties
5. Safety recommendations

Ensure all suggestions stay within the specified budget range of $${minBudget} to $${maxBudget} for the entire trip.`;
};