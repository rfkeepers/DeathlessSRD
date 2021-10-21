import { attunements, attunementConsts } from "@/glossary/attunements/allAttunements.js";
import { backgrounds, backgroundConsts } from "@/glossary/backgrounds/allBackgrounds.js";
import { moves, moveConsts } from "@/glossary/moves/allMoves.js";

const glossaryRoutes = [...moves, ...backgrounds, ...attunements];
const glossary = [...moveConsts, ...backgroundConsts, ...attunementConsts];

export { glossaryRoutes, glossary };