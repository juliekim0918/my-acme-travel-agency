import axios from "axios";

const GET_CLIENTS = "GET_CLIENTS";

const _getClients = (clients) => {
  return {
    type: GET_CLIENTS,
    clients,
  };
};

export const getClients = () => {
  return async (dispatch) => {
    const { data: clients } = await axios.get("/api/clients");
    dispatch(_getClients(clients));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return action.clients;
    default:
      return state;
  }
};
