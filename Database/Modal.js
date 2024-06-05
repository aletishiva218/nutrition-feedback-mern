import mongoose from "./config.js";

const Schema = mongoose.Schema({
    username:String,
    useremail:String,
    nutrition:Object,
    opinion:String
})

const userModel = new mongoose.model("user",Schema)

export default userModel;