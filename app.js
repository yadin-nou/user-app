import express from "express";
import path from "path";
// import file system
import fs from "fs";
const app = express();
const PORT = 8000;
const __dirname = path.resolve();
//serve static file from public directory for style or image
//we use path.join to make sure fit for every system which use different forward /slash
//app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "public")));
// use this urlencode when we use req.body and method post to recieved data from front end
app.use(express.urlencoded({ extended: true }));

//home page controller
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/html/index.html");
});

//user registration controler
app.get("/register", (req, res) => {
  console.log(req.query, "server get registration");
  res.sendFile(__dirname + "/src/html/registration.html");
});
app.post("/register", (req, res) => {
  const { txtName, Email, pwd } = req.body;
  const str = `${txtName},${Email},${pwd}`;
  //create file and write data
  const fileName = "userData.csv";
  fs.writeFile(fileName, str, (error) => {
    error ? console.log(error) : console.log("data has been written in file");
  });
  console.log(str);
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
