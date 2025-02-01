import { Envriment } from "@/api/ApiManager";
import { Dispatch } from "react";

export const FETCH_BLOG_CATEGORIES_REQUEST = "FETCH_BLOG_CATEGORIES_REQUEST";
export const FETCH_BLOG_CATEGORIES_SUCCESS = "FETCH_BLOG_CATEGORIES_SUCCESS";
export const FETCH_BLOG_CATEGORIES_FAILURE = "FETCH_BLOG_CATEGORIES_FAILURE";

export const FETCH_BLOG_AUTHORS_REQUEST = "FETCH_BLOG_AUTHORS_REQUEST";
export const FETCH_BLOG_AUTHORS_SUCCESS = "FETCH_BLOG_AUTHORS_SUCCESS";
export const FETCH_BLOG_AUTHORS_FAILURE = "FETCH_BLOG_AUTHORS_FAILURE";

export const fetchBlogCategories = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: FETCH_BLOG_CATEGORIES_REQUEST });

    try {
      const response = await fetch(
        Envriment.baseUrl + "m/BlogCategories?skip=0&take=10",
        {
          method: "GET",
          headers: {
            Accept: "text/plain",
            "Accept-Language": "ka",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data = await response.json();
      dispatch({ type: FETCH_BLOG_CATEGORIES_SUCCESS, payload: data.data });
    } catch (error: any) {
      dispatch({ type: FETCH_BLOG_CATEGORIES_FAILURE, payload: error.message });
    }
  };
};

export const fetchBlogAuthors = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: FETCH_BLOG_AUTHORS_REQUEST });

    try {
      const response = await fetch(
        Envriment.baseUrl + "m/BlogAuthors?skip=0&take=7",
        {
          method: "GET",
          headers: {
            Accept: "text/plain",
            "Accept-Language": "ka",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch authors");
      }

      const data = await response.json();
      dispatch({ type: FETCH_BLOG_AUTHORS_SUCCESS, payload: data.data });
    } catch (error: any) {
      dispatch({ type: FETCH_BLOG_AUTHORS_FAILURE, payload: error.message });
    }
  };
};
