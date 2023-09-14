const express = require("express");
require("dotenv").config();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const PORT = process.env.PORT
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(
    fileUpload({
        useTempFiles: true,
    })
);

app.use(cors());

app.use(`/api/v1/`, require("./route/blogRoute"))

app.all("*", (req, res, next) => {
    res.status(404).json({ msg: `requested path not found, try '/api/v1/'` });
    next();
  });

app.listen( PORT,async () => {
    console.log(`server is started @ http://localhost:${PORT}`)
})