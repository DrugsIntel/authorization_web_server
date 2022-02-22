const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const app = express();
const corsOptions = {
    origin: "http://localhost:8081"
};
const db = require("./models/db");
const PORT = 8080;

// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.json({message: "Welcome to auth application."});
});

db.sequelize.sync();

// routes
require('./routes/route.user')(app);
require('./routes/route.auth')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});