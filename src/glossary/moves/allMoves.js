import { tags, types } from '@/glossary/consts.js';
import * as help from '@/glossary/helpers.js';

import AllArePrey from '@/glossary/moves/AllArePrey.vue';
import AllAsFated from '@/glossary/moves/AllAsFated.vue';
import AndForMyNextTrick from '@/glossary/moves/AndForMyNextTrick.vue';
import AnythingYouWantMeToBe from '@/glossary/moves/AnythingYouWantMeToBe.vue';
import Backtrack from '@/glossary/moves/Backtrack.vue';
import BadFaith from '@/glossary/moves/BadFaith.vue';
import BadKarma from '@/glossary/moves/BadKarma.vue';
import Bail from '@/glossary/moves/Bail.vue';
import BlackMarket from '@/glossary/moves/BlackMarket.vue';
import BodyDouble from '@/glossary/moves/BodyDouble.vue';
import BreathOfLife from '@/glossary/moves/BreathOfLife.vue';
import Caches from '@/glossary/moves/Caches.vue';
import CaseAJoint from '@/glossary/moves/CaseAJoint.vue';
import CloakOfShadows from '@/glossary/moves/CloakOfShadows.vue';
import Combobulate from '@/glossary/moves/Combobulate.vue';
import Compel from '@/glossary/moves/Compel.vue';
import Confession from '@/glossary/moves/Confession.vue';
import Connection from '@/glossary/moves/Connection.vue';
import ContestOfStrength from '@/glossary/moves/ContestOfStrength.vue';
import Cook from '@/glossary/moves/Cook.vue';
import CovertDemolitionist from '@/glossary/moves/CovertDemolitionist.vue';
import Cower from '@/glossary/moves/Cower.vue';
import CriminalConnections from '@/glossary/moves/CriminalConnections.vue';
import Curiosity from '@/glossary/moves/Curiosity.vue';
import DayJob from '@/glossary/moves/DayJob.vue';
import Determination from '@/glossary/moves/Determination.vue';
import Dismantle from '@/glossary/moves/Dismantle.vue';
import Doppelganger from '@/glossary/moves/Doppelganger.vue';
import Dreamlike from '@/glossary/moves/Dreamlike.vue';
import DrownInTheAbyss from '@/glossary/moves/DrownInTheAbyss.vue';
import EasyPrey from '@/glossary/moves/EasyPrey.vue';
import Effigy from '@/glossary/moves/Effigy.vue';
import Estate from '@/glossary/moves/Estate.vue';
import ExpertGuide from '@/glossary/moves/ExpertGuide.vue';
import FanTheFlames from '@/glossary/moves/FanTheFlames.vue';
import FindAnOpening from '@/glossary/moves/FindAnOpening.vue';
import FindRespite from '@/glossary/moves/FindRespite.vue';
import Fireball from '@/glossary/moves/Fireball.vue';
import ForgeSlag from '@/glossary/moves/ForgeSlag.vue';
import GazeIntoTheAbyss from '@/glossary/moves/GazeIntoTheAbyss.vue';
import Ghost from '@/glossary/moves/Ghost.vue';
import HeartsAndMinds from '@/glossary/moves/HeartsAndMinds.vue';
import HelpAndHindrance from '@/glossary/moves/HelpAndHindrance.vue';
import Hobnob from '@/glossary/moves/Hobnob.vue';
import Hex from '@/glossary/moves/Hex.vue';
import Imbibe from '@/glossary/moves/Imbibe.vue';
import Immolate from '@/glossary/moves/Immolate.vue';
import Intervene from '@/glossary/moves/Intervene.vue';
import JuryRig from '@/glossary/moves/JuryRig.vue';
import KeepThemFromHarm from '@/glossary/moves/KeepThemFromHarm.vue';
import Kneel from '@/glossary/moves/Kneel.vue';
import KnowYourEnemy from '@/glossary/moves/KnowYourEnemy.vue';
import LayOnHands from '@/glossary/moves/LayOnHands.vue';
import LifeIsPain from '@/glossary/moves/LifeIsPain.vue';
import LongCon from '@/glossary/moves/LongCon.vue';
import More from '@/glossary/moves/More.vue';
import NobleCalling from '@/glossary/moves/NobleCalling.vue';
import Omniscience from '@/glossary/moves/Omniscience.vue';
import OpenChannel from '@/glossary/moves/OpenChannel.vue';
import Overwhelm from '@/glossary/moves/Overwhelm.vue';
import Persuade from '@/glossary/moves/Persuade.vue';
import Philanthropist from '@/glossary/moves/Philanthropist.vue';
import PlayingWithFire from '@/glossary/moves/PlayingWithFire.vue';
import Pragmatic from '@/glossary/moves/Pragmatic.vue';
import Presence from '@/glossary/moves/Presence.vue';
import Puppets from '@/glossary/moves/Puppets.vue';
import Putty from '@/glossary/moves/Putty.vue';
import RabbitInTheHat from '@/glossary/moves/RabbitInTheHat.vue';
import Rally from '@/glossary/moves/Rally.vue';
import ReadTheirTell from '@/glossary/moves/ReadTheirTell.vue';
import Resonance from '@/glossary/moves/Resonance.vue';
import RespectMyAuthority from '@/glossary/moves/RespectMyAuthority.vue';
import Retribution from '@/glossary/moves/Retribution.vue';
import ReturnToLife from '@/glossary/moves/ReturnToLife.vue';
import SacredRites from '@/glossary/moves/SacredRites.vue';
import SacrificesMustBeMade from '@/glossary/moves/SacrificesMustBeMade.vue';
import Seduce from '@/glossary/moves/Seduce.vue';
import SeekingSolace from '@/glossary/moves/SeekingSolace.vue';
import SelfPreservation from '@/glossary/moves/SelfPreservation.vue';
import ShieldCharge from '@/glossary/moves/ShieldCharge.vue';
import ShowEm from '@/glossary/moves/ShowEm.vue';
import SilverTongued from '@/glossary/moves/SilverTongued.vue';
import Simulacra from '@/glossary/moves/Simulacra.vue';
import Simulation from '@/glossary/moves/Simulation.vue';
import SkinWalker from '@/glossary/moves/SkinWalker.vue';
import SneakThief from '@/glossary/moves/SneakThief.vue';
import Snipe from '@/glossary/moves/Snipe.vue';
import SomethingWrongOfficer from '@/glossary/moves/SomethingWrongOfficer.vue';
import Spike from '@/glossary/moves/Spike.vue';
import StraddleTheBorder from '@/glossary/moves/StraddleTheBorder.vue';
import StrikingTheAnvil from '@/glossary/moves/StrikingTheAnvil.vue';
import Substances from '@/glossary/moves/Substances.vue';
import Synthesis from '@/glossary/moves/Synthesis.vue';
import TakesOneToKnowOne from '@/glossary/moves/TakesOneToKnowOne.vue';
import Taunt from '@/glossary/moves/Taunt.vue';
import Temptations from '@/glossary/moves/Temptations.vue';
import Tendons from '@/glossary/moves/Tendons.vue';
import Testudo from '@/glossary/moves/Testudo.vue';
import TheBoss from '@/glossary/moves/TheBoss.vue';
import ThePlan from '@/glossary/moves/ThePlan.vue';
import ThievesCant from '@/glossary/moves/ThievesCant.vue';
import Track from '@/glossary/moves/Track.vue';
import Trap from '@/glossary/moves/Trap.vue';
import TwistedFirestarter from '@/glossary/moves/TwistedFirestarter.vue';
import UncannyResemblence from '@/glossary/moves/UncannyResemblence.vue';
import UnderstandSomeone from '@/glossary/moves/UnderstandSomeone.vue';
import UnifiedConsciousness from '@/glossary/moves/UnifiedConsciousness.vue';
import WordsAndStonesCanBothBreakBones from '@/glossary/moves/WordsAndStonesCanBothBreakBones.vue';
import Yarn from '@/glossary/moves/Yarn.vue';

