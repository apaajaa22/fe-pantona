import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {deleteKategori, getKategori} from "../../../redux/action/kategori"
import {deleteProduk, getProduk} from "../../../redux/action/produk"
import SideBarAdmin from "../SideBarAdmin"

function ProdukAdmin() {
  const dispatch = useDispatch()
  const {produk} = useSelector((state) => state.produk)
  const {token} = useSelector((state) => state.auth)
  const [page, setPage] = useState(1)
  useEffect(() => {
    dispatch(getProduk(page))
  }, [page])
  const onDelete = (e) => {
    dispatch(deleteProduk(e.id, token))
  }
  const onInc = () => {
    setPage(page + 1)
  }
  const onDec = () => {
    setPage(page - 1)
  }
  return (
    <div className="flex flex-row">
      <SideBarAdmin />
      <div className="pl-5 pt-4">
        <h3 className="text-xl font-semibold mb-10">Produk</h3>
        <Link
          to="/create-produk"
          className="bg-blue-400 text-white p-2 rounded "
        >
          Tambah Produk
        </Link>
        {produk.length > 1 ? (
          <table className="border-collapse bg-yellow-100 rounded mt-5">
            <tr className="px-20">
              <th className="p-2">Nama</th>
              <th>picture</th>
              <th>kategori</th>
              <th>desc</th>
              <th>price</th>
              <th>stock</th>
              <th>gender</th>
              <th>Aksi</th>
            </tr>
            {produk.map((data, idx) => {
              return (
                <tr>
                  <td className="pl-4 ">{data.name}</td>
                  <td className="pl-1">
                    <img
                      className="w-24 h-24 cover-full"
                      src={`http://localhost:8080${data.picture}`}
                      alt=""
                    />
                  </td>
                  <td className="pl-1 text-center">
                    {data.kategori?.nama_kategori}
                  </td>
                  <td className="pl-1 overflow-ellipsis">{data.desc}</td>
                  <td className="pl-1">{data.price}</td>
                  <td className="pl-1">{data.stock}</td>
                  <td className="pl-1">{data.gender}</td>
                  <td className="p-2 flex flex-col space-y-1">
                    <Link
                      to={`/edit-produk/${data.id}`}
                      className="bg-blue-800 p-1 text-center text-white rounded"
                    >
                      edit
                    </Link>
                    <button
                      onClick={() => onDelete(data)}
                      className="bg-red-800 p-1 text-white rounded"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </table>
        ) : (
          <p className="text-2xl font-semibold my-20">data tidak ditemukan</p>
        )}
        {produk.length > 1 ? (
          <div className="flex flex-row justify-center space-x-5 mt-5">
            {page > 1 && (
              <button onClick={onDec} className="bg-gray-300 p-2 rounded">
                prev
              </button>
            )}
            <button onClick={onInc} className="bg-gray-300 p-2 rounded">
              next
            </button>
          </div>
        ) : (
          <button onClick={onDec} className="bg-gray-300 p-2 rounded">
            prev
          </button>
        )}
      </div>
    </div>
  )
}

export default ProdukAdmin
