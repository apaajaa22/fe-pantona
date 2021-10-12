import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {getUser} from "../../redux/action/user"
import HomeAdmin from "./HomeAdmin"
import HomeUser from "./HomeUser"

function LandingPage() {
  const {token} = useSelector((state) => state.auth)
  const {user} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser(token))
  }, [])

  if (user.role === "Admin") {
    return <HomeAdmin />
  }
  return <HomeUser />
}

export default LandingPage
