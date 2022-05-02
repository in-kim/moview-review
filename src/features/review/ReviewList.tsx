import styled from "styled-components";
import Title from "@/Components/Title";

import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { selectReviewList, removeRevieList } from "./reviewSlice";

import {reviewItem} from './types';

const ReviewList = () => {
  const review = useAppSelector(selectReviewList);
  const dispatch = useAppDispatch();
  let reviewProcess: reviewItem[] = [];

  review?.forEach(el => {
    let scoreArr = [];

    for(let i=1; i <= el.score!; i++){
      scoreArr.push(i);
    }
    reviewProcess.push({
      'id':el.id,
      'title':el.title,
      'comment':el.comment,
      'scoreArr':scoreArr
    })
  });

  const deleteList = (id:number | undefined) => {
    if(id){
      dispatch(removeRevieList(id));
    }
  }

  return (
    <Wrapper>
      <Title>리뷰 내역</Title>
      <CardWrapper>
        {reviewProcess.length >= 1 ? (
          reviewProcess.map((el) => (
            <Card key={el.id}>
              <CardTitle>{el.title}</CardTitle>
              <CartBtnDelete onClick={() => deleteList(el.id)}>🗑</CartBtnDelete>

              <CardDesc>{el.comment}</CardDesc>
              <CardScoreWrapper>
                {
                  el.scoreArr?.map((key:number) => (
                    <CardScore key={key}>⭐️</CardScore>
                  ))
                }
              </CardScoreWrapper>
            </Card>
          ))
        ) : (
          <div>리뷰가 없습니다.</div>
        )}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
`;
const CardWrapper = styled.div`
width: 100%;
  height:calc(100% - 42px);
  overflow: auto;
`;

const Card = styled.div`
  position:relative;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;
const CardTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #024959;
  text-align: left;
  margin-bottom: 10px;
`;
const CartBtnDelete = styled.button`
  position:absolute; top:20px; right:20px;
  border:0; background-color: transparent;
  padding:0;
`;
const CardDesc = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #024959;
  text-align: left;
  margin-bottom: 20px;
`;
const CardScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CardScore = styled.span`
  flex: 0 0 25px;
  height: 25px;
  box-sizing: border-box;
  border-radius: 50%;
`;

export default ReviewList;
