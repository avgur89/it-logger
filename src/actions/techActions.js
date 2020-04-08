import * as types from './types';

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({ type: types.GET_TECHS, payload: data });
  } catch (error) {
    dispatch({ type: types.TECHS_ERROR, payload: error.response.data });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tech),
    });

    const data = await res.json();

    dispatch({ type: types.ADD_TECH, payload: data });
  } catch (error) {
    dispatch({ type: types.TECHS_ERROR, payload: error.response.data });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({ type: types.DELETE_TECH, payload: id });
  } catch (error) {
    dispatch({ type: types.TECHS_ERROR, payload: error.response.data });
  }
};

export const setLoading = () => ({ type: types.SET_LOADING });
