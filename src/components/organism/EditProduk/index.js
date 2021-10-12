import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useHistory, useParams} from "react-router"
import {getKategori} from "../../../redux/action/kategori"
import {getDetailProduk, updateProduk} from "../../../redux/action/produk"
import SideBarAdmin from "../SideBarAdmin"

function EditProduk() {
  const {kategori} = useSelector((state) => state.kategori)
  const {detailProduk} = useSelector((state) => state.produk)
  const {token} = useSelector((state) => state.auth)
  const [name, setName] = useState(detailProduk.name)
  const [picture, setPicture] = useState(null)
  const [kategoriId, setKategoriId] = useState(1)
  const [desc, setDesc] = useState(detailProduk.desc)
  const [price, setPrice] = useState(detailProduk.price)
  const [stock, setStock] = useState(detailProduk.stock)
  const [gender, setGender] = useState(detailProduk.gender)
  const dispatch = useDispatch()
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
  const {id} = useParams()
  const form = {
    id,
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
    dispatch(updateProduk(form, token, history))
  }
  useEffect(() => {
    dispatch(getDetailProduk(id))
    dispatch(getKategori())
  }, [])
  return (
    <div className="flex flex-row">
      <SideBarAdmin />
      <div className="flex-1 pl-5 pt-4 w-max flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-10">Edit Produk</h3>
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
            update
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProduk
