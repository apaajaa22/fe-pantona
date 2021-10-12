import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

import auth from "./auth"
import user from "./user"
import kategori from "./kategori"
import produk from "./produk"

const persistAuth = {
  storage,
  key: "auth",
}
const persistUser = {
  storage,
  key: "user",
}

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  user: persistReducer(persistUser, user),
  kategori,
  produk,
})

export default reducer
