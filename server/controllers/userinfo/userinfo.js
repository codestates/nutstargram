const { users } = require('../../models');

module.exports = async (req, res) => {
  // rep 에 이메일 받으면??
  // 이메일로 findOne 찾아서
  // 해당유저 contents 의 이미지와 text보여주기
  // console.log(req.cookies.jwt);
  const userToken = req.cookies.jwt;
  const { email } = req.body;
  // console.log(email);
  const mainUser = await users.findOne({
    where: { email: email },
    attributes: [
      'id',
      'username',
      'mobile',
      'password',
      'user_img',
      'createdAt',
    ],
  });
  if (mainUser) {
    // console.log(mainUser);
    res.status(200).send({ data: { userInfo: mainUser }, message: 'ok' });
    // console.log(res);
  } else {
    res.status(400).send({ message: '다시 보내주세요' });
  }

  // res.status(500);
};
