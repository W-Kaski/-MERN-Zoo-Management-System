import axios from "axios";
import {
  getRequest,
  getSuccess,
  getFailed,
  getError,
} from "./notificationSlice";

export const getAllNotifications = (id) => async (dispatch) => {
  dispatch(getRequest());
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/notifications/${id}`
    );
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};
