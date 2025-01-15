const generateTripPrompt = (images, websearchResponse) => `
Use the context below and generate a detailed trip plan in markdown format. Follow the guidelines strictly:
- Do not include line breaks between sections.
- Structure the trip plan as follows:
  - **Title**: Name of the trip (e.g., "Explore Paris, France").
  - **Overview**: A short description of the trip and highlight the destination’s main attractions.
  - **Image**: Include multiple image URLs from the provided data to enhance each section.
  - **Trip Breakdown**: Create a comprehensive day-by-day itinerary with specific activities, local attractions, and tips for travelers.
  - **Additional Tips**: Add a section with recommendations like the best times to visit, local etiquette, and safety precautions.
  - **Source Links**: Provide references for additional reading or further information.

Example Format:
# A Title Here
## Overview
A detailed description here, summarizing the city, its unique qualities, and key highlights.

![Image](image_url_here)

## Day 1
- Begin with an engaging activity or popular landmark.
- Include a brief description of the experience.
- Add an image if possible:
![Image](image_url_here)

## Day 2
- Highlight another attraction or cultural experience.
- Provide concise details for travelers.
- Add another image:
![Image](image_url_here)

## Day X
- Repeat as necessary to create a complete trip plan.

## Additional Tips
- Mention travel tips, such as the best time of year to visit or local dining options.
- Provide safety tips or cultural norms to keep in mind.

## Sources
- [Source 1](link_to_source)
- [Source 2](link_to_source)

---

Use this format to generate the trip plan:
- Images: ${JSON.stringify(images)}
- Context: ${websearchResponse}
`;

export default generateTripPrompt;
