# TripGPT

TripGPT is an AI-powered travel planning application that helps users generate personalized trip plans based on their selected country and city. The project utilizes advanced AI capabilities to search the internet for relevant travel information and generate a customized itinerary.

## Live Demo

Check out the project live at:

**Frontend Repository:** [TripGPT Frontend](https://github.com/mfukechristian/TripGPT-frontend)

**Backend Repository:** [TripGPT Backend](https://github.com/mfukechristian/TripGPT-backend)

---

## Features

- **Country and City Selection:** Users can select their desired travel destination.
- **AI-Powered Trip Planning:** The application retrieves up-to-date travel data from the internet.
- **Personalized Itineraries:** Generates customized trip plans based on real-time information.
- **User-Friendly Interface:** A simple and intuitive UI for seamless trip planning.

## Tech Stack

### Frontend

- **React (Vite):** Fast and optimized development experience.
- **Tailwind CSS:** For responsive and modern UI design.
- **Axios:** For making API calls to the backend.

### Backend

- **Node.js & Express.js:** For handling API requests and responses.
- **Langchain:** Framework to integrate AI models.
- **Tavily Search API:** Fetches real-time travel information from the web.
- **Mistral AI Model:** Processes the retrieved data to generate trip plans.

---

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Frontend Setup

```bash
# Clone the frontend repository
git clone https://github.com/mfukechristian/TripGPT-frontend.git

# Navigate to the project directory
cd TripGPT-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Backend Setup

```bash
# Clone the backend repository
git clone https://github.com/mfukechristian/TripGPT-backend.git

# Navigate to the project directory
cd TripGPT-backend

# Install dependencies
npm install

# Start the backend server
npm start
```

---

## Usage

1. Open the frontend application in your browser.
2. Select a country and a city from the dropdown lists.
3. Click on **Generate Trip Plan** to receive a personalized itinerary.

---

## Project Structure

### Frontend

```
TripGPT-frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
├── public/
├── package.json
└── vite.config.js
```

### Backend

```
TripGPT-backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── index.js
├── package.json
└── .env
```

---

## Environment Variables

Create a `.env` file in the backend directory and add the following:

```env
TAVILY_API_KEY=your_tavily_api_key
MISTRAL_API_KEY=your_mistral_api_key
PORT=5000
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

For inquiries or feedback, contact:
[Christian Mfuke](https://github.com/mfukechristian)

---

Enjoy planning your dream vacation with **TripGPT**!
