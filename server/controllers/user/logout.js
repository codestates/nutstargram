module.exports = (req, res) => {
  if (req.url === '/logout') {
    return res.status(200).send({ message: 'ok' });
    // 쿠키 삭제 추가하기
  }
  res.status(500).cookie('jwt', null).send({ message: 'err' });
  // 쿠키를 null로 줘서 밀어버리기
};
