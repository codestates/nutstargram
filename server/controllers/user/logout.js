module.exports = (req, res) => {
  if (req.url === '/logout') {
    return res.status(201).send({ message: 'ok' });
    // 쿠키 삭제 추가하기
  }
  res.status(500).send({ message: 'err' });
};
