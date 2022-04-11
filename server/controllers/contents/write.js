const { contents } = require('../../models');

module.exports = async (req, res) => {
  console.log(req.body);
  const { user_id, content_img, content_text, content_emoji, content_weather } =
    req.body;
  //
  const diary = await contents.create({
    user_id: '',
    content_img,
    content_text,
    content_emoji,
    content_weather,
  });

  res.status(500);
};
