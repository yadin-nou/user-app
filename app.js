import express from "express";
import path from "path";
const app = express();
const PORT = 8000;
const __dirname = path.resolve();
//serve static file from public directory for style or image
//we use path.join to make sure fit for every system which use different forward /slash
//app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "public")));
//console.log(__dirName);

//home page controller
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/html/index.html");
});

//user registration controler
app.get("/registration", (req, res) => {
  res.sendFile(__dirname + "/src/html/registration.html");
});

//user login Controller
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/src/html/login.html");
});
//send jsonfile
// app.get("/api/v1/get-user", (req, res) => {
//   res.json({
//     fName: "yadin",
//     fLast: "nou",
//   });
// });
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("http://localhost:8000");
});
