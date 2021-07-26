import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../components/DataTypes";

const initialState = {
  isLoading: false,
  rockets: [],
  error: "",
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        isLoading: false,
        rockets: action.payload,
        error: "",
      };
    case FETCH_DATA_FAILURE:
      return {
        isLoading: false,
        rockets: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rocketReducer;
