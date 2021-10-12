const initialState = {
  token: null,
  isRegister: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_LOGIN":
      return {
        ...state,
        token: action.payload,
      }
    case "SET_AUTH_REGISTER":
      return {
        ...state,
        isRegister: action.payload,
      }
    case "SET_AUTH_LOGOUT":
      return {
        ...state,
        token: null,
      }
    default:
      return {
        ...state,
      }
  }
}
export default auth
