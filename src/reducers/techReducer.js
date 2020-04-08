import * as types from '../actions/types';

const initialState = {
  techs: [],
  loading: false,
  error: null,
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case types.ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case types.DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case types.TECHS_ERROR:
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

export default techReducer;
