import netlifyIdentity from "netlify-identity-widget";
import {createAction} from "redux-actions";

export const addUser = createAction("ADD_USER");

export function loginUser() {
  return (dispatch, getState) => {
    return dispatch(addUser(netlifyIdentity.currentUser()));
  };
}
