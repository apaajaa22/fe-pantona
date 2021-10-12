const initialState = {
  kategori: [],
  id: "",
  page: 1,
}

const kategori = (state = initialState, action) => {
  switch (action.type) {
    case "GET_KATEGORI":
      return {
        ...state,
        kategori: action.payload,
      }
    case "ID_KATEGORI":
      return {
        ...state,
        id: action.payload,
      }
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}
export default kategori
