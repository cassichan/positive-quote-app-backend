import express from "express";
import cors from "cors";
import functions from "firebase-functions";
import { getAllQuotes, addQuote, getOneQuote } from "./functions.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://inspirational-quotes-cc.web.app",
      "http://localhost:3000",
    ],
  })
);

app.get("/all-quotes", getAllQuotes);
app.get("/quote/:quoteId", getOneQuote);
app.post("/add-quote", addQuote);

export const api = functions.https.onRequest(app);
