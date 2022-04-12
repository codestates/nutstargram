const { contents } = require('../models');

module.exports = async (req, res) => {
  // console.log(req.body.user_id);
  const content_user_id = req.body.user_id;
  const find_content = await contents.findAll({
    where: { user_id: content_user_id },
  });
  if (find_content) {
    res.status(200).send(find_content);
    // console.log(find_content);
  } else {
    res.status(400).send({ message: 'Empty Diary' });
  }

  // 클라에서 컨텐츠의 유저 아이디로 요청을 보내야함

  // 유저아이디 받으면 findOne으로 조회
  // 응답에  컨텐츠 이미지, 글 ,이모지, 웨더 넣어 반환
};
// 컨텐츠의 유저아이디는 유저스의 아이디(글쓴이와 동일하다)
