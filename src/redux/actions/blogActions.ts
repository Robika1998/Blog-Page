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

export const FETCH_PINNED_BLOGS_REQUEST = "FETCH_PINNED_BLOGS_REQUEST";
export const FETCH_PINNED_BLOGS_SUCCESS = "FETCH_PINNED_BLOGS_SUCCESS";
export const FETCH_PINNED_BLOGS_FAILURE = "FETCH_PINNED_BLOGS_FAILURE";

interface FetchPinnedBlogsRequest {
  type: typeof FETCH_PINNED_BLOGS_REQUEST;
}

interface FetchPinnedBlogsSuccess {
  type: typeof FETCH_PINNED_BLOGS_SUCCESS;
  payload: any[];
}

interface FetchPinnedBlogsFailure {
  type: typeof FETCH_PINNED_BLOGS_FAILURE;
  payload: string;
}

export type BlogActionTypes =
  | FetchBlogsRequest
  | FetchBlogsSuccess
  | FetchBlogsFailure
  | FetchPinnedBlogsRequest
  | FetchPinnedBlogsSuccess
  | FetchPinnedBlogsFailure;

export const fetchBlogs = (
  filters: {
    authorId?: number;
    categoryId?: number;
    IsFavourite?: boolean;
    start?: string;
    end?: string;
    q?: string;
    sortBy?: string;
  } = {}
) => {
  return async (dispatch: Dispatch<BlogActionTypes>) => {
    dispatch({ type: FETCH_BLOGS_REQUEST });

    try {
      const params = new URLSearchParams();
      params.append("skip", "0");
      params.append("take", "5");

      if (filters.q) params.append("q", filters.q);
      if (filters.authorId)
        params.append("authorId", filters.authorId.toString());
      if (filters.categoryId)
        params.append("categoryId", filters.categoryId.toString());
      if (filters.IsFavourite !== undefined)
        params.append("IsFavourite", filters.IsFavourite.toString());
      if (filters.start) params.append("start", filters.start);
      if (filters.end) params.append("end", filters.end);
      if (filters.sortBy) params.append("sortBy", filters.sortBy);

      const response = await axios.get(
        `${Envriment.baseUrl}m/Blog?${params.toString()}`,
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

export const fetchPinnedBlogs = (skip: number = 0, take: number = 5) => {
  return async (dispatch: Dispatch<BlogActionTypes>) => {
    dispatch({ type: FETCH_PINNED_BLOGS_REQUEST });

    try {
      const params = new URLSearchParams();
      params.append("skip", skip.toString());
      params.append("take", take.toString());
      params.append("isPinned", "true");

      const response = await axios.get(
        `${Envriment.baseUrl}m/Blog?${params.toString()}`,
        { headers: { "Accept-Language": "ka" } }
      );

      dispatch({
        type: FETCH_PINNED_BLOGS_SUCCESS,
        payload: response.data.data,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_PINNED_BLOGS_FAILURE,
        payload: error.message,
      });
    }
  };
};
