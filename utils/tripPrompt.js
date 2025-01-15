const generateTripPrompt = (websearchResponse) => `
Use the context below and generate a detailed trip plan in markdown format. Follow the guidelines strictly:
- Ensure the content flows like a professional blog post with no unnecessary line breaks between sections.
- Use proper markdown formatting for a clean and readable structure.
- Structure the trip plan as follows:
  - **Title**: A compelling title for the trip (e.g., "Explore Paris, France").
  - **Overview**: A concise, engaging description of the destination highlighting its unique attractions.
  - **Trip Breakdown**: Write a day-by-day itinerary with descriptive yet concise content about activities, landmarks, and experiences. Ensure that each day feels engaging and practical.
  - **Additional Tips**: Include practical travel advice, such as the best times to visit, cultural etiquette, safety tips, and local food recommendations.
  - **Sources**: Provide links to additional references or further reading to lend credibility to the trip plan.

### Example Format:
# Explore Kinshasa, DR Congo
## Overview
Kinshasa is a vibrant city known for its bustling markets, cultural heritage, and stunning natural landscapes. A perfect blend of modernity and tradition, this trip will immerse you in the heart of the Democratic Republic of the Congo.

## Day 1: Exploring the Congo River
Start your trip with a visit to the Congo River, the lifeblood of the region. Take a scenic boat ride and enjoy the serene natural beauty of the rainforest.

## Day 2: Wildlife and Local Culture
Visit the Kinshasa Zoo, where you’ll discover rare and exotic animals. Spend the afternoon exploring vibrant local markets for an authentic cultural experience.

## Day X: Continue Writing...
Repeat this format for each day, ensuring that the content is practical and engaging.

## Additional Tips
- Best Time to Visit: Highlight the ideal season for travel.
- Cultural Norms: Mention local customs to be aware of.
- Safety: Provide practical safety tips for visitors.

## Sources
- [Source 1](link_to_source)
- [Source 2](link_to_source)

---

### Context:
Use the following input to generate the trip plan:
- **Context**: ${websearchResponse}
`;

export default generateTripPrompt;
