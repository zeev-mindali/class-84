import jwt_decode from "jwt-decode";

//create our user types
export enum userRole {
  "Admin",
  "Company",
  "Customer",
  "Guest",
}

//create our state (literal object in memory)
export class authState {
  userName: string = "Kill Leon";
  //userPassword: string = "";
  userRole: userRole = userRole.Guest;
  userToken: string = "";
}

//which command the developer can use in this state
export enum authActionType {
  UserLogin = "UserLogin",
  UserLogout = "UserLogout",
  UpdateToken = "UpdateToken",
}

//create our auth action
export interface authAction {
  type: authActionType;
  payload?: any;
}

//function to handle the state changes (dispatch)
export function userLogin(token: string) {
  return { type: authActionType.UserLogin, payload: token };
}

//user logout
export function userLogout(): authAction {
  return { type: authActionType.UserLogout, payload: null };
}

//update token
export function updateToken(token: string): authAction {
  return { type: authActionType.UpdateToken, payload: token };
}

//reducer :)
export function authReducer(
  currentState: authState = new authState(),
  action: authAction
): authState {
  const newState = { ...currentState };

  switch (action.type) {
    case authActionType.UserLogin:
      var myToken = action.payload.replace("Bearer ", "");
      var decoded = JSON.parse(JSON.stringify(jwt_decode(myToken)));
      newState.userName = decoded.userName;
      newState.userRole = decoded.role;
      newState.userToken = action.payload;
      break;
    case authActionType.UserLogout:
      newState.userName = "Guest";
      //newState.userPassword = "";
      newState.userRole = userRole.Guest;
      newState.userToken = "";
      break;

    case authActionType.UpdateToken:
      newState.userToken = action.payload;
      break;
  }

  return newState;
}
