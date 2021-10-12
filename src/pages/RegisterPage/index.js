import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {authRegister} from "../../redux/action/auth"
import {useHistory} from "react-router-dom"

function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()
  const {isRegister} = useSelector((state) => state.auth)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(authRegister(email, password, name, history))
  }

  return (
    <div className="h-screen bg-yellow-300 flex justify-center items-center ">
      <form
        onSubmit={onSubmit}
        className="bg-white w-96 p-5 rounded-md space-y-4 m-5"
      >
        <h3 className="font-semibold text-xl">Register</h3>
        <div className="flex flex-col space-y-4">
          <label>Email</label>
          <input
            type="email"
            placeholder="please input your email here"
            className="border-2 rounded border-gray-600 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <label>Password</label>
          <input
            type="password"
            placeholder="please input your password here"
            className="border-2 rounded border-gray-600 p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <label>Name</label>
          <input
            type="text"
            placeholder="please input your name here"
            className="border-2 rounded border-gray-600 p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <button type="submit" className="w-24 bg-blue-500 p-2 rounded">
            <p className="text-white">Register</p>
          </button>
          <p>or</p>
          <Link className="bg-blue-500 p-2 rounded" to="/login">
            <p className="text-white">Already Have an Account ?</p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
