// import * as Ai from "react-scripts/ai";
// import * as Bi from "react-scripts/bi";
// import * as Ri from "react-scripts/ri";
// import * as Gi from "react-scripts/gi";
// import * as Fa from "react-scripts/fa";
// import * as Bs from "react-icons/bs";

const categories = [
  {
    _id: 1,
    name: "Mobile",
    icon: "images/suggest/automobile.png",
    numberOfAds: 21211,
    subcategory: [
      {
        _id: 1,
        icon: "images/suggest/automobile.png",
        title: "Category 1 1",
        ads: 21211,
      },
      {
        _id: 2,
        icon: "images/suggest/automobile.png",
        title: "Category 1 2",
        ads: 21211,
      },
      {
        _id: 3,
        icon: "images/suggest/automobile.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 4,
        icon: "images/suggest/automobile.png",
        title: "Category 1 4",
        ads: 21211,
      },
    ],
  },
  {
    _id: 2,
    name: "Electronics",
    icon: "images/suggest/furniture.png",
    numberOfAds: 21211,
    subcategory: [
      {
        _id: 1,
        icon: "",
        title: "Category 1 1",
        ads: 21211,
      },
      {
        _id: 2,
        icon: "images/suggest/furniture.png",
        title: "Category 1 2",
        ads: 21211,
      },
      {
        _id: 3,
        icon: "images/suggest/furniture.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 4,
        icon: "images/suggest/furniture.png",
        title: "Category 1 4",
        ads: 21211,
      },
    ],
  },
  {
    _id: 3,
    name: "Home & Livings",
    icon: "images/suggest/properties.png",
    numberOfAds: 21211,
    subcategory: [
      {
        _id: 1,
        icon: "images/suggest/properties.png",
        title: "Category 1 1",
        ads: 21211,
      },
      {
        _id: 2,
        icon: "images/suggest/properties.png",
        title: "Category 1 2",
        ads: 21211,
      },
      {
        _id: 3,
        icon: "images/suggest/properties.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 4,
        icon: "images/suggest/properties.png",
        title: "Category 1 4",
        ads: 21211,
      },
    ],
  },
  {
    _id: 4,
    name: "Vehicles",
    icon: "images/suggest/electronics.png",
    numberOfAds: 21211,
    subcategory: [
      {
        _id: 1,
        icon: "images/suggest/electronics.png",
        title: "Category 1 1",
        ads: 21211,
      },
      {
        _id: 2,
        icon: "images/suggest/electronics.png",
        title: "Category 1 2",
        ads: 21211,
      },
      {
        _id: 3,
        icon: "images/suggest/electronics.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 4,
        icon: "",
        title: "Category 1 4",
        ads: 21211,
      },
    ],
  },
  {
    _id: 5,
    name: "Property",
    icon: "images/suggest/hospitality.png",
    numberOfAds: 21211,
    subcategory: [
      {
        _id: 1,
        icon: "images/suggest/hospitality.png",
        title: "Category 1 1",
        ads: 21211,
      },
      {
        _id: 2,
        icon: "images/suggest/hospitality.png",
        title: "Category 1 2",
        ads: 21211,
      },
      {
        _id: 3,
        icon: "images/suggest/hospitality.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 4,
        icon: "images/suggest/hospitality.png",
        title: "Category 1 4",
        ads: 21211,
      },
    ],
  },
  {
    _id: 6,
    name: "Pet & Animale",
    icon: "images/suggest/gadgets.png",
    numberOfAds: 21211,
    subcategory: [
      {
        _id: 1,
        icon: "images/suggest/food.png",
        title: "Category 1 1",
        ads: 21211,
      },
      {
        _id: 2,
        icon: "images/suggest/food.png",
        title: "Category 1 2",
        ads: 21211,
      },
      {
        _id: 3,
        icon: "images/suggest/food.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 4,
        icon: "images/suggest/food.png",
        title: "Category 1 4",
        ads: 21211,
      },
    ],
  },
  {
    _id: 7,
    name: "Fashion & Beauty",
    icon: "images/suggest/education.png",
    numberOfAds: 21211,
    subcategory: [
      {
        _id: 1,
        icon: "images/suggest/education.png",
        title: "Category 1 1",
        ads: 21211,
      },
      {
        _id: 2,
        icon: "images/suggest/education.png",
        title: "Category 1 2",
        ads: 21211,
      },
      {
        _id: 3,
        icon: "images/suggest/education.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 4,
        icon: "images/suggest/education.png",
        title: "Category 1 4",
        ads: 21211,
      },
      {
        _id: 5,
        icon: "images/suggest/education.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 6,
        icon: "images/suggest/education.png",
        title: "Category 1 4",
        ads: 21211,
      },
    ],
  },
  {
    _id: 14,
    name: "Hobbies, Sports & Kids",
    icon: "images/suggest/software.png",
    numberOfAds: 21211,
    subcategory: [
      {
        _id: 1,
        icon: "images/suggest/software.png",
        title: "Category 1 1",
        ads: 21211,
      },
      {
        _id: 2,
        icon: "images/suggest/software.png",
        title: "Category 1 2",
        ads: 21211,
      },
      {
        _id: 3,
        icon: "images/suggest/software.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 4,
        icon: "images/suggest/software.png",
        title: "Category 1 4",
        ads: 21211,
      },
    ],
  },
  {
    _id: 8,
    name: "Industry & Business",
    icon: "images/suggest/food.png",
    numberOfAds: 21211,
    subcategory: [
      {
        _id: 1,
        icon: "images/suggest/food.png",
        title: "Category 1 1",
        ads: 21211,
      },
      {
        _id: 2,
        icon: "images/suggest/food.png",
        title: "Category 1 2",
        ads: 21211,
      },
      {
        _id: 3,
        icon: "images/suggest/food.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 4,
        icon: "images/suggest/food.png",
        title: "Category 1 4",
        ads: 21211,
      },
    ],
  },
  {
    _id: 15,
    name: "Education",
    icon: "images/suggest/animals.png",
    numberOfAds: 21211,
    subcategory: [
      {
        _id: 1,
        icon: "images/suggest/animals.png",
        title: "Category 1 1",
        ads: 21211,
      },
      {
        _id: 2,
        icon: "images/suggest/animals.png",
        title: "Category 1 2",
        ads: 21211,
      },
      {
        _id: 3,
        icon: "images/suggest/animals.png",
        title: "Category 1 3",
        ads: 21211,
      },
      {
        _id: 4,
        icon: "images/suggest/animals.png",
        title: "Category 1 4",
        ads: 21211,
      },
    ],
  },
];
export default categories;
