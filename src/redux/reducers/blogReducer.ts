import {
  BlogActionTypes,
  FETCH_BLOGS_FAILURE,
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
} from "../actions/blogActions";
interface BlogState {
  blogs: any[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

const blogReducer = (
  state = initialState,
  action: BlogActionTypes
): BlogState => {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_BLOGS_SUCCESS:
      return { ...state, loading: false, blogs: action.payload };
    case FETCH_BLOGS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default blogReducer;
