export const SET_DATA = "SET_DATA";

export const setData = (data: string[]) => ({
  type: SET_DATA,
  payload: data,
});
