// apparel

import redShoe from "../assets/apparel/red_shoe.jpg";
import beanie from "../assets/apparel/beanie.jpg";
import shirt from "../assets/apparel/shirt.jpg";
import cardigan from "../assets/apparel/cardigan.jpg";
import hoodie from "../assets/apparel/hoodie.jpg";

// food
import cake from "../assets/food/cake.jpg";
import noodle from "../assets/food/noodle.jpg";
import pizza from "../assets/food/pizza.jpg";
import shawarma from "../assets/food/shawarma.jpg";
import tawouk from "../assets/food/tawouk.jpg";

// nature
import flower from "../assets/nature/flower.jpg";
import bush from "../assets/nature/bush.jpg";
import dune from "../assets/nature/dune.jpg";
import river from "../assets/nature/river.jpg";
import tree from "../assets/nature/tree.jpg";

let game = [
  {
    apparel: [
      {
        url: redShoe,
        correctOption: "shoe",
        wrongOptions: ["shirt", "hat", "yellow"],
      },
      {
        url: beanie,
        correctOption: "beanie",
        wrongOptions: ["car", "jeans", "belt"],
      },
      {
        url: cardigan,
        correctOption: "cardigan",
        wrongOptions: ["rat", "jacket", "book"],
      },
      {
        url: shirt,
        correctOption: "shirt",
        wrongOptions: ["shoe", "jeans", "belt"],
      },
      {
        url: hoodie,
        correctOption: "hoodie",
        wrongOptions: ["jersey", "noodles", "mouse"],
      },
    ],
  },

  {
    food: [
      {
        url: cake,
        correctOption: "cake  ",
        wrongOptions: ["brownie ", "cookie", "ice cream"],
      },
      {
        url: noodle,
        correctOption: "noodle",
        wrongOptions: ["car", "jeans", "belt"],
      },
      {
        url: pizza,
        correctOption: "pizza",
        wrongOptions: ["rat", "jacket", "book"],
      },
      {
        url: shawarma,
        correctOption: "shawarma",
        wrongOptions: ["shoe", "jeans", "belt"],
      },
      {
        url: tawouk,
        correctOption: "tawouk",
        wrongOptions: ["jersey", "noodles", "mouse"],
      },
    ],
  },
  {
    nature: [
      {
        url: flower,
        correctOption: "flower  ",
        wrongOptions: ["tree", "bush", "branch"],
      },
      {
        url: bush,
        correctOption: "bush",
        wrongOptions: ["car", "jeans", "belt"],
      },
      {
        url: dune,
        correctOption: "dune",
        wrongOptions: ["rat", "jacket", "book"],
      },
      {
        url: river,
        correctOption: "river",
        wrongOptions: ["shoe", "jeans", "belt"],
      },
      {
        url: tree,
        correctOption: "tree",
        wrongOptions: ["jersey", "noodles", "mouse"],
      },
    ],
  },
];
export { game as gameData };
