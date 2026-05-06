const express = require ("express");
const helmet = require( "helmet");
const cors = require("cors");
const hpp = require("hpp");
const rateLimiter = require("./src/middleware/rateLimiter.js");
const patientRoutes = require("./src/routes/patientRoutes.js");
const dotenv = require("dotenv");

const connectDB = require('./src/config/db.js');
connectDB();

dotenv.config();

const app = express();


app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString(); // keep exact raw request data
  }
}));


//app.use(express.urlencoded({ extended: true }));


//const bodyParser = require("body-parser")
//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.json());

app.use(helmet());
app.use(cors());
app.use(hpp()); // HTTP parameter pollution prevention
app.use(express.json());
app.use(rateLimiter);

app.use("/api/patients", patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));