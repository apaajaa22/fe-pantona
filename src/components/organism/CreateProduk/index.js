import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router"
import {getKategori} from "../../../redux/action/kategori"
import {createProduk} from "../../../redux/action/produk"
import SideBarAdmin from "../SideBarAdmin"

function CreateProduk() {
  const [name, setName] = useState("")
  const [picture, setPicture] = useState(null)
  const [kategoriId, setKategoriId] = useState(1)
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [gender, setGender] = useState("")
  const dispatch = useDispatch()
  const {kategori} = useSelector((state) => state.kategori)
  const {token} = useSelector((state) => state.auth)
  const history = useHistory()
  const dataGender = [
    {
      id: 1,
      gender: "Pria",
    },
    {
      id: 2,
      gender: "Wanita",
    },
    {
      id: 3,
      gender: "Unisex",
    },
  ]
  const form = {
    name,
    picture,
    kategoriId,
    desc,
    price,
    stock,
    gender,
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createProduk(form, token, history))
  }
  useEffect(() => {
    dispatch(getKategori())
  }, [])
  return (
    <div className="flex flex-row">
      <SideBarAdmin />
      <div className="flex-1 pl-5 pt-4 w-max flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-10">Tambah Produk</h3>
        <form className="flex flex-col">
          <label>Nama Produk</label>
          <input
            className="border-2 border-black rounded mt-2 pl-1 py-1"
            placeholder="masukkan nama produk"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Foto Produk</label>
          <input
            className="border-2 border-black rounded mt-2 pl-1 py-1"
            placeholder="masukkan nama kategori"
            type="file"
            onChange={(e) => setPicture(e.target.files[0])}
          />
          <label>KategoriId</label>
          <select
            value={kategoriId}
            onChange={(e) => setKategoriId(e.target.value)}
            className="border-2 border-black rounded mt-2 pl-1 py-1"
          >
            {kategori.map((data) => {
              return <option value={data.id}>{data.nama_kategori}</option>
            })}
          </select>
          <label>Deskripsi Produk</label>
          <textarea
            className="border-2 border-black rounded mt-2 pl-1 py-1"
            placeholder="masukkan deskripsi produk"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <label>Harga Produk</label>
          <input
            className="border-2 border-black rounded mt-2 pl-1 py-1"
            placeholder="masukkan harga produk"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>Stock Produk</label>
          <input
            className="border-2 border-black rounded mt-2 pl-1 py-1"
            placeholder="masukkan stock produk"
            type="text"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <label>Gender Produk</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border-2 border-black rounded mt-2 pl-1 py-1"
          >
            {dataGender.map((data) => {
              return (
                <option key={data.id} value={data.gender}>
                  {data.gender}
                </option>
              )
            })}
          </select>
          <button
            onClick={onSubmit}
            className="bg-blue-800 text-white p-2 rounded mt-5"
          >
            simpan
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProduk
