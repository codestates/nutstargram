/* eslint-disable */
import styled from 'styled-components';

const MainPage = ({ userinfo, content }) => {
  console.log(content);
  return (
    <div className="Main">
      <PostContainer>
        <h2>내 일기장</h2>
        <div>
          {content ? (
            content.map(post => {
              return (
                <div key={post.id}>
                  <PostText>
                    <div>{post.createdAt}일 의 일기</div>
                    <br />
                    {post.content_text}
                  </PostText>
                </div>
              );
            })
          ) : (
            <div>로그인</div>
          )}
        </div>
      </PostContainer>
    </div>
  );
};

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
  border: 3px rgb(237, 198, 192) solid;
  border-radius: 6px;
`;
const PostText = styled.div`
  padding: 10px;
  margin-top: 1vh;
  margin-bottom: 1vh;
  text-align: center;
  width: 60vw;
  height: 10vh;
  border: 3px rgb(237, 198, 192) solid;
  border-radius: 6px;
`;

export default MainPage;
