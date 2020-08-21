export const SET_LOADING = 'loading/SET_LOADING';
export const RESET_LOADING = 'loading/RESET_LOADING';

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

//initialize function does not need to payload.
export const resetLoading = () => ({
  type: RESET_LOADING,
});
