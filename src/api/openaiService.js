import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Securely use environment variable
  dangerouslyAllowBrowser: true,
});
export const generateResumeSection = async (prompt) => {
  try {
    const response = await openai.completions.create({
      model: "gpt-4",
      prompt: prompt,
      max_tokens: 200,
    });

    return response.choices[0].text.trim();
  } catch (error) {
    console.error("Error generating text:", error);
    return "";
  }
};
