const initialState = {
  produk: [],
  detailProduk: {},
}

const produk = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUK":
      return {
        ...state,
        produk: action.payload,
      }
    case "GET_DETAIL_PRODUK":
      return {
        ...state,
        detailProduk: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}
export default produk
