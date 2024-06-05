import Joi from "joi";

const addUserMiddleware = {
    isAllDetails:(req,res,next)=>{
        const {username,useremail} = req.body;
        const errors = {};
        if(!username) errors.username="username is required";
        if(!useremail) errors.useremail="useremail is required";

        if(!(username && useremail))
            return res.status(404).json({status:false,message:errors})
        next()
    },
    isCorrectDetails:(req,res,next)=>{
        const schema = Joi.object({
            username: Joi.string().min(3).max(30),
            useremail: Joi.string().email({minDomainSegments:1,tlds:{allow:['com']}}),
        })

        const {error} = schema.validate(req.body,{abortEarly:false})
        if(error)
            {
                    const errors = error.details;
                    const displayErrors = [];
                    for(let err of errors){
                        const errorPath = err.path[0];
                        if(errorPath == "username") displayErrors.push("name must be string,minimum 2 and maximum 100 characters")
                        if(errorPath == "useremail") displayErrors.push("invalid email format")
                    }
                return res.status(406).json({status:false,errors:displayErrors})
            }
        next()
    }
}

export default addUserMiddleware;