const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Movies_Collections")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

// Schema

const movieSchema = new mongoose.Schema({
  movie: { type: String, required: true, minlength: 3, maxlength: 10 },   // in built minlenght,maxlength
  category: { 
    type: String,
    required: true,
    enum: ["comedy", "action", "thriller", "adventure", "historic"],
  },
  director: { type: String, required: true },
  cast: { type: String, required: true },
  hit: Boolean,
  collections: {
    type: String,
    required: function () {
      return this.hit;
    },
  },
});

// model

const moviesModel = mongoose.model("movies", movieSchema);

//
async function createMovies() {
  const movies = new moviesModel({
    movie: "SVP",
    category: "action",
    director:"Petla Parak",
    cast:"SSMB Keerthy Vennala kishore etc",
    hit:true,
    collections:"200 cr"

  });
  try{
    const result=await movies.save();
    console.log(result);
  }catch(err){
    console.log(err)
  }
}

createMovies();