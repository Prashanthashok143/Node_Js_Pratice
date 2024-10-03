const mongoose = require("mongoose");

//connect

mongoose
  .connect("mongodb://localhost:27017/Skills")
  .then(() => console.log("DB is Connected"))
  .catch((Err) => console.log(Err));

// Schema

const skillsSchema = new mongoose.Schema({});

// model

const skillsModel = mongoose.model("skills", skillsSchema);

async function getData() {
  const result1 = await skillsModel.find();
  // it gives all the documents
  const result2 = await skillsModel
    .find()
    .select({ name: 2 })
    .sort({ name: 1 });
  // it finds the data with only names in asceding order (if gives -1 in sort , gives descending)
  const result3 = await skillsModel.find({ name: "Shirisha Shanigarapu" });
  // it gives only particuraly document
  const result4 = await skillsModel.find({ rating: { $gte: 3 } });
  // it gives grater than or equals to 3 documents from database collection
  // gte - >=
  //gt - >
  // eq - =
  // lt - <
  // lte - <=

  const result5 = await skillsModel.find({ rating: { $in: [3, 4.5] } });
  // in operator gives specific value is there only not approxaimtely
  // in
  // not in

  const result6 = await skillsModel
    .find()
    .or([{ name: "Prashanth Shanigarapu" }, { rating: 5 }]); // pass obj in arr ([{}])
  // here name is true and rating false -- or condition is satisified     

  const result7 = await skillsModel
    .find()
    .and([{ name: "Prashanth Shanigarapu" }, { rating: 5 }]);

  // here name is true and rating false -- and condition is not satisified returns empty arry

  console.log(result1, "Result 1");
  console.log(result2, "Result 2");
  console.log(result3, "Result 3");
  console.log(result4, "Result 4");
  console.log(result5, "Result 5");
  console.log(result6, "Result 6");
  console.log(result7, "Result 7");

  console.log("Data is successfully retrived");
}
getData();
