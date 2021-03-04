import express from 'express';

if(true) {} 

const app = express();

app.get('/', function(req, res) {
  res.status(200).json({ hello: 'world!!!' });
});
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'name' });
});
export { app };
export default () => app.listen(3000);