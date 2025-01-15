import { ChatMistralAI } from "@langchain/mistralai";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import dotenv from "dotenv";
import generateTripPrompt from "../utils/tripPrompt.js";

dotenv.config();

const model = new ChatMistralAI({
  apiKey: process.env.MISTRAL_API_KEY,
  model: "codestral-latest",
  temperature: 0,
});

const searchContentTool = new TavilySearchResults({
  maxResults: 5,
  apiKey: process.env.TAVILY_API_KEY,
});

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

    if (!websearchResponse) {
      return res
        .status(500)
        .json({ error: "Failed to fetch web search data." });
    }

    const prompt = generateTripPrompt(websearchResponse);

    const response = await model.invoke(prompt);
    res.status(200).json({ result: response.content });
  } catch (error) {
    console.error("Error generating trip plan:", error);
    res.status(500).json({ error: "Error generating trip plan." });
  }
};
