module.exports = (req, res) => {
  if (req.url === '/logout') {
    return res.status(201).send({ message: 'ok' });
  }
  res.status(500).send({ message: 'err' });
};