const moves = [
   {
      name: 'All Are Prey',
      type: types.move,
      tags: ['Hunter'],
      routeContent: 'One of the Hunter background moves.',
      component: AllArePrey,
   },
   {
      name: 'All As Fated',
      type: types.move,
      tags: ['Sightseer'],
      routeContent: 'One of the Sightseer attunement moves.',
      component: AllAsFated,
   },
   {
      name: 'And For My Next Trick',
      type: types.move,
      tags: ['Magician'],
      routeContent: 'One of the Magician background moves.',
      component: AndForMyNextTrick,
   },
   {
      name: 'Anything You Want Me To Be',
      type: types.move,
      tags: ['Chameleon'],
      routeContent: 'One of the Chameleon attunement moves.',
      component: AnythingYouWantMeToBe,
   },
   {
      name: 'Backtrack',
      type: types.move,
      tags: ['Sightseer'],
      routeContent: 'One of the Sightseer attunement moves.',
      component: Backtrack,
   },
   {
      name: 'Bad Faith',
      type: types.move,
      tags: ['Illusionist'],
      routeContent: 'One of the Illusionist attunement moves.',
      component: BadFaith,
   },
   {
      name: 'Bad Karma',
      type: types.move,
      tags: ['Witch'],
      routeContent: 'One of the Witch attunement moves.',
      component: BadKarma,
   },
   {
      name: 'Bail!',
      type: types.move,
      tags: ['Smuggler'],
      routeContent: 'One of the Smuggler background moves.',
      component: Bail,
   },
   {
      name: 'Black Market',
      type: types.move,
      tags: ['Smuggler'],
      routeContent: 'One of the Smuggler background moves.',
      component: BlackMarket,
   },
   {
      name: 'Body Double',
      type: types.move,
      tags: ['Shadewalker'],
      routeContent: 'One of the Shadewalker attunement moves.',
      component: BodyDouble,
   },
   {
      name: 'Breath Of Life',
      type: types.move,
      tags: ['Martyr'],
      routeContent: 'One of the Martyr attunement moves.',
      component: BreathOfLife,
   },
   {
      name: 'Caches',
      type: types.move,
      tags: ['Trapper'],
      routeContent: 'One of the Trapper background moves.',
      component: Caches,
   },
   {
      name: 'Case A Joint',
      type: types.move,
      tags: ['Grifter'],
      routeContent: 'One of the Grifter background moves.',
      component: CaseAJoint,
   },
   {
      name: 'Cloak of Shadows',
      type: types.move,
      tags: ['Shadewalker'],
      routeContent: 'One of the Shadewalker attunement moves.',
      component: CloakOfShadows,
   },
   {
      name: 'Combobulate',
      type: types.move,
      tags: ['Scholar'],
      routeContent: 'One of the Scholar background moves.',
      component: Combobulate,
   },
   {
      name: 'Compel',
      type: types.move,
      tags: [tags.secondaryMove],
      routeContent: 'A secondary move for when players compel each other.',
      component: Compel,
   },
   {
      name: 'Confession',
      type: types.move,
      tags: ['Minister'],
      routeContent: 'One of the Minister background moves.',
      component: Confession,
   },
   {
      name: 'Connection',
      type: types.move,
      tags: ['Empath'],
      routeContent: 'One of the Empath attunement moves.',
      component: Connection,
   },
   {
      name: 'Contest of Strength',
      type: types.move,
      tags: ['Wrestler'],
      routeContent: 'One of the Wrestler background moves.',
      component: ContestOfStrength,
   },
   {
      name: 'Cook',
      type: types.move,
      tags: ['Chef'],
      routeContent: 'One of the Chef background moves.',
      component: Cook,
   },
   {
      name: 'Covert Demolitionist',
      type: types.move,
      tags: ['Graverobber'],
      routeContent: 'One of the Graverobber background moves.',
      component: CovertDemolitionist,
   },
   {
      name: 'Cower',
      type: types.move,
      tags: ['Dominion'],
      routeContent: 'One of the Dominion attunement moves.',
      component: Cower,
   },
   {
      name: 'Criminal Connections',
      type: types.move,
      tags: ['Thief'],
      routeContent: 'One of the Thief background moves.',
      component: CriminalConnections,
   },
   {
      name: 'Curiosity',
      type: types.move,
      tags: ['Sightseer'],
      routeContent: 'One of the Sightseer attunement moves.',
      component: Curiosity,
   },
   {
      name: 'Day Job',
      type: types.move,
      tags: ['Butcher'],
      routeContent: 'One of the Butcher background moves.',
      component: DayJob,
   },
   {
      name: 'Determination',
      type: types.move,
      tags: ['Glutton'],
      routeContent: 'One of the Glutton attunement moves.',
      component: Determination,
   },
   {
      name: 'Dismantle',
      type: types.move,
      tags: ['Machinist'],
      routeContent: 'One of the Machinist background moves.',
      component: Dismantle,
   },
   {
      name: 'Doppelganger',
      type: types.move,
      tags: ['Chameleon'],
      routeContent: 'One of the Chameleon attunement moves.',
      component: Doppelganger,
   },
   {
      name: 'Dreamlike',
      type: types.move,
      tags: ['Illusionist'],
      routeContent: 'One of the Illusionist attunement moves.',
      component: Dreamlike,
   },
   {
      name: 'Drown In The Abyss',
      type: types.move,
      tags: [tags.secondaryMove],
      routeContent: 'A secondary move for when players fill out their Abyss track.',
      component: DrownInTheAbyss,
   },
   {
      name: 'Easy Prey',
      type: types.move,
      tags: ['Thief'],
      routeContent: 'One of the Thief background moves.',
      component: EasyPrey,
   },
   {
      name: 'Effigy',
      type: types.move,
      tags: ['Witch'],
      routeContent: 'One of the Witch attunement moves.',
      component: Effigy,
   },
   {
      name: 'Estate',
      type: types.move,
      tags: ['Wealthy Elite'],
      routeContent: 'One of the Wealthy Elite background moves.',
      component: Estate,
   },
   {
      name: 'Expert Guide',
      type: types.move,
      tags: ['Trapper'],
      routeContent: 'One of the Trapper background moves.',
      component: ExpertGuide,
   },
   {
      name: 'Fan The Flames',
      type: types.move,
      tags: ['Pyro'],
      routeContent: 'One of the Pyro attunement moves.',
      component: FanTheFlames,
   },
   {
      name: 'Find An Opening',
      type: types.move,
      tags: [tags.basicMove, tags.insight],
      routeContent: 'A basic move using the Insight stat.',
      component: FindAnOpening,
   },
   {
      name: 'Find Respite',
      type: types.move,
      tags: [tags.basicMove],
      routeContent: 'The basic move for sharing a moment with someone.',
      component: FindRespite
   },
   {
      name: 'Fireball',
      type: types.move,
      tags: ['Pyro'],
      routeContent: 'One of the Pyro attunement moves.',
      component: Fireball,
   },
   {
      name: 'Forge Slag',
      type: types.move,
      tags: ['Smithy'],
      routeContent: 'One of the Smithy background moves.',
      component: ForgeSlag,
   },
   {
      name: 'Gaze Into The Abyss',
      type: types.move,
      tags: [tags.basicMove, tags.abyss],
      routeContent: 'The basic move using the Abyss stat.',
      component: GazeIntoTheAbyss,
   },
   {
      name: 'Ghost',
      type: types.move,
      tags: ['Shadwalker'],
      routeContent: 'One of the Shadewalker attunement moves.',
      component: Ghost,
   },
   {
      name: 'Hearts and Minds',
      type: types.move,
      tags: ['Bard'],
      routeContent: 'One of the moves in the Bard background.',
      component: HeartsAndMinds,
   },
   {
      name: 'Help and Hindrance',
      type: types.move,
      tags: [tags.secondaryMove],
      routeContent: 'The move rules for handling when players want to help or hinder each other.',
      component: HelpAndHindrance,
   },
   {
      name: 'Hobnob',
      type: types.move,
      tags: ['Wealthy Elite'],
      routeContent: 'One of the Wealthy Elite background moves.',
      component: Hobnob,
   },
   {
      name: 'Hex',
      type: types.move,
      tags: ['Witch'],
      routeContent: 'One of the Witch attunement moves.',
      component: Hex,
   },
   {
      name: 'Imbibe',
      type: types.move,
      tags: ['Venom'],
      routeContent: 'One of the Venom attunement moves.',
      component: Imbibe,
   },
   {
      name: 'Immolate',
      type: types.move,
      tags: ['Immolate'],
      routeContent: 'One of the Pyro attunement moves.',
      component: Immolate,
   },
   {
      name: 'Intervene',
      type: types.move,
      tags: [tags.basicMove, tags.resolve],
      routeContent: 'The basic move using the Resolve stat.',
      component: Intervene,
   },
   {
      name: 'Jury-Rig',
      type: types.move,
      tags: ['Machinist'],
      routeContent: 'One of the Machinist background moves.',
      component: JuryRig,
   },
   {
      name: 'Keep Them From Harm',
      type: types.move,
      tags: ['Martyr'],
      routeContent: 'One of the Martyr attunement moves.',
      component: KeepThemFromHarm,
   },
   {
      name: 'Kneel',
      type: types.move,
      tags: ['Dominion'],
      routeContent: 'One of the Dominion attunement moves.',
      component: Kneel,
   },
   {
      name: 'Know Your Enemy',
      type: types.move,
      tags: ['Tactician'],
      routeContent: 'One of the Tactician background moves.',
      component: KnowYourEnemy,
   },
   {
      name: 'Lay On Hands',
      type: types.move,
      tags: ['Martyr'],
      routeContent: 'One of the Martyr attunement moves.',
      component: LayOnHands,
   },
   {
      name: 'Life Is Pain',
      type: types.move,
      tags: ['Glutton'],
      routeContent: 'One of the Glutton attunement moves.',
      component: LifeIsPain,
   },
   {
      name: 'Long Con',
      type: types.move,
      tags: ['Grifter'],
      routeContent: 'One of the Grifter background moves.',
      component: LongCon,
   },
   {
      name: 'More',
      type: types.move,
      tags: ['Glutton'],
      routeContent: 'One of the Glutton attunement moves.',
      component: More,
   },
   {
      name: 'Noble Calling',
      type: types.move,
      tags: ['Martyr'],
      routeContent: 'One of the Martyr attunement moves.',
      component: NobleCalling,
   },
   {
      name: 'Omniscience',
      type: types.move,
      tags: ['Sightseer'],
      routeContent: 'One of the Sightseer attunement moves.',
      component: Omniscience,
   },
   {
      name: 'Open Channel',
      type: types.move,
      tags: ['Empath'],
      routeContent: 'One of the Empath attunement moves.',
      component: OpenChannel,
   },
   {
      name: 'Overwhelm',
      type: types.move,
      tags: [tags.basicMove, tags.force],
      routeContent: 'The basic move using the Force stat.',
      component: Overwhelm,
   },
   {
      name: 'Persuade',
      type: types.move,
      tags: [tags.basicMove, tags.glamour],
      routeContent: 'The basic move using the Glamour stat.',
      component: Persuade,
   },
   {
      name: 'Philanthropist',
      type: types.move,
      tags: ['Martyr'],
      routeContent: 'One of the Martyr attunement moves.',
      component: Philanthropist,
   },
   {
      name: 'Playing With Fire',
      type: types.move,
      tags: ['Pyro'],
      routeContent: 'One of the Pyro attunement moves.',
      component: PlayingWithFire,
   },
   {
      name: 'Pragmatic',
      type: types.move,
      tags: ['Sightseer'],
      routeContent: 'One of the Sightseer attunement moves.',
      component: Pragmatic,
   },
   {
      name: 'Presence',
      type: types.move,
      tags: ['Dominion'],
      routeContent: 'One of the Dominion attunement moves.',
      component: Presence,
   },
   {
      name: 'Puppets',
      type: types.move,
      tags: ['Dominion'],
      routeContent: 'One of the Dominion attunement moves.',
      component: Puppets,
   },
   {
      name: 'Putty',
      type: types.move,
      tags: ['Chameleon'],
      routeContent: 'One of the Chameleon attunement moves.',
      component: Putty,
   },
   {
      name: 'Rabbit In The Hat',
      type: types.move,
      tags: ['Magician'],
      routeContent: 'One of the Magician background moves.',
      component: RabbitInTheHat,
   },
   {
      name: 'Rally',
      type: types.move,
      tags: ['Constable'],
      routeContent: 'One of the Constable background moves.',
      component: Rally,
   },
   {
      name: 'Read Their Tell',
      type: types.move,
      tags: ['Gambler'],
      routeContent: 'One of the Gambler background moves.',
      component: ReadTheirTell,
   },
   {
      name: 'Resonance',
      type: types.move,
      tags: ['Empath'],
      routeContent: 'One of the Empath attunement moves.',
      component: Resonance,
   },
   {
      name: 'Respect My Authority',
      type: types.move,
      tags: ['Constable'],
      routeContent: 'One of the Constable background moves.',
      component: RespectMyAuthority,
   },
   {
      name: 'Retribution',
      type: types.move,
      tags: ['Witch'],
      routeContent: 'One of the Witch attunement moves.',
      component: Retribution,
   },
   {
      name: 'Return To Life',
      type: types.move,
      tags: [tags.secondaryMove],
      routeContent: 'The secondary move for handling returning your character to life after death.',
      component: ReturnToLife,
   },
   {
      name: 'Sacred Rites',
      type: types.move,
      tags: ['Ritualist'],
      routeContent: 'One of the Ritualist background moves.',
      component: SacredRites,
   },
   {
      name: 'Sacrifices Must Be Made',
      type: types.move,
      tags: [tags.basicMove],
      routeContent: 'The basic move for reducing Harm taken.',
      component: SacrificesMustBeMade,
   },
   {
      name: 'Seduce',
      type: types.move,
      tags: ['Fatale'],
      routeContent: 'One of the Fatale background moves.',
      component: Seduce,
   },
   {
      name: 'Seeking Solace',
      type: types.move,
      tags: ['Minister'],
      routeContent: 'One of the Minister background moves.',
      component: SeekingSolace,
   },
   {
      name: 'Self-Preservation',
      type: types.move,
      tags: ['Shadewalker'],
      routeContent: 'One of the Shadewalker attunement moves.',
      component: SelfPreservation,
   },
   {
      name: 'Shield Charge',
      type: types.move,
      tags: ['Knight'],
      routeContent: 'One of the Knight background moves.',
      component: ShieldCharge,
   },
   {
      name: 'Show \'em',
      type: types.move,
      tags: ['Gambler'],
      routeContent: 'One of the Gambler background moves.',
      component: ShowEm,
   },
   {
      name: 'Silver Tongued',
      type: types.move,
      tags: ['Illusionist'],
      routeContent: 'One of the Illusionist attunement moves.',
      component: SilverTongued,
   },
   {
      name: 'Simulacra',
      type: types.move,
      tags: ['Illusionist'],
      routeContent: 'One of the Illusionist attunement moves.',
      component: Simulacra,
   },
   {
      name: 'Simulation',
      type: types.move,
      tags: ['Illusionist'],
      routeContent: 'One of the Illusionist attunement moves.',
      component: Simulation,
   },
   {
      name: 'Skin Walker',
      type: types.move,
      tags: ['Chameleon'],
      routeContent: 'One of the Chameleon attunement moves.',
      component: SkinWalker,
   },
   {
      name: 'Sneak Thief',
      type: types.move,
      tags: ['Shadewalker'],
      routeContent: 'One of the Shadewalker attunement moves.',
      component: SneakThief,
   },
   {
      name: 'Snipe',
      type: types.move,
      tags: [tags.basicMove, tags.skill],
      routeContent: 'The basic move using the Skill stat.',
      component: Snipe,
   },
   {
      name: 'Something Wrong Officer?',
      type: types.move,
      tags: ['Graverobber'],
      routeContent: 'One of the Graverobber background moves.',
      component: SomethingWrongOfficer,
   },
   {
      name: 'Spike',
      type: types.move,
      tags: ['Empath'],
      routeContent: 'One of the Empath attunement moves.',
      component: Spike,
   },
   {
      name: 'Straddle The Border',
      type: types.move,
      tags: [],
      routeContent: 'One of the Witch attunement moves.',
      component: StraddleTheBorder,
   },
   {
      name: 'Striking The Anvil',
      type: types.move,
      tags: ['Smithy'],
      routeContent: 'One of the Smithy background moves.',
      component: StrikingTheAnvil,
   },
   {
      name: 'Substances',
      type: types.move,
      tags: ['Venom'],
      routeContent: 'One of the Venom attunement moves.',
      component: Substances,
   },
   {
      name: 'Synthesis',
      type: types.move,
      tags: ['Chef'],
      routeContent: 'One of the Chef background moves.',
      component: Synthesis,
   },
   {
      name: 'Takes One To Know One',
      type: types.move,
      tags: ['Smuggler'],
      routeContent: 'One of the Smuggler background moves.',
      component: TakesOneToKnowOne,
   },
   {
      name: 'Taunt',
      type: types.move,
      tags: ['Wrestler'],
      routeContent: 'One of the Wrestler background moves.',
      component: Taunt,
   },
   {
      name: 'Temptations',
      type: types.move,
      tags: ['Venom'],
      routeContent: 'One of the Venom attunement moves.',
      component: Temptations,
   },
   {
      name: 'Tendons',
      type: types.move,
      tags: ['Butcher'],
      routeContent: 'One of the Butcher background moves.',
      component: Tendons,
   },
   {
      name: 'Testudo',
      type: types.move,
      tags: ['Knight'],
      routeContent: 'One of the Knight background moves.',
      component: Testudo,
   },
   {
      name: 'The Boss',
      type: types.move,
      tags: ['Dominion'],
      routeContent: 'One of the Dominion attunement moves.',
      component: TheBoss,
   },
   {
      name: 'The Plan',
      type: types.move,
      tags: ['Tactician'],
      routeContent: 'One of the Tactician background moves.',
      component: ThePlan,
   },
   {
      name: 'Thieves Cant',
      type: types.move,
      tags: ['Thief'],
      routeContent: 'One of the Thief background moves.',
      component: ThievesCant,
   },
   {
      name: 'Track',
      type: types.move,
      tags: ['Hunter'],
      routeContent: 'One of the Hunter background moves.',
      component: Track,
   },
   {
      name: 'Trap',
      type: types.move,
      tags: ['Trapper'],
      routeContent: 'One of the Trapper background moves.',
      component: Trap,
   },
   {
      name: 'Twisted Firestarter',
      type: types.move,
      tags: ['Pyro'],
      routeContent: 'One of the Pyro attunement moves.',
      component: TwistedFirestarter,
   },
   {
      name: 'Uncanny Resemblence',
      type: types.move,
      tags: ['Chameleon'],
      routeContent: 'One of the Chameleon attunement moves.',
      component: UncannyResemblence,
   },
   {
      name: 'Understand Someone',
      type: types.move,
      tags: [tags.basicMove, tags.insight],
      routeContent: 'A basic move using the Insight stat.',
      component: UnderstandSomeone,
   },
   {
      name: 'Unified Consciousness',
      type: types.move,
      tags: ['Empath'],
      routeContent: 'One of the Empath attunement moves.',
      component: UnifiedConsciousness,
   },
   {
      name: 'Words And Stones Can Both Break Bones',
      type: types.move,
      tags: ['Glutton'],
      routeContent: 'One of the Glutton attunement moves.',
      component: WordsAndStonesCanBothBreakBones,
   },
   {
      name: 'Yarn',
      type: types.move,
      tags: ['Bard'],
      routeContent: 'One of the Bard basic moves.',
      component: Yarn,
   },
];

help.addRouting(moves);
const moveConsts = help.reduceToConsts(moves);
export { moves, moveConsts };
