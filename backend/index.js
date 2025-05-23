const express = require("express");
const app = express();
const ContactDetails=require("./router/Contactus")

// const database = require("./config/database");
// const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
const cors = require('cors');
const allowedOrigins = [
	"http://localhost:3002",  // local frontend
	"https://portfolio-sameer-yadav.vercel.app" // deployed frontend
  ];
  

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true // if you're using cookies or sessions
}));

dotenv.config();

const PORT = process.env.PORT || 4000;

//database connect
// database.connect();
//middlewares
app.use(express.json());

app.use("/api/v1/contact", ContactDetails);


//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

