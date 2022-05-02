import styled from "styled-components";
import Title from "@/Components/Title";
import React, { useState } from "react";
import { useAppDispatch } from "@/app/hooks";
import { fetchReviewList } from "./reviewSlice";

const ReviewCreator = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [score, setScore] = useState("5");
  const reviewScore = [5, 4, 3, 2, 1]; // 별점 리스트

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (validation()) {
      let formData = {
        title:title,
        comment:comment,
        score: Number(score),
      };

      dispatch(fetchReviewList(formData));

      clear();
    }
  };

  const validation = () => {
    if (!title) {
      alert("제목을 입력해주세요!");
      return false;
    }
    if (!comment) {
      alert("내용을 입력해 주세요!");
      return false;
    }

    return true;
  };

  const clear = () =>{
    setTitle('');
    setComment('');
    setScore('5');
  }
  return (
    <Wrapper>
      <Title>신규 리뷰 등록</Title>
      <form onSubmit={onSubmit}>
        <InputWrapper>
          <Label>영화 제목</Label>
          <Input
            placeholder="제목을 입력해 주세요."
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>한줄평</Label>
          <Input
            placeholder="내용을 입력해 주세요."
            value={comment}
            onChange={({ target: { value } }) => setComment(value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>별점</Label>
          <Select
            name="score"
            value={score}
            onChange={({ target: { value } }) => setScore(value)}
          >
            {reviewScore.map((el, index) => (
              <option value={el} key={index}>
                {el}
              </option>
            ))}
          </Select>
        </InputWrapper>

        <Button type="submit">등록</Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0;
  flex-shrink: 0;
  padding: 20px;
  box-sizing: border-box;
`;
const InputWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #024959;
  text-align: left;
  margin-bottom: 10px;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #fff;

  padding: 0 10px;
  box-sizing: border-box;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  height: 40px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #fff;

  padding: 0 10px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  background-color: #BF6E26;
  border-radius: 10px;
  border:0;
`;

export default ReviewCreator;
