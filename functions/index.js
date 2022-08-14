import express from "express";
import cors from "cors";
import functions from "firebase-functions";
import { getAllQuotes, addQuote } from "./functions.js";

const app = express();

app.use(express.json());

app.get("/all-quotes", getAllQuotes);
app.post("/add-quote", addQuote);

export const api = functions.https.onRequest(app);
