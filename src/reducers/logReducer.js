import * as types from '../actions/types';

const initialState = {
  logs: [],
  corrent: null,
  loading: false,
  error: null,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case types.ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case types.DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case types.LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default logReducer;
