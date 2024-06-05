import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

import users from "./route/users.js";
import addUser from "./route/adduser.js";
import attemptQuestion from "./route/attemptquestion.js";
import addUserMiddleware from "./route/middleware/addusermiddleware.js";


const app = express()
const port = process.env.PORT;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/users",users)
app.post("/user",addUserMiddleware.isAllDetails,addUserMiddleware.isCorrectDetails,addUser)
app.put("/user/:useremail",attemptQuestion)

app.listen(port,()=>console.log("Server is started at port",port))