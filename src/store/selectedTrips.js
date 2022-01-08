import axios from "axios";

const CHANGE_SELECTED_TRIPS = "CHANGE_SELECTED_TRIPS";

const _changeSelectedTrips = (trips) => {
  return {
    type: CHANGE_SELECTED_TRIPS,
    trips,
  };
};

export const changeSelectedTrips = (id) => {
  return async (dispatch) => {
    const { data: trips } = await axios.get(`/api/trips/clients/${id}`);
    dispatch(_changeSelectedTrips(trips));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case CHANGE_SELECTED_TRIPS:
      return action.trips;
    default:
      return state;
  }
};
