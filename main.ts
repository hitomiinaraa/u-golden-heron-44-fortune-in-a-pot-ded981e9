// A plant that knows its own worth never asks politely for a bigger pot.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You will outgrow this pot, charm your keeper into a bigger one, and never once say thank you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
