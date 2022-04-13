import axios from 'axios';
import { Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Edit_contents = () => {
  const handleEditContent = () => {
    axios({
      method: 'post',
      url: 'http://ec2-3-34-190-189.ap-northeast-2.compute.amazonaws.com/write',
    })
      .then(res => res.json)
      .then(res => {
        if (res.message === 'ok') {
          console.log('ok');
          Navigate('/main');
        }
      });
  };
  return (
    <div>
      <button className="btn-editcontents" onClick={handleEditContent}></button>
    </div>
  );
};

export default Edit_contents;
