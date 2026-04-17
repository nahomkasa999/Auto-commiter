import { appendFile } from "node:fs/promises";

async function updateFarm() {
  try {
    // Fetch a random piece of advice
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json() as { slip: { advice: string } };
    const quote = data.slip.advice;

    const now = new Date().toISOString();
    const entry = `[${now}] ${quote}\n`;

    // Standard Node.js way to append to a file (works in Bun too)
    await appendFile("farm.txt", entry);
    
    console.log(`Added to farm: ${entry}`);
  } catch (e) {
    console.error("Growth error:", e);
  }
}

updateFarm();
