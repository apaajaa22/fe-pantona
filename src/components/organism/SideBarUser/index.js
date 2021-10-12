import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {Link, useHistory} from "react-router-dom"
import {authLogout} from "../../../redux/action/auth"
import {getProduk, getProdukKategori} from "../../../redux/action/produk"

function SideBarUser() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [show, setShow] = useState(false)
  const [page, setPage] = useState(1)

  const onLogout = (e) => {
    e.preventDefault()
    dispatch(authLogout())
    history.push("/login")
  }
  return (
    <div className="h-screen bg-blue-900 px-8 w-80 py-4">
      <h3 className="text-white text-xl font-bold mb-10">E-Commerce</h3>
      <ul className="space-y-5">
        <li>
          <button onClick={() => setShow(!show)} className="text-white text-md">
            Produk
          </button>
        </li>

        {show && (
          <>
            <li className="pl-5">
              <button
                onClick={() =>
                  dispatch(
                    {type: "ID_KATEGORI", payload: ""},
                    {type: "SET_PAGE", payload: 1}
                  )
                }
                className="text-white text-md"
              >
                Semua Produk
              </button>
            </li>
            <li className="pl-5">
              <button
                onClick={() =>
                  dispatch(
                    {type: "ID_KATEGORI", payload: 1},
                    {type: "SET_PAGE", payload: 1}
                  )
                }
                className="text-white text-md"
              >
                Baju
              </button>
            </li>
            <li className="pl-5">
              <button
                onClick={() =>
                  dispatch(
                    {type: "ID_KATEGORI", payload: 2},
                    {type: "SET_PAGE", payload: 1}
                  )
                }
                className="text-white text-md"
              >
                Celana
              </button>
            </li>
            <li className="pl-5">
              <button
                onClick={() =>
                  dispatch(
                    {type: "ID_KATEGORI", payload: 3},
                    {type: "SET_PAGE", payload: 1}
                  )
                }
                className="text-white text-md"
              >
                Sepatu
              </button>
            </li>
          </>
        )}

        <li>
          <button onClick={onLogout} className="text-white text-md">
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default SideBarUser
