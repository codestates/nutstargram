const { users } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // console.log('dddddddddd');
  try {
    // 전달받은 유저 정보
    const { username, password, mobile, email } = req.body;
    // 하나라도 놓치는 경우
    if (!username || !password || !mobile || !email) {
      return res.status(400).send('insufficient parameters');
    } else {
      // 다 충족한 경우
      await users
        .findOrCreate({
          // findOrCreate 사용
          where: { email: email }, // 해당 유저 이메일과 일치하는 정보 찾기
          defaults: {
            // 만약에 못 찾으면 아래 필드들 가지고 새롭게 생성
            username: username,
            password: password,
            mobile: mobile,
            email: email,
          },
        })
        .then(([result, created]) => {
          // 성공하면
          if (!created) {
            // 이미 존재하는 경우
            return res.status(409).send('e-mail already exists');
          } else {
            // 새로 생성한 경우
            const accessToken = generateAccessToken(result.dataValues);
            return res
              .status(201)
              .cookie('jwt', accessToken)
              .json({ message: 'ok' });
          }
        });
    }
  } catch (err) {
    // 오류 난 경우
    return res.status(500).send('err');
  }
};
// module.exports = (req, res) => {
//   console.log('aaaaaa', req.body);
// };
