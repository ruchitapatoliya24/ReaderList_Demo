import axios from 'axios';
import {getRequestApi, postRequestWithFormDataApi} from '.';
import {
  LIST1,
  LIST1_ERROR,
  LIST1_SUCCESS,
  LIST2,
  LIST2_ERROR,
  LIST2_SUCCESS,
} from '../redux/actions/authenticate';

export const list1Api = async (dispatch) => {
    try {
      dispatch({type: LIST1});
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const finalRes = response.json();
      if (!finalRes?.error) {
        dispatch({type: LIST1_SUCCESS, payload: finalRes});
      } else {
        dispatch({type: LIST1_ERROR, payload: finalRes.message});
      }
      return finalRes;
    } catch (error) {
      dispatch({type: LIST1_ERROR, payload: error});
      return error;
    }
};

export const list2Api = async (dispatch) => {
  try {
    dispatch({type: LIST2});
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const finalRes = response.json();
    if (!finalRes?.error) {
      dispatch({type: LIST2_SUCCESS, payload: finalRes});
    } else {
      dispatch({type: LIST2_ERROR, payload: finalRes.message});
    }
    return finalRes;
  } catch (error) {
    dispatch({type: LIST2_ERROR, payload: error});
    return error;
  }
};
