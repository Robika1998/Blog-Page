import { Envriment } from "@/api/ApiManager";
import axios from "axios";
import { Dispatch } from "redux";

export const FETCH_BLOGS_REQUEST = "FETCH_BLOGS_REQUEST";
export const FETCH_BLOGS_SUCCESS = "FETCH_BLOGS_SUCCESS";
export const FETCH_BLOGS_FAILURE = "FETCH_BLOGS_FAILURE";

interface FetchBlogsRequest {
  type: typeof FETCH_BLOGS_REQUEST;
}

interface FetchBlogsSuccess {
  type: typeof FETCH_BLOGS_SUCCESS;
  payload: any[];
}

interface FetchBlogsFailure {
  type: typeof FETCH_BLOGS_FAILURE;
  payload: string;
}

export type BlogActionTypes =
  | FetchBlogsRequest
  | FetchBlogsSuccess
  | FetchBlogsFailure;

export const fetchBlogs = () => {
  return async (dispatch: Dispatch<BlogActionTypes>) => {
    dispatch({ type: FETCH_BLOGS_REQUEST });

    try {
      const response = await axios.get(
        Envriment.baseUrl + "m/Blog?skip=0&take=4",
        { headers: { "Accept-Language": "ka" } }
      );
      dispatch({
        type: FETCH_BLOGS_SUCCESS,
        payload: response.data.data,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_BLOGS_FAILURE,
        payload: error.message,
      });
    }
  };
};
