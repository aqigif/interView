import * as types from '../types';
import {AsyncStorage} from 'react-native';
const initialState = {
  data: [],
  error: null,
  field: null,
  isLoading: false
}

function answer(state = initialState, action) {
  switch (action.type) {
    case "ANSWER":
      return {
        ...state,
        isLoading: true,
      };
      case "ANSWER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
    case "ANSWER_FULFILLED":
      return {
        ...state,
        isLoading: false
      };
    case "ANSWER_REJECTED":
      return {
        ...state,
        isLoading: false,
        field: action.payload.response.data.field,
        error: action.payload.response.data.message
      };

    default:
      return state
  }
}

export default answer