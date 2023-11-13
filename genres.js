const express = require("express");
const Joi = require("joi");
const log = require("./logger");
const morgan = require("morgan");
const config =require("config")
const authenticate = require("./authentication");
const app = express();
app.use(express.json());
// app.use(authenticate);
// app.use(log);

if (app.get("env")   === "development") {
  app.use(morgan("tiny"));
}

const genres = [
  { id: 1, title: "horor" },
  { id: 2, title: "comedy" },
  { id: 3, title: "drama" },
  { id: 4, title: "mysterious" },
  { id: 5, title: "action" },
];

function validateSchema(body) {
  const schema = Joi.object({
    title: Joi.string().required(),
  });
  return (result = schema.validate(body));
}

app.post("/api/genres", (req, res) => {
  const { error } = validateSchema(req.body);
  if (error) {
    return res.status(400).send({
      status: 400,
      message: error.details[0].message,
    });
  }
  const newGenre = { id: genres.length + 1, ...req.body };
  genres.push(newGenre);
  res.status(200).send(newGenre);
});

app.put("/api/genres/:id", (req, res) => {
  const { error } = validateSchema(req.body);
  const genre = genres.find((obj) => obj.id === parseInt(req.params.id));
  if (!genre) {
    return res.status(404).send({
      status: 404,
      message: "not found",
    });
  }
  if (error) {
    return res.status(400).send({
      status: 400,
      message: error.details[0].message,
    });
  }
  genre.title = req.body.title;
  res.status(200).send(genre);
});

app.get("/api/genres", (req, res) => {
  res.status(200).send(genres);
});

// console.log(`Application Name: ${config.get('name')}`);
// console.log(`main server ${config.get('mail.host')}`);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
