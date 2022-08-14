import express from "express";
import cors from "cors";
import { getAllQuotes, addQuote } from "./src/functions.js";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/all-quotes", getAllQuotes);
app.post("/add-quote", addQuote);

//Replace with firebase functions later
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});
