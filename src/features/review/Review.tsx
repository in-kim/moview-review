import styled from "styled-components";

import ReviewList from "./ReviewList";
import ReviewCreator from "./ReviewCreator";
import ReviewSearch from "./ReviewSearch";

const Review = () => {
  return (
    <Wrapper>
      <Content>
        <ReviewCreator />
        <ReviewSearch />
        <ReviewList />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  margin:0 auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Review;
