import express from "express";

const app = express(); 
app.set("view engine", "ejs");
const port = 3000;

app.listen(port, () => {
  console.log(`Server is connected on port ${port}`);
});
