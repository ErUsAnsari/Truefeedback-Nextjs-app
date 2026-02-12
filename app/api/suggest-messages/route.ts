import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

    const response = streamText({
      model: openai("gpt-3.5-turbo"),
      maxOutputTokens: 400,
      prompt,
      temperature: 0.7,
    });

    return response.toTextStreamResponse();
  } catch (error) {
    console.error("AI generation error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate questions" }),
      { status: 500 },
    );
  }
}
