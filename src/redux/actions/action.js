export const actionTypes = {
  CHANGE_ROUTE: "CHANGE_ROUTE"
};

export const changeRoute = route => ({
  type: actionTypes.CHANGE_ROUTE,
  route
});
