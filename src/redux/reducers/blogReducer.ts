import {
  BlogActionTypes,
  FETCH_BLOGS_FAILURE,
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_PINNED_BLOGS_REQUEST,
  FETCH_PINNED_BLOGS_SUCCESS,
  FETCH_PINNED_BLOGS_FAILURE,
} from "../actions/blogActions";

interface BlogState {
  blogs: any[];
  pinnedBlogs: any[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  pinnedBlogs: [],
  loading: false,
  error: null,
};

const blogReducer = (
  state = initialState,
  action: BlogActionTypes
): BlogState => {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
    case FETCH_PINNED_BLOGS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_BLOGS_SUCCESS:
      return { ...state, loading: false, blogs: action.payload };
    case FETCH_PINNED_BLOGS_SUCCESS:
      return { ...state, loading: false, pinnedBlogs: action.payload };
    case FETCH_BLOGS_FAILURE:
    case FETCH_PINNED_BLOGS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default blogReducer;
