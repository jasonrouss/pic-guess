// Landmark

import colosseum from "../assets/landmark/colosseum.jpg";
import eiffel from "../assets/landmark/eiffel.jpg";
import giza from "../assets/landmark/giza.jpg";
import opera from "../assets/landmark/opera.jpg";
import rushmore from "../assets/landmark/rushmore.jpg";

// Creature
import centaur from "../assets/creature/centaur.jpg";
import dragon from "../assets/creature/dragon.jpg";
import griffin from "../assets/creature/griffin.jpg";
import mermaid from "../assets/creature/mermaid.jpg";
import phoenix from "../assets/creature/phoenix.jpg";

// Planet
import earth from "../assets/planet/earth.jpg";
import mars from "../assets/planet/mars.jpg";
import mercury from "../assets/planet/mercury.jpg";
import venus from "../assets/planet/venus.jpg";
import jupiter from "../assets/planet/jupiter.jpg";

// Painting
import guernica from "../assets/painting/guernica.jpg";
import memory from "../assets/painting/memory.jpg";
import starry from "../assets/painting/starry.jpg";
import mona from "../assets/painting/mona.jpg";
import birth from "../assets/painting/birth.jpg";

// Castle
import cinderella from "../assets/castle/cinderella.jpg";
import prague from "../assets/castle/prague.jpg";
import mich from "../assets/castle/mich.jpg";
import neuschwanstein from "../assets/castle/neuschwanstein.jpg";
import windsor from "../assets/castle/windsor.jpg";

// Mountain

import blanc from "../assets/mountain/blanc.jpg";
import denali from "../assets/mountain/denali.jpg";
import everest from "../assets/mountain/everest.jpg";
import fuji from "../assets/mountain/fuji.jpg";
import kilimanjaro from "../assets/mountain/kilimanjaro.jpg";

let game = [
  {
    landmark: [
      {
        url: eiffel,
        correctOption: "Eiffel Tower",
        wrongOptions: ["Big Ben", "Statue of Liberty", "Leaning Tower of Pisa"],
      },
      {
        url: giza,
        correctOption: "Pyramids of Giza",
        wrongOptions: ["Great Wall of China", "Machu Picchu", "Taj Mahal"],
      },
      {
        url: opera,
        correctOption: "Sydney Opera House",
        wrongOptions: ["CN Tower", "Golden Gate Bridge", "Petronas Towers"],
      },
      {
        url: rushmore,
        correctOption: "Mount Rushmore",
        wrongOptions: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
      },
      {
        url: colosseum,
        correctOption: "Colosseum",
        wrongOptions: ["Acropolis", "Stonehenge", "Christ the Redeemer"],
      },
    ],
  },
  {
    creature: [
      {
        url: dragon,
        correctOption: "Dragon",
        wrongOptions: ["Kraken", "Sphinx", "Unicorn"],
      },
      {
        url: griffin,
        correctOption: "Griffin",
        wrongOptions: ["Chimera", "Hydra", "Minotaur"],
      },
      {
        url: centaur,
        correctOption: "Centaur",
        wrongOptions: ["Pegasus", "Satyr", "Nymph"],
      },
      {
        url: phoenix,
        correctOption: "Phoenix",
        wrongOptions: ["Dragon", "Kraken", "Sphinx"],
      },
      {
        url: mermaid,
        correctOption: "Mermaid",
        wrongOptions: ["Kelpie", "Charybdis", "Naga"],
      },
    ],
  },
  {
    planet: [
      {
        url: mercury,
        correctOption: "Mercury",
        wrongOptions: ["Venus", "Mars", "Jupiter"],
      },
      {
        url: venus,
        correctOption: "Venus",
        wrongOptions: ["Mercury", "Earth", "Saturn"],
      },
      {
        url: earth,
        correctOption: "Earth",
        wrongOptions: ["Mars", "Jupiter", "Uranus"],
      },
      {
        url: mars,
        correctOption: "Mars",
        wrongOptions: ["Mercury", "Venus", "Neptune"],
      },
      {
        url: jupiter,
        correctOption: "Jupiter",
        wrongOptions: ["Saturn", "Uranus", "Pluto"],
      },
    ],
  },
  {
    painting: [
      {
        url: starry,
        correctOption: "The Starry Night",
        wrongOptions: ["The Scream", "The Persistence of Memory", "Guernica"],
      },
      {
        url: mona,
        correctOption: "The Mona Lisa",
        wrongOptions: [
          "The Last Supper",
          "The Birth of Venus",
          "Girl with a Pearl Earring",
        ],
      },
      {
        url: memory,
        correctOption: "The Persistence of Memory",
        wrongOptions: ["The Scream", "The Starry Night", "Guernica"],
      },
      {
        url: birth,
        correctOption: "The Birth of Venus",
        wrongOptions: [
          "The Mona Lisa",
          "The Last Supper",
          "Girl with a Pearl Earring",
        ],
      },
      {
        url: guernica,
        correctOption: "Guernica",
        wrongOptions: [
          "The Persistence of Memory",
          "The Scream",
          "The Starry Night",
        ],
      },
    ],
  },
  {
    castle: [
      {
        url: neuschwanstein,
        correctOption: "Neuschwanstein Castle",
        wrongOptions: [
          "Hohenschwangau Castle",
          "Linderhof Palace",
          "Herrenchiemsee",
        ],
      },
      {
        url: windsor,
        correctOption: "Windsor Castle",
        wrongOptions: [
          "Hampton Court Palace",
          "Buckingham Palace",
          "Kensington Palace",
        ],
      },
      {
        url: cinderella,
        correctOption: "Cinderella Castle",
        wrongOptions: [
          "Sleeping Beauty Castle",
          "Rapunzel's Tower",
          "Tangled Castle",
        ],
      },
      {
        url: mich,
        correctOption: "Mont Saint Michel",
        wrongOptions: [
          "Château de Versailles",
          "Palace of Westminster",
          "Uffizi",
        ],
      },
      {
        url: prague,
        correctOption: "Prague Castle",
        wrongOptions: ["Buda Castle", "Bratislava Castle", "Karlstejn Castle"],
      },
    ],
  },
  {
    mountain: [
      {
        url: everest,
        correctOption: "Mount Everest",
        wrongOptions: ["K2", "Kangchenjunga", "Lhotse"],
      },
      {
        url: kilimanjaro,
        correctOption: "Mount Kilimanjaro",
        wrongOptions: ["Mount Elbrus", "Mount Aconcagua", "Mount Vinson"],
      },
      {
        url: denali,
        correctOption: "Mount Denali",
        wrongOptions: ["Mount Rainier", "Mount Whitney", "Mount Shasta"],
      },
      {
        url: blanc,
        correctOption: "Mount Blanc",
        wrongOptions: ["Mount Matterhorn", "Mount Eiger", "Mount Jungfrau"],
      },
      {
        url: fuji,
        correctOption: "Mount Fuji",
        wrongOptions: ["Mount Tate", "Mount Haku", "Mount Yari"],
      },
    ],
  },
];
export { game as gameData };
