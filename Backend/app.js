const Express = require("express");
const Mongoose = require("mongoose");
const Colors = require("colors");
const path = require("path");
const userRoutes = require("./Routes/userRoutes");
const authRoutes = require("./Routes/authenticationRoutes");
const postRoutes = require("./Routes/postRoutes");
const commentRoutes = require("./Routes/commentRoute");
const dotenv = require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
});
const app = Express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT;
app.use(Express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: (origin, callback) => {
            if (allowedOrigins.includes(origin)) {
                console.log(origin, allowedOrigins);
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
Mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB is Connected".underline.blue);
    })
    .catch((Error) => {
        console.log(`An Error has Occured : ${Error}`.red);
    });

app.listen(PORT, () => {
    console.log(`App is Listening to the PORT ${PORT}`.underline);
});

app.use("/route/user", userRoutes);
app.use("/route/auth", authRoutes);
app.use("/route/post", postRoutes);
app.use("/route/comment", commentRoutes);

app.use(Express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
