import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {authLogin} from "../../redux/action/auth"
import {useHistory} from "react-router-dom"

function LoginPage() {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {token} = useSelector((state) => state.auth)
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(authLogin(email, password))
  }
  const isLogin = () => {
    if (token !== null) {
      history.push("/")
    }
  }

  useEffect(() => {
    isLogin()
  }, [token])

  return (
    <div className="h-screen bg-yellow-300 flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="bg-white w-96 p-5 rounded-md space-y-4 m-5"
      >
        <h3 className="font-semibold text-xl">Login</h3>
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
        <div className="flex flex-col items-center space-y-2">
          <button type="submit" className="bg-blue-500 p-2 rounded">
            <p className="text-white">Login</p>
          </button>
          <p>or</p>
          <Link className="bg-blue-500 p-2 rounded" to="/register">
            <p className="text-white">Register now</p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
