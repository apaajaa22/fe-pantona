/* eslint-disable no-undef */

import {http} from "../../helpers/http"
const {REACT_APP_BACKEND_URL: URL} = process.env

export const getKategori = () => {
  return async (dispatch) => {
    try {
      const {data} = await http().get(`${URL}/api/v1/kategori`)
      dispatch({
        type: "GET_KATEGORI",
        payload: data.results,
      })
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.response.data.message,
        showConfirmButton: false,
        timer: 1000,
      })
    }
  }
}

export const createKategori = (name, token, history) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append("nama_kategori", name)
    try {
      const {data} = await http(token).post(
        `${URL}/api/v1/kategori/post`,
        form.toString()
      )
      history.push("/")
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

export const deleteKategori = (id, token) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append("id", id)
    try {
      const {data} = await http(token).delete(`${URL}/api/v1/kategori/delete`, {
        data: form,
      })
      dispatch(getKategori())
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

export const updateKategori = (id, name, token, history) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append("id", id)
    form.append("nama_kategori", name)
    try {
      const {data} = await http(token).put(
        `${URL}/api/v1/kategori/update`,
        form
      )
      dispatch(getKategori())
      history.push("/")
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
