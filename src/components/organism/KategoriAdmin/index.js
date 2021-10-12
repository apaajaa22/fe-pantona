import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {deleteKategori, getKategori} from "../../../redux/action/kategori"

function KategoriAdmin() {
  const dispatch = useDispatch()
  const {kategori} = useSelector((state) => state.kategori)
  const {token} = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(getKategori())
  }, [])
  const onDelete = (e) => {
    dispatch(deleteKategori(e.id, token))
  }
  return (
    <div className="pl-5 pt-4">
      <h3 className="text-xl font-semibold mb-10">Kategori</h3>
      <Link
        to="/create-kategori"
        className="bg-blue-400 text-white p-2 rounded "
      >
        Tambah Kategori
      </Link>
      <table className="border-collapse w-80 bg-yellow-100 rounded mt-10">
        <tr>
          <th className="py-2">No</th>
          <th>Nama Kategori</th>
          <th>Aksi</th>
        </tr>
        {kategori.map((data, idx) => {
          return (
            <tr>
              <td className="p-5">{idx + 1}</td>
              <td className="pl-1">{data.nama_kategori}</td>
              <td className="space-x-3 p-5">
                <Link
                  to={`/edit-kategori/${data.id}`}
                  className="bg-blue-800 p-1 text-white rounded"
                >
                  edit
                </Link>
                <button
                  onClick={() => onDelete(data)}
                  className="bg-red-800 p-1 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default KategoriAdmin
