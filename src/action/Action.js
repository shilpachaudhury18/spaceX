import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../components/DataTypes";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (rockets) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: rockets,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchLaunch = (year, launch, land) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    let url = "https://api.spacexdata.com/v3/launches?limit=100";

    if (year) {
      url = `${url}${year}`;
    }
    if (launch) {
      url = `${url}${launch}`;
    }
    if (land) {
      url = `${url}${land}`;
    }
    axios
      .get(url)
      .then((response) => {
        const rockets = response.data;
        console.log(response.data);
        dispatch(fetchDataSuccess(rockets));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg));
      });
  };
};
