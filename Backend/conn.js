const mongoose = require("mongoose");

mongoose.connect("mongodb://rajendra0968jangid:TgTef6Y1rbOQeZsb@cluster0-shard-00-00.wyu84.mongodb.net:27017,cluster0-shard-00-01.wyu84.mongodb.net:27017,cluster0-shard-00-02.wyu84.mongodb.net:27017/mynoval?ssl=true&replicaSet=atlas-dolp18-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0");
mongoose.connection.on("connected", () => console.log("Database Connected"));
const { Schema } = mongoose;

const NovelSchema = new Schema({
  name: String,
  description: String,
  image: String,
});
const Novels = mongoose.model("Novels", NovelSchema);
module.exports={Novels}