export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const SET_LOGGED_OUT = "SET_LOGGED_OUT";
export const USER_SUCCESS = 'USER_SUCCESS'
export const setLoggedIn = () => {
  return { type: SET_LOGGED_IN };
};
export const setLoggedOut = () => {
  return { type: SET_LOGGED_OUT };
};


export const setUser = (input)=>{
return{ type: USER_SUCCESS, payload: input}
} 