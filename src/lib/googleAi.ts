import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAi = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model