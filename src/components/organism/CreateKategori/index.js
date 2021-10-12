import React, {useState} from "react"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {useHistory} from "react-router"
import {createKategori} from "../../../redux/action/kategori"
import SideBarAdmin from "../SideBarAdmin"

function CreateKategori() {
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const {token} = useSelector((state) => state.auth)
  const history = useHistory()
  const onAdd = (e) => {
    e.preventDefault()
    dispatch(createKategori(name, token, history))
  }
  return (
    <div className="flex flex-row">
      <SideBarAdmin />
      <div className="pl-5 pt-4">
        <h3 className="text-xl font-semibold mb-10">Tambah Kategori</h3>
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
              onClick={onAdd}
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

export default CreateKategori
