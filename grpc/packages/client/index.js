import helloClient from './helloClient.js';
import userClient from './userClient.js';
import app from './express.js';

app.get("/hello", (req, res) => {
  helloClient.sayHello(req.query, (err, result) => res.json(result));
});

app.start();
