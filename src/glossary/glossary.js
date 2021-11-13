import { attunements, attunementConsts } from "@/glossary/attunements/allAttunements.js";
import { backgrounds, backgroundConsts } from "@/glossary/backgrounds/allBackgrounds.js";
import { entanglements, entanglementConsts } from "@/glossary/entanglements/allEntanglements.js";
import { moves, moveConsts } from "@/glossary/moves/allMoves.js";

const glossaryRoutes = [...moves, ...backgrounds, ...attunements, ...entanglements];
const glossary = [...moveConsts, ...backgroundConsts, ...attunementConsts, ...entanglementConsts];

export { glossaryRoutes, glossary };