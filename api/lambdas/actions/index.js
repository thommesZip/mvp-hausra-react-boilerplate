const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const customActionFunctions = fs.readdirSync('./lambdas/actions')
  .reduce((p, f) => {
    if (f === 'index.js') return p;
    const a = require(`./${f}`).default;
    console.log(a)
    return [...p, {path: `/${f.split(".")[0]}`, "function": a}];
  },
  []
  );
console.log("Actions available:",customActionFunctions)

app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1.0' });
});

customActionFunctions.forEach( a => {
    app.post(`/actions${a.path}`, a.function)
});


//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);