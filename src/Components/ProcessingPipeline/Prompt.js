export const formatPrompt = (planData) => {
   const {
       desiredDestination,
       startDate,
       endDate,
       budget,
       tags
   } = planData;

   const tripDays = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
   const [minBudget, maxBudget] = budget;
   const dailyMinBudget = Math.floor(minBudget/tripDays);
   const dailyMaxBudget = Math.floor(maxBudget/tripDays);

   return `# Travel Plan: ${desiredDestination}

## Travel Parameters
• Destination: ${desiredDestination}
• Dates: ${new Date(startDate).toLocaleDateString()} to ${new Date(endDate).toLocaleDateString()}
• Daily Budget Range: $${dailyMinBudget} - $${dailyMaxBudget}
• Total Budget Range: $${minBudget} - $${maxBudget}
• Travel Preferences: ${tags.length > 0 ? tags.join(', ') : 'None specified'}


# Destination Overview

[Brief introduction to ${desiredDestination}, including seasonal considerations and cultural information]

Make sure to give the itinerary ONLY for the desired location. Do NOT give information along the way. Assume that the person has already reached the desired location.


# Essential Travel Information

## Best Time to Visit
[Information about weather and seasonal considerations for the travel dates]

## Local Customs & Culture
[Key cultural insights and etiquette guidelines]

## Currency & Payment Tips
[Information about local currency and payment methods]


# Daily Itineraries

${Array.from({ length: tripDays }, (_, i) => `
# Day ${i + 1}

## Morning
• Activities with timings and costs
• Recommended breakfast location and budget

## Afternoon
• Activities with timings and costs
• Recommended lunch location and budget

## Evening
• Activities with timings and costs
• Recommended dinner location and budget

---
`).join('\n')}

# Accommodation Recommendations

## Budget-Friendly ($${dailyMinBudget - 100}-$${dailyMinBudget}/night)
[Details including location, amenities, and benefits]

## Mid-Range ($${dailyMinBudget}-$${Math.floor((dailyMaxBudget + dailyMinBudget)/2)}/night)
[Details including location, amenities, and benefits]

## Premium ($${Math.floor((dailyMaxBudget + dailyMinBudget)/2)}-$${dailyMaxBudget}/night)
[Details including location, amenities, and benefits]


# Transportation Guide

## Getting Around
[Overview of local transportation options]

## Cost Breakdown
[Detailed transportation costs and tips]


# Local Tips and Recommendations

## Must-Know Tips
[Essential local tips and advice]

## Safety Guidelines
[Important safety information]

## Hidden Gems
[Lesser-known but worthwhile attractions]


# Budget Summary

## Detailed Cost Breakdown

| Category | Daily Budget | Total Budget |
|----------|--------------|--------------|
| Accommodation | $X | $X |
| Food & Dining | $X | $X |
| Activities | $X | $X |
| Transportation | $X | $X |
| Miscellaneous | $X | $X |
| Total | $X | $X |


# Quick Reference Guide

## Emergency Contacts
• Local Emergency Number:
• Nearest Hospital:
• Tourist Police:
• Embassy/Consulate:

## Important Addresses
• Accommodation:
• Nearest Medical Facility:
• Police Station:
• Tourist Information Center:`;
};