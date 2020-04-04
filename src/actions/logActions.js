import * as types from './types';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: types.GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: types.LOGS_ERROR, payload: error.response.data });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: types.ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: types.LOGS_ERROR, payload: error.response.data });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: types.DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({ type: types.LOGS_ERROR, payload: error.response.data });
  }
};

export const setLoading = () => ({ type: types.SET_LOADING });
