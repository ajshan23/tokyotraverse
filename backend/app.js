import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import adminRouter from "./routes/admin.routes.js"
import session from "express-session"
const app=express()


// const __dirname=path.resolve()




app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))
app.use(session({
  secret: 'annu', // Replace with a strong, unique secret
  saveUninitialized: false, // Only create session when data changes
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day in milliseconds
    sameSite: true, // Restrict cookie to same-site requests
    httpOnly: true, // Prevent JavaScript access for security
    secure: true, // Use only on HTTPS in production
  },
}));




app.use(express.json(
    {
        limit:"16kb"
    }
))

app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(cookieParser())

app.use(express.static("public"))

app.use("/api/v1/users",userRouter)
app.use("/api/v1/admin",adminRouter)

// app.use(express.static(path.join(__dirname,"/frontend/dist")))

// app.get("*",(req,res)=>{
//      res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
// })
export {app}