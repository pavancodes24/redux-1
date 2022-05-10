//action creator
// it is a function which returns an object
// an action is an  object with a key called type,
// to define what the action is

import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes";

//payload ,etc...
export const addCounter = (payload) => {
  return {
    type: ADD_COUNTER,
    payload
  };
};

export const reduceCounter = (payload) => {
  return {
    type: REDUCE_COUNTER,
    payload
  };
};
