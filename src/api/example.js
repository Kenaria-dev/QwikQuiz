import * as dotenv from "dotenv";

import { OpenAI } from "openai";
dotenv.config();
// console.log(process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: "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",
});

const assistent = await openai.beta.assistants.retrieve(
  "asst_M5Of0iAdupbVsOIO"
);

console.log(assistent);
