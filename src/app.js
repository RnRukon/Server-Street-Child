const express = require("express");
const cors = require("cors");
const app = express();
//middlewares
app.use(express.json());
app.use(cors());


app.use(express.static('./Public'));



// routers require

const users = require("./Routes/user.route");
const streetChild = require("./Routes/streetChild.route");
const organizations = require("./Routes/organizations.route");

// default route 

app.get("/", (req, res) => {
    res.send("Server is Running! YaY!");
});

// routes ------------------------
app.use("/api/v1/street-child/users", users);
app.use("/api/v1/street-child/streetChild", streetChild);
app.use("/api/v1/street-child/organizations", organizations);

app.use("*", (req, res, nex) => {
    res.status(404).send(`
    <div style="
    text-align:center;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    color: red ; 
    "><h1>Note Found Route (404)</h1></div>`)
})

module.exports = app;