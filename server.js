const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./src/app");
mongoose.set("strictQuery", false);


// database connection
const dbConnect = () => {
    try {
        mongoose.connect(process.env.DB_URL_SERVER).then(() => {
            console.log(`Database connection is Successfully`);
        })
    } catch (error) {
        console.log(error)
    }
}
dbConnect()



const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({
        error: err
    })
}

app.use(errorHandler)


// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
