import axios from "axios";
import { getRequest, getSuccess, getFailed, getError } from "./animalSlice";

export const getAllAnimals = (adminID) => async (dispatch) => {
  dispatch(getRequest());
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/animals/${adminID}`
    );
    if (response.data.message) {
      dispatch(getFailed(response.data.message));
    } else {
      dispatch(getSuccess(response.data));
    }
  } catch (error) {
    dispatch(getError(error.message));
  }
};
