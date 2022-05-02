import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";
import * as types from "./types";
import { getLocalReview, setLocalReview, sortList } from "@/util";
const initialState: types.reviewState = {
  status: "idle",
  reviews:getLocalReview(),
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    filterReview: (state, action:PayloadAction<string>) => {
      let process:Array<types.reviewItem> | undefined = [];
      let reviews:Array<types.reviewItem> | undefined = getLocalReview();
      if(action.payload !== ""){
        process = reviews?.filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()))
      }else{
        process = getLocalReview();
      }

      state.reviews = process;
    },
    fetchReviewList: (state, action:PayloadAction<types.reviewItem>) => {
      const reviews = getLocalReview();
      let data = reviews !== undefined ? [...reviews as Array<types.reviewItem>] : [];

      action.payload.id = reviews !== undefined ? reviews?.length as number + 1 : 1; // id 추가
      data.push(action.payload);

      setLocalReview(data);
      state.reviews = sortList(data);;
    },
    removeRevieList: (state, action:PayloadAction<number>) => {
      let filterArr = state.reviews;
      filterArr = filterArr?.filter(item => item.id !== action.payload);

      if(filterArr){
        setLocalReview(filterArr);
        state.reviews = sortList(filterArr);
      }
    }
  }
});

export const {filterReview, fetchReviewList, removeRevieList} = reviewSlice.actions;

export const selectReviewList = (state: RootState) => state.review.reviews;


export default reviewSlice.reducer;
