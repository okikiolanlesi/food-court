const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const brandRouter = require("./routes/brandRoutes");
const userRouter = require("./routes/userRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/AppError");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

// Middleware
app.use(morgan("dev"));

app.use(helmet());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour",
});

app.use("/api", limiter);

app.use(
  hpp({
    whitelist: ["tags", "author", "state", "timestamp"],
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));

// Routes
app.use("/brands", brandRouter);
app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to My Developer Assessment Solution",
    linkToPostman: "https://documenter.getpostman.com/view/22751768/2s8Z76uU8e",
    ps: "Kindly replace 'http://localhost:4000' with 'https://food-court-eswk.onrender.com' in the postman collection if you would like to test using the live link",
  });
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware;
app.use(globalErrorHandler);

module.exports = app;
