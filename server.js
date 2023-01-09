const dbConnect = require("./db/connectDb");
require("dotenv").config();
const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION, Shutting down ...");
  process.exit();
});

dbConnect();

const port = process.env.PORT || 3000;

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION, Shutting down ...");
  process.exit();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
