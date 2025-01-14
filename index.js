import dotenv from "dotenv";
dotenv.config();
import { ChatMistralAI } from "@langchain/mistralai";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import axios from "axios";

const city = "Dakar";
const country = "Senegal";

const model = new ChatMistralAI({
	apiKey: process.env.MISTRAL_API_KEY,
	model: "mistral-large-latest",
	temperature: 0,
});

const searchContentTool = new TavilySearchResults({
	maxResults: 5,
	apiKey: process.env.TAVILY_API_KEY,
});

async function fetchImages() {
	const data = JSON.stringify({
		q: `beautiful pictures of ${city}, ${country}`,
	});

	const config = {
		method: "post",
		maxBodyLength: Infinity,
		url: "https://google.serper.dev/images",
		headers: {
			"X-API-KEY": process.env.SERPER_API_KEY,
			"Content-Type": "application/json",
		},
		data: data,
	};

	try {
		const response = await axios.request(config);
		return response.data;
	} catch (error) {
		console.error("Error fetching images:", error);
		return null;
	}
}

async function generateTripPlan() {
	try {
		const websearchResponse = await searchContentTool.invoke(
			`What are the best places to visit in ${city}, ${country}?`
		);

		const images = await fetchImages();
		if (!images) {
			console.error(
				"Failed to fetch images. Skipping image data in the trip plan."
			);
		}

		const prompt = `Use the context below and generate a trip plan in markdown format:\n\n- Use images from this data: ${JSON.stringify(
			images
		)}\n- For the content, use: ${websearchResponse}`;

		const response = await model.invoke(prompt);
		console.log(response.content);
	} catch (error) {
		console.error("Error generating trip plan:", error);
	}
}

generateTripPlan();
