import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useHistory, useParams} from "react-router"
import SideBarAdmin from "../SideBarAdmin"
import {updateKategori} from "../../../redux/action/kategori"

function EditKategori() {
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const {token} = useSelector((state) => state.auth)
  const history = useHistory()
  let {id} = useParams()
  const onEdit = (e) => {
    e.preventDefault()
    dispatch(updateKategori(id, name, token, history))
  }
  return (
    <div className="flex flex-row">
      <SideBarAdmin />
      <div className="pl-5 pt-4">
        <h3 className="text-xl font-semibold mb-10">Edit Kategori</h3>
        <form className="flex flex-col">
          <label>Nama Kategori</label>
          <div>
            <input
              className="border-2 border-black rounded mt-5 pl-1 py-1"
              placeholder="masukkan nama kategori"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              onClick={onEdit}
              className="bg-blue-800 text-white px-2 py-1 rounded ml-2"
            >
              simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditKategori
