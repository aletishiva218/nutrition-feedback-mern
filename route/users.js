import userModel from "../Database/Modal.js";

const users = async (req,res) => {
    const allUsers = await userModel.find({})
    res.status(200).json({users:allUsers})
}

export default users;