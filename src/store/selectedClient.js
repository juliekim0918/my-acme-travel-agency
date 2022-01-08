import axios from "axios";
import { changeSelectedTrips } from "./selectedTrips";

const CHANGE_SELECTED_CLIENT = "CHANGE_SELECTED_CLIENT";

const _changeSelectedClient = (client) => {
  return {
    type: CHANGE_SELECTED_CLIENT,
    client,
  };
};

export const changeSelectedClient = (id) => {
  return async (dispatch) => {
    const { data: client } = await axios.get(`/api/clients/${id}`);
    dispatch(_changeSelectedClient(client));
    dispatch(changeSelectedTrips(id));
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_CLIENT:
      return action.client;
    default:
      return state;
  }
};
