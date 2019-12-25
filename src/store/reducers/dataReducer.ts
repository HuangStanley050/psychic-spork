import { AppAction } from "../actions/actionTypes";

export interface DataState {
  data: {
    data: [];
  };
  loading: boolean;
}
const initialState: DataState = {
  data: {
    data: []
  },
  loading: false
};

const reducer = (state = initialState, action: AppAction) => {
  return state;
};

export default reducer;
