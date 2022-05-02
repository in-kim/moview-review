import {reviewItem} from '@/features/review/types';

export const getLocalReview = () => {
  let data = localStorage.getItem("reviewList");

  return data !== null ? sortList(JSON.parse(data)) : undefined;
};

export const setLocalReview = (param:Array<reviewItem>) => {
  localStorage.setItem("reviewList", JSON.stringify(param));
}

export const sortList = (param:Array<reviewItem>) => {
  let data = [];

  data = param.sort((prevVal, val) => {
    if (prevVal.score! > val.score!) return -1;
    else if (prevVal.score! < val.score!) return 1;
    else if (prevVal.title > val.title) return 1;
    else if (prevVal.title < val.title) return -1;
    return 0;
  });

  return data;
}