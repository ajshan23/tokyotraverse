import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import adminRouter from "./routes/admin.routes.js"
import path from "path"
const app=express()


// const __dirname=path.resolve()


app.use(express.json(
    {
        limit:"16kb"
    }
))

app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(cookieParser())

app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))

app.use(express.static("public"))

app.use("/api/v1/users",userRouter)
app.use("/api/v1/admin",adminRouter)

// app.use(express.static(path.join(__dirname,"/frontend/dist")))

// app.get("*",(req,res)=>{
//      res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
// })
export {app}