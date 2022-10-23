const express = require("express")
const app = express()

const dotnev = require("dotenv")
const mongoose = require("mongoose")
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")

const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/users")
const contactRoutes = require("./routes/contacts")
const forgetPasswordRoutes = require("./routes/forgetPassword")

dotnev.config()
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("MongoDB Connection Is Successfull.");
  })
  .catch(err => {
    console.log(err);
  })

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))


app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/contacts", contactRoutes)
app.use("/api/v1/reset_password", forgetPasswordRoutes)


app.listen(process.env.APP_PORT || 8000, () => {
  console.log("Api Server Is Running...");
})