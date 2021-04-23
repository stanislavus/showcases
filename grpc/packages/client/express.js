import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.start = () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("Server running at port %d", PORT);
  });
};

export default app;

