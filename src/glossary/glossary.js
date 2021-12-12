import { personas, personaConsts } from "@/glossary/personas/allPersonas.js";
import { backgrounds, backgroundConsts } from "@/glossary/backgrounds/allBackgrounds.js";
import { entanglements, entanglementConsts } from "@/glossary/entanglements/allEntanglements.js";
import { moves, moveConsts } from "@/glossary/moves/allMoves.js";

const glossaryRoutes = [...moves, ...backgrounds, ...personas, ...entanglements];
const glossary = [...moveConsts, ...backgroundConsts, ...personaConsts, ...entanglementConsts];

export { glossaryRoutes, glossary };