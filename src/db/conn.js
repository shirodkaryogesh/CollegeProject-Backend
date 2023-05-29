const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://user:user123@cluster0.p3carlj.mongodb.net/Diet", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect is successful");
  })
  .catch((e) => {
    console.log("no connection");
  });
