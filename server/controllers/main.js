const { contents, users } = require('../models');

module.exports = async (req, res) => {
  const { user_id } = req.body;
  console.log(user_id);
  const post = await contents.findAll({
    include: [
      {
        model: users,
      },
    ],
    where: {
      user_id,
    },
    attributes: { exclude: ['content_img'] },
  });

  if (post[0] === []) {
    // 어떻게 거르지
    res.status(400).send({ message: 'Empty Diary' });
  } else {
    res.status(200).send(post);
    // console.log(post[0].dataValues.user_id); // contents의 유저 아이디 나옴
  }
};
// 컨텐츠의 유저아이디는 유저스의 아이디(글쓴이와 동일하다)
