const { default: mongoose } = require("mongoose");
const chalk = require("chalk");

const DB_URL = "mongodb://127.0.0.1:27017/shop-project";
mongoose.set("strictQuery", true);
mongoose.connect(DB_URL);

mongoose.connection.on("open", () => {
    console.log(chalk.blue("mongoose connected successfully\n"));
});
mongoose.connection.on("error", (err) => {
    console.log(chalk.red("mongoose not connected\n"));
    console.log(err);
});
