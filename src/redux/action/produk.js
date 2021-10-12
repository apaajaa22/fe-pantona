/* eslint-disable no-undef */

import {http} from "../../helpers/http"
const {REACT_APP_BACKEND_URL: URL} = process.env

export const getProduk = (page) => {
  return async (dispatch) => {
    try {
      const {data} = await http().get(`${URL}/api/v1/produk?page=${page}`)
      dispatch({
        type: "GET_PRODUK",
        payload: data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
export const searchProduk = (page, search) => {
  return async (dispatch) => {
    try {
      const {data} = await http().get(
        `${URL}/api/v1/produk?page=${page}&search=${search}`
      )
      dispatch({
        type: "GET_PRODUK",
        payload: data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getProdukKategori = (id, page) => {
  return async (dispatch) => {
    try {
      const {data} = await http().get(
        `${URL}/api/v1/produk/kategori?kategoriId=${id}&page=${page}`
      )
      dispatch({
        type: "GET_PRODUK",
        payload: data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const createProduk = (data, token, history) => {
  return async (dispatch) => {
    const form = new FormData()
    form.append("name", data.name)
    form.append("picture", data.picture)
    form.append("kategoriId", data.kategoriId)
    form.append("desc", data.desc)
    form.append("price", data.price)
    form.append("stock", data.stock)
    form.append("gender", data.gender)
    try {
      const {data} = await http(token).post(`${URL}/api/v1/produk/create`, form)
      history.push("/produk-dashboard")
    } catch (error) {
      console.log(error.response.data)
    }
  }
}
export const getDetailProduk = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await http().get(`${URL}/api/v1/produk/${id}`)
      dispatch({
        type: "GET_DETAIL_PRODUK",
        payload: data.results,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateProduk = (data, token, history) => {
  return async (dispatch) => {
    const form = new FormData()
    form.append("id", data.id)
    form.append("name", data.name)
    form.append("picture", data.picture)
    form.append("kategoriId", data.kategoriId)
    form.append("desc", data.desc)
    form.append("price", data.price)
    form.append("stock", data.stock)
    form.append("gender", data.gender)
    try {
      const {data} = await http(token).put(`${URL}/api/v1/produk/update`, form)
      dispatch(getProduk())
      history.push("/produk-dashboard")
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

export const deleteProduk = (id, token) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append("id", id)
    try {
      const {data} = await http(token).delete(`${URL}/api/v1/produk/delete`, {
        data: form,
      })
      dispatch(getProduk())
    } catch (error) {
      console.log(error.response.data)
    }
  }
}
