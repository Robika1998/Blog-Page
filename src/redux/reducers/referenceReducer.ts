import {
  FETCH_BLOG_AUTHORS_FAILURE,
  FETCH_BLOG_AUTHORS_REQUEST,
  FETCH_BLOG_AUTHORS_SUCCESS,
  FETCH_BLOG_CATEGORIES_FAILURE,
  FETCH_BLOG_CATEGORIES_REQUEST,
  FETCH_BLOG_CATEGORIES_SUCCESS,
} from "../actions/referenceActions";

const initialState = {
  categories: [],
  authors: [],
  loading: false,
  error: null,
};

const referenceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_BLOG_CATEGORIES_REQUEST:
    case FETCH_BLOG_AUTHORS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_BLOG_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        // categories: action.payload,
        categories: action.payload || [], 
      };

    case FETCH_BLOG_AUTHORS_SUCCESS:
      return {
        ...state,
        loading: false,
        authors: action.payload,
      };

    case FETCH_BLOG_CATEGORIES_FAILURE:
    case FETCH_BLOG_AUTHORS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default referenceReducer;
