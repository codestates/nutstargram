const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const { contents } = require('../../models');

module.exports = async (req, res) => {
  console.log(req.body);
  const { user_id, content_img, content_text, content_emoji, content_weather } =
    req.body;

  const diary = await contents.create({
    user_id,
    content_img,
    content_text,
  });

  if (diary) {
    res
      .status(200)
      .send({ data: { contentInfo: '컨텐츠 정보 넣기!' }, message: 'ok' });
  } else {
    res.status(400).send({ message: '변경할 수 없는 데이터' });
  }
};
