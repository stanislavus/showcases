// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  switch(req.method) {
    case 'GET':
      res.status(200).json({ name: 'John Doe' });
      break;
    case 'POST':
      res.status(200).json({ name: 'John Doe post' });
      break;
    default:
      res.status(404).json({ error: 'The endpoint does not support the method'});
  }

}
