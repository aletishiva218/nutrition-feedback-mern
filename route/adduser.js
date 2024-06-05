import userModel from "../Database/Modal.js";


const addUser = async (req,res) => {
    const userData = {
        username:req.body.username,
        useremail:req.body.useremail
    }
    const userExists = await userModel.findOne({useremail:useremail})
    if(!userExists) 
    await userModel.create(userData)
    res.status(200).json({status:true,message:"user added successfully"})
}

export default addUser;