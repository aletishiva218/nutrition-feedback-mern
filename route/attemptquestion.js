import userModel from "../Database/Modal.js";

const attemptQuestion = async (req,res) => {
    const {carbohydrates,proteins,fats,calcium,fiber,sodium_chloride,sucralose,sucrose,acesulfame_potassium,monosodium_glutamate,corn_syrup,dextrose,mannitol,honey} = req.body;
    const {useremail}  = req.params;
    const userExists = await userModel.findOne({useremail:useremail});
    if(!userExists)
         return res.status(404).json({status:false,message:"user does not exists"})
    const attemptQuestion={
        nutrition:{
        }
    }

    if(carbohydrates!=undefined)
        attemptQuestion.nutrition.carbohydrates=carbohydrates;
    if(proteins!=undefined)
        attemptQuestion.nutrition.proteins=proteins;
    if(fats!=undefined)
        attemptQuestion.nutrition.fats=fats;
    if(calcium!=undefined)
        attemptQuestion.nutrition.calcium=calcium;
    if(fiber!=undefined)
        attemptQuestion.nutrition.fiber=fiber;
    if(sodium_chloride!=undefined)
        attemptQuestion.nutrition.sodium_chloride=sodium_chloride;
    if(sucralose!=undefined)
        attemptQuestion.nutrition.sucralose=sucralose;
    if(sucrose!=undefined)
        attemptQuestion.nutrition.sucrose=sucrose;
    if(acesulfame_potassium!=undefined)
        attemptQuestion.nutrition.acesulfame_potassium=acesulfame_potassium;
    if(monosodium_glutamate!=undefined)
        attemptQuestion.nutrition.monosodium_glutamate=monosodium_glutamate;
    if(corn_syrup!=undefined)
        attemptQuestion.nutrition.corn_syrup=corn_syrup;
    if(dextrose!=undefined)
        attemptQuestion.nutrition.dextrose=dextrose;
    if(mannitol!=undefined)
        attemptQuestion.nutrition.mannitol=mannitol;
    if(honey!=undefined)
        attemptQuestion.nutrition.honey=honey;
    
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