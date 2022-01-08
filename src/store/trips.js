import axios from "axios";

const GET_ALL_TRIPS = "GET_ALL_TRIPS";
const DELETE_TRIP = "DELETE_TRIP";

const _getTrips = (trips) => {
  return {
    type: GET_ALL_TRIPS,
    trips,
  };
};

export const getAllTrips = () => {
  return async (dispatch) => {
    const { data: trips } = await axios.get("/api/trips");
    dispatch(_getTrips(trips));
  };
};

export const deleteTrip = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/trips/${id}`);
    const { data: trips } = await axios.get("/api/trips");
    dispatch(_getTrips(trips));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_TRIPS:
      return action.trips;
    default:
      return state;
  }
};
