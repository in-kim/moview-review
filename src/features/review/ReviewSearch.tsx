import Title from "@/Components/Title";
import { useState } from "react";
import { useAppDispatch } from "@/app/hooks";
import { filterReview } from "./reviewSlice";
import styled from "styled-components";
const ReviewSearch = () => {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState("");

  const search = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {target:{value}} = e;
    setKeyword(value);
    dispatch(filterReview(value));
  }
  return (
    <Wrapper>
      <Title>리뷰 검색</Title>
      <Input placeholder="영화 제목을 입력해 주세요." value={keyword} onChange={(e) => search(e)}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex:0; flex-shrink: 0;
  padding:20px;
  background-color: #fff;
  box-sizing: border-box;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;

  padding: 0 10px;
  box-sizing: border-box;
`;

export default ReviewSearch;
