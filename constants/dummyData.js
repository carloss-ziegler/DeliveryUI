import { icons, images } from "./";

const myProfile = {
  name: "Nome do Usuário",
  profile_image: images.profile,
  address: "No. 88, Jln Padungan, Kuching",
};

const categories = [
  {
    id: 1,
    name: "Fast Food",
    icon: icons.burger,
  },
  {
    id: 2,
    name: "Frutas",
    icon: icons.cherry,
  },
  {
    id: 3,
    name: "Mexicano",
    icon: icons.rice,
  },
];

const hamburger = {
  id: 1,
  name: "Hamburger",
  description: "Chicken patty hamburger",
  categories: [1, 2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const hotTacos = {
  id: 2,
  name: "Hot Tacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require("../assets/dummyData/hot_tacos.png"),
};

const vegBiryani = {
  id: 3,
  name: "Veg Biryani",
  description: "Indian Vegetable Biryani",
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/veg_biryani.png"),
};

const wrapSandwich = {
  id: 4,
  name: "Wrap Sandwich",
  description: "Grilled vegetables sandwich",
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/wrap_sandwich.png"),
};

const menu = [
  {
    id: 1,
    name: "Destaque",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: "Próximo a você",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: "Popular",
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: "Novos",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: "Em alta",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: "Recomendado",
    list: [hamburger, hotTacos, wrapSandwich],
  },
];

export default {
  myProfile,
  categories,
  menu,
};
