import { fsConnect } from "./fsConnect.js";

function handleError(err, res) {
  console.error(err);
  res.status(500).send(err);
}

export function getAllQuotes(req, res) {
  const db = fsConnect();
  db.collection("quotes")
    .get()
    .then((collection) => {
      const quotes = collection.docs.map((doc) => {
        let quote = doc.data();
        quote.id = doc.id
        return quote
      });

      res.send(quotes);
    })
    .catch((err) => handleError(err, res));
}

export function getOneQuote(req, res) {
  const db = fsConnect();
  db.collection("quotes")
    .doc(req.params.quoteId)
    .get()
    .then((quote) => {
      let thisQuote = quote.data();
      thisQuote.id = quote.id;
      res.send(quote);
    })
    .catch((err) => handleError(err, res));
}

export function addQuote(req, res) {
  const db = fsConnect();
  const newQuote = req.body;
  db.collection("quotes")
    .add(newQuote)
    .then((doc) => {
      res.status(201).send({
        success: true,
        id: doc.id,
      });
    })
    .catch((err) => handleError(err, res));
}
