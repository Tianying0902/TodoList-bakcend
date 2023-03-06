import express from "express";
const app = express();
const PORT: number = 8080;
app.listen(PORT, () => {
  console.log(`server listening on port:${PORT}`);
});
