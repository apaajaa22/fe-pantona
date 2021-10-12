import Swal from "sweetalert2"
import {http} from "../../helpers/http"
const {REACT_APP_BACKEND_URL: URL} = process.env

export const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append("email", email)
    form.append("password", password)
    try {
      const {data} = await http().post(
        `${URL}/api/v1/user/login`,
        form.toString()
      )
      dispatch({
        type: "SET_AUTH_LOGIN",
        payload: data.token,
      })
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1000,
      })
    }
  }
}

export const authRegister = (email, password, name, history) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append("email", email)
    form.append("password", password)
    form.append("name", name)

    try {
      // eslint-disable-next-line no-unused-vars
      const {data} = await http().post(
        `${URL}/api/v1/user/register`,
        form.toString()
      )
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Register Success",
        showConfirmButton: false,
        timer: 1000,
      })
      history.push("/login")
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1000,
      })
    }
  }
}

export const authLogout = () => {
  return async (dispatch) => {
    dispatch({type: "SET_AUTH_LOGOUT"})
    dispatch({type: "CLEAR_USER"})
  }
}
