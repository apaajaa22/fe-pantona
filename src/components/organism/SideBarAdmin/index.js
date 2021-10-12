import React from "react"
import {useDispatch} from "react-redux"
import {Link, useHistory} from "react-router-dom"
import {authLogout} from "../../../redux/action/auth"

function SideBarAdmin() {
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = (e) => {
    e.preventDefault()
    dispatch(authLogout())
    history.push("/login")
  }
  return (
    <div className="h-screen bg-blue-900 px-8 w-80 py-4">
      <h3 className="text-white text-xl font-bold mb-10">Dashboard Admin</h3>
      <ul className="space-y-5">
        <li>
          <Link to="/" className="text-white text-md">
            Kategori
          </Link>
        </li>
        <li>
          <Link to="/produk-dashboard" className="text-white text-md">
            Produk
          </Link>
        </li>
        <li>
          <button onClick={onLogout} className="text-white text-md">
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default SideBarAdmin
