const CHANGE_SELECTED_CLIENT = "CHANGE_SELECTED_CLIENT";

export const changeSelectedClient = (id) => {
  return {
    type: CHANGE_SELECTED_CLIENT,
    id,
  };
};

export default (state = 0, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_CLIENT:
      return action.id;

    default:
      return state;
  }
};
