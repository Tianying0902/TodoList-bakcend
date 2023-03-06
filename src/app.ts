import express from "express";
import cors from "cors";
import routes from "./Routes/index";
const app = express();
const PORT: number = 8080;
app.use(cors());
app.use(routes);
app.listen(PORT, () => {
  console.log(`server listening on port:${PORT}`);
});
