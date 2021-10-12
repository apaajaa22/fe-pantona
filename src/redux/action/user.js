/* eslint-disable no-undef */

import {http} from "../../helpers/http"
const {REACT_APP_BACKEND_URL: URL} = process.env

export const getUser = (token) => {
  return async (dispatch) => {
    try {
      const {data} = await http(token).get(`${URL}/api/v1/user/me`)
      dispatch({
        type: "GET_USER",
        payload: data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
