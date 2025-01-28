interface ExampleState {
  data: string[];
}

const initialState: ExampleState = {
  data: [],
};

const SET_DATA = "SET_DATA";

interface SetDataAction {
  type: typeof SET_DATA;
  payload: string[];
}

type ExampleActionTypes = SetDataAction;

const exampleReducer = (
  state = initialState,
  action: ExampleActionTypes
): ExampleState => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default exampleReducer;
