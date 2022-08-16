import express from "express";
import cors from "cors";
import functions from "firebase-functions";
import { getAllQuotes, addQuote } from "./functions.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://inspirational-quotes-cc.web.app",
      // "https://inspirational-quotes-cc.web.app/all-quotes",
      "http://localhost:3000",
    ],
  })
);

app.get("/all-quotes", getAllQuotes);
app.post("/add-quote", addQuote);

export const api = functions.https.onRequest(app);
// exports.app = functions.https.onRequest(app)
