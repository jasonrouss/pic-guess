import redShoe from "../assets/red_shoe.jpg";
import cake from "../assets/cake.jpg";
import shirt from "../assets/shirt.jpg";
import flower from "../assets/flower.jpg";

let pictures = [
  {
    url: redShoe,
    correctOption: "red",
    wrongOptions: ["white", "black", "yellow"],
  },
  {
    url: cake,
    correctOption: "cake  ",
    wrongOptions: ["brownie ", "cookie", "ice cream"],
  },
  {
    url: shirt,
    correctOption: "shirt",
    wrongOptions: ["shoe", "jeans", "belt"],
  },
  {
    url: flower,
    correctOption: "flower  ",
    wrongOptions: ["tree", "bush", "branch"],
  },
  // add more pictures as needed
];
export { pictures as picData };
