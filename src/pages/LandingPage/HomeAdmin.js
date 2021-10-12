import React from "react"
import KategoriAdmin from "../../components/organism/KategoriAdmin"
import SideBarAdmin from "../../components/organism/SideBarAdmin"

function HomeAdmin() {
  return (
    <div className="flex flex-row">
      <SideBarAdmin />
      <KategoriAdmin />
    </div>
  )
}

export default HomeAdmin
