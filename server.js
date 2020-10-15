const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/motivation", (req, res) => {
  let { motivation } = req.body;

  if (motivation < 6 && motivation >= 1) {
    res.json({ message: "unmotivated" });
  } else if (motivation > 5 && motivation <= 10) {
    res.json({ message: "motivated" });
  }
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
