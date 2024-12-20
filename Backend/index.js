const express = require("express");
const app = express();
const port = 3000;
// const { Novels } = require("./conn.js");

var cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  // let data = await Novels.find();
  res.json([
    {
      name: "Life of the Wild",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit    Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna  commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
      image: "images/main-banner1.jpg",
    },
    {
      name: "Birds gonna be Happy",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit    Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna  commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
      image: "images/main-banner2.jpg",
    },
  ]);
});

app.get("/featuredBooks", async (req, res) => {
  // let data = await Novels.find();
  res.json([
    {
      id:101,
      image: "images/productitem1.jpg",
      bookName: "Simple way of piece life",
      bookWriter: "Armor Ramsey",
      price: "899 rs",
    },
    {
      id:102,
      image: "images/product-item2.jpg",
      bookName: "Great travel at desert",
      bookWriter: "Sanchit Howdy", 
      price: "750 rs",
    },
    {
      id:103,
      image: "images/product-item3.jpg",
      bookName: "The lady beauty Scarlett",
      bookWriter: "Arthur Doyle",
      price: "500 rs",
    },
    {
      id:105,
      image: "images/product-item4.jpg",
      bookName: "Once upon a time",
      bookWriter: "Klien Marry",
      price: "960 rs",
    },
  ]);
});

app.get("/popularBooks", async (req, res) => {
  // let data = await Novels.find();
  res.json([
    {
      image: "images/tab-item5.jpg",
      bookName: "Peaceful Enlightment",
      author: "Marmik Lama",
      price: "1200 rs",
    },
    {
      image: "./images/tab-item6.jpg",
      bookName: "Great travel at desert",
      author: "Sanchit Howdy",
      price: "300 rs",
    },
    {
      image: "images/tab-item7.jpg",
      bookName: "Life among the pirates",
      author: "David Woodard",
      price: "200 rs",
    },
    {
      image: "images/tab-item8.jpg",
      bookName: "Simple way of piece life",
      author: "Armor Ramsey",
      price: "400 rs",
    },
  ]);
});
app.get("/BestSellingBooks", async (req, res) => {
  // let data = await Novels.find();
  res.json([
    {
      author: "By Timbur Hood",
      bookName: "Birds gonna be happy",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit  Sed eu feugiat amet, libero ipsum enim pharetra hac.",
      price: " $ 49.00 ",
    },
  ]);
});
app.get("/blogs", async (req, res) => {
  // let data = await Novels.find();
  res.json([
    {
      id: 1,
      image: "images/post-img1.jpg",
      description: "  Reading books always makes the moments happy",
      date: "Mar 30, 2021",
      categorie: "inspiration",
    },
    {
      id: 2,
      image: "images/post-img2.jpg",
      description: "  Reading books always makes the moments happy",
      date: "Mar 30, 2021",
      categorie: "inspiration",
    },
    {
      id: 3,
      image: "images/post-img3.jpg",
      description: "Reading books always makes the moments happy",
      date: "Mar 30, 2021",
      categorie: "inspiration",
    },
  
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
