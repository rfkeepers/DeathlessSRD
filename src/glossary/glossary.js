import { backgrounds, backgroundConsts } from "@/glossary/backgrounds/allBackgrounds.js";
import { moves, moveConsts } from "@/glossary/moves/allMoves.js";

const glossaryRoutes = [...moves, ...backgrounds];
const glossary = [...moveConsts, ...backgroundConsts];

export { glossaryRoutes, glossary };