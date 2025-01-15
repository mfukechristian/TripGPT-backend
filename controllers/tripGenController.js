import { ChatMistralAI } from "@langchain/mistralai";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import axios from "axios";
import dotenv from "dotenv";
import generateTripPrompt from "../utils/tripPrompt.js";

dotenv.config();

const model = new ChatMistralAI({
  apiKey: process.env.MISTRAL_API_KEY,
  model: "mistral-large-latest",
  temperature: 0,
});

const searchContentTool = new TavilySearchResults({
  maxResults: 2,
  apiKey: process.env.TAVILY_API_KEY,
});

async function fetchImages(city, country) {
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

export const generateTripController = async (req, res) => {
  const { city, country } = req.body;

  if (!city || !country) {
    return res
      .status(400)
      .json({ error: "City and country are required in the request body." });
  }

  try {
    const websearchResponse = await searchContentTool.invoke(
      `What are the best places to visit in ${city}, ${country}?`
    );

    const images = await fetchImages(city, country);
    if (!images) {
      return res.status(500).json({ error: "Failed to fetch images." });
    }

    const prompt = generateTripPrompt(images, websearchResponse);

    const response = await model.invoke(prompt);
    res.status(200).json({ result: response.content });
  } catch (error) {
    console.error("Error generating trip plan:", error);
    res.status(500).json({ error: "Error generating trip plan." });
  }
};
