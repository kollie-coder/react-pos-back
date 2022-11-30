const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    categories: { type: Array },
    price: { type: Number, required: true },
   
},
  { timestamps: true  }
);

module.exports = mongoose.model("Product", ProductSchema)