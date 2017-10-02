import {Map} from "immutable";

export function userReducer(state = new Map(), action) {
  switch (action.type) {
    case "ADD_USER":
      const {
        app_metadata, created_at, confirmed_at, email, id, user_metadata
      } = action.payload;
      return {...app_metadata, created_at, confirmed_at, email, id, ...user_metadata};
    default:
      return null;
  }
}
