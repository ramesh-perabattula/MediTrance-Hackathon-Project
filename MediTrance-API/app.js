const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI =
  process.env.MONGO_URI ||
  "mongodb+srv://Meditrance_API:Meditrance%40123@cluster0.oetsi.mongodb.net/meditrancedb?retryWrites=true&w=majority";
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

// MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/meditationdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//user model
const newUser = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
});

const User = mongoose.model("User", newUser);

//Favourite session model
const newFavSess = mongoose.Schema({
  title: String,
  min: Number,
  sec: Number,
  email: String,
});

const Favsess = mongoose.model("FavSess", newFavSess);

// Route to serve the welcome page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// Routes
app.get("/user_inf/:email", async (req, res) => {
  const { email } = req.params; // email_info is recieved from fornt_End by passing it to url ( params :) )
  // user_info have to be thrown to front
  try {
    const matched = await User.find({ email: email });

    res.status(200).json(matched);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// registration
app.post("/user_inf", async (req, res) => {
  const { name, email, password, age } = req.body;

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user instance with hashed password
    const newUser = new User({ name, email, password: hashedPassword, age });

    // Save the user to the database
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: error.message });
  }
});

// app.post('/user_inf/favsess', async (req, res) => {

//   const { title,min,sec,email} = req.body;
//   const favSess_inf = new Favsess({ title,min,sec, email });
//   try {
//     await favSess_inf.save();
//     res.status(201).json(favSess_inf);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// intake favsess and post it to database
app.post("/favsess", async (req, res) => {
  const { title, min, sec, email } = req.body;
  const favSess_inf = new Favsess({ title, min, sec, email });
  try {
    await favSess_inf.save();
    res.status(201).json(favSess_inf);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET the favsess of the user FROM DB and return it to client
app.get("/favsess/:email", async (req, res) => {
  const { email } = req.params; // front_info ->email is taken from fornt_End
  try {
    const matched = await Favsess.find({ email: email });

    res.status(200).json(matched);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists in the database
    const user = await User.findOne({ email });
    // console.log(user);
    // res.json(user);
    // ok
    if (!user) {
      // User not found, send error response

      return res
        .status(404)
        .json({ success: false, error: "Invalid email or password." });
    }
    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      // Passwords don't match, send error response
      return res
        .status(403)
        .json({ success: false, error: "Invalid email or password." });
    }
    res.json({ success: true, message: "Login successful", user: user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// for get age from database
app.get("/age/:email", async (req, res) => {
  const { email } = req.params; // front_info is taken from fornt_End
  try {
    const matched = await User.find({ email: email });
    // const ageret = matched[age];
    res.status(200).json(matched);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/favsess/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Favsess.findByIdAndDelete(id);
    res.status(200).send("Session deleted successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
