import express from "express";
import "./config/dotenv.js";
import router from "./routes/chars.js";
import cors from "cors";

const app = express();

app.use("/chars", router);
app.use(cors());

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>'
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
