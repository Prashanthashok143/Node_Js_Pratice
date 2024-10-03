const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Skills")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

const skillsSchema = new mongoose.Schema({});
const skillsModel = mongoose.model("skills", skillsSchema);
async function deleteData(id) {
  const data = await skillsModel.findByIdAndDelete(id);
  console.log(data);
}
deleteData("66fcf98aa74dc34e0137dc0c");
