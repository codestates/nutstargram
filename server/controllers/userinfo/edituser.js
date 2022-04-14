const { users } = require('../../models');
const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../tokenFunctions');
// 토큰인증 합니까???

module.exports = async (req, res) => {
  // users.update({뭘 업데이트 할 건지},
  //       {where:{어느 정보를 가진 row에서?}}
  // console.log('body!!!', req.body);
  const { username, mobile, password, email, user_img } = req.body;
  const { jwt } = req.cookies;
  // let edituser;
  if (jwt) {
    await users
      .update(
        {
          username,
          user_img,
          mobile,
          password,
        },
        {
          where: { email },
        },
      )
      .then(data => {
        if (data[0] === 1) {
          // console.log('@@@@@@@@@@@', edituser.username);
          res
            .status(200)
            .send({ data: { userInfo: '유저정보넣기!' }, message: 'ok' });
        } else {
          res.status(400).send({ message: '변경할 수 없는 데이터' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500);
      });
  } else {
    res.status(500);
  }
};
