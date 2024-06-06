import userModel from "../Database/Modal.js";

const attemptQuestion = async (req,res) => {
    const {carbohydrates,proteins,fats,calcium,fiber,sodium_chloride,sucralose,sucrose,acesulfame_potassium,monosodium_glutamate,corn_syrup,dextrose,mannitol,honey} = req.body;
    const {useremail}  = req.params;
    const userExists = await userModel.findOne({useremail:useremail});
    if(!userExists)
         return res.status(404).json({status:false,message:"user does not exists"})

    const nutrition=userExists.nutrition;
    if(carbohydrates!=undefined)
        nutrition.carbohydrates=carbohydrates;
    if(proteins!=undefined)
        nutrition.proteins=proteins;
    if(fats!=undefined)
        nutrition.fats=fats;
    if(calcium!=undefined)
        nutrition.calcium=calcium;
    if(fiber!=undefined)
        nutrition.fiber=fiber;
    if(sodium_chloride!=undefined)
        nutrition.sodium_chloride=sodium_chloride;
    if(sucralose!=undefined)
        nutrition.sucralose=sucralose;
    if(sucrose!=undefined)
        nutrition.sucrose=sucrose;
    if(acesulfame_potassium!=undefined)
        nutrition.acesulfame_potassium=acesulfame_potassium;
    if(monosodium_glutamate!=undefined)
        nutrition.monosodium_glutamate=monosodium_glutamate;
    if(corn_syrup!=undefined)
        nutrition.corn_syrup=corn_syrup;
    if(dextrose!=undefined)
       nutrition.dextrose=dextrose;
    if(mannitol!=undefined)
        nutrition.mannitol=mannitol;
    if(honey!=undefined)
       nutrition.honey=honey;
    
    if(req.body.opinion)
        {
            await userModel.updateOne({useremail:useremail},{$set:{opinion:req.body.opinion}})
           return res.json({
                status:true,
                message:"saved"
            })
        }
    await userModel.updateOne({useremail:useremail},{$set:{nutrition:nutrition}})
    res.json({
        status:true,
        message:"updated"
    })
}

export default attemptQuestion;