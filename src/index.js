const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// we use this function when we want to desiable our setTimeout, for example we may be working
// on server, and 503 means that server is not avaliable now
// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down check back soon!");
// });

// allow express to get incoming json data via req.body
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
