import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

app.get("/test/example", (req, res) => {
  res.send("Example request successfully");
});
