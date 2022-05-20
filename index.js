const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true },
  () => {
    console.log("Connected to mongoDB!")
  }
)

//Middlewire connecting
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/user" , userRoute)
app.use("/api/auth",authRoute)



app.get("/", (req, res) => {
  res.send(" <h1> Homepage! </h1>")
})

// app.get("/user", (req, res) => {
//     res.send("<h1>Users Page!</h1>")
// })


const PORT = 8800 ; 
app.listen(PORT, () => {
  console.log(`Backend server is running at port ${PORT}`)
})
