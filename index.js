import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { signJWT, verifyJWT } from "./ultils/jwt.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

console.log(signJWT({username: "testuser" , userId : "12345689"}))
console.log(verifyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwidXNlcklkIjoiMTIzNDU2ODkiLCJpYXQiOjE3Nzk1NDkxMzksImV4cCI6MTc3OTU0OTczOX0.eVhTqGn9RytvEIR6vje8BVkd3fz00iBK3yb3R3glUwU"))

app.listen(5050 , ()=>{
    console.log("Server is Running at port 5050")
})