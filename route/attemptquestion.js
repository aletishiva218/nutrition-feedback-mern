import userModel from "../Database/Modal.js";

const attemptQuestion = async (req,res) => {
    const {carbohydrates,proteins,fats,calcium,fiber,sodium_chloride,sucralose,sucrose,acesulfame_potassium,monosodium_glutamate,corn_syrup,dextrose,mannitol,honey} = req.body;
    const {useremail}  = req.params;
    const userExists = await userModel.findOne({useremail:useremail});
    if(!userExists)
         return res.status(404).json({status:false,message:"user does not exists"})
    const attemptQuestion={
        nutrition:{
            carbohydrates:(carbohydrates!=undefined)?carbohydrates:null,
            proteins:(proteins!=undefined)?proteins:null,
            fats:(fats!=undefined)?fats:null,
            calcium:(calcium!=undefined)?calcium:null,
            fiber:(fiber!=undefined)?fiber:null,
            sodium_chloride:(sodium_chloride!=undefined)?sodium_chloride:null,
            sucralose:(sucralose!=undefined)?sucralose:null,
            sucrose:(sucrose!=undefined)?sucrose:null,
            acesulfame_potassium:(acesulfame_potassium!=undefined)?acesulfame_potassium:null,
            monosodium_glutamate:(monosodium_glutamate!=undefined)?monosodium_glutamate:null,
            corn_syrup:(corn_syrup!=undefined)?corn_syrup:null,
            dextrose:(dextrose!=undefined)?dextrose:null,
            mannitol:(mannitol!=undefined)?mannitol:null,
            honey:(honey!=undefined)?honey:null
        }
    }
    
    if(req.body.opinion)
        {
            await userModel.updateOne({useremail:useremail},{$set:{opinion:req.body.opinion}})
           return res.json({
                status:true,
                message:"saved"
            })
        }
    await userModel.updateOne({useremail:useremail},{$set:attemptQuestion})
    res.json({
        status:true,
        message:"updated"
    })
}

export default attemptQuestion;