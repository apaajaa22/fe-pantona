import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import SideBarUser from "../../components/organism/SideBarUser"
import {
  getProduk,
  getProdukKategori,
  searchProduk,
} from "../../redux/action/produk"

function HomeUser() {
  const dispatch = useDispatch()
  const {produk} = useSelector((state) => state.produk)
  const {id} = useSelector((state) => state.kategori)
  const {page} = useSelector((state) => state.kategori)
  const [search, setSearch] = useState("")
  const onInc = () => {
    dispatch({type: "SET_PAGE", payload: page + 1})
  }
  const onDec = () => {
    dispatch({type: "SET_PAGE", payload: page - 1})
  }
  const onSearch = () => {
    dispatch(searchProduk(page, search))
    setSearch("")
  }
  useEffect(() => {
    dispatch(getProdukKategori(id, page))
  }, [id, page])
  return (
    <div className="flex flex-row">
      <SideBarUser />
      <div className="w-full">
        <div className="bg-gray-200 justify-center flex p-5">
          <input
            type="text"
            placeholder="search produk"
            className="pl-2 mr-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={onSearch}
            className="bg-blue-400 p-2 rounded text-white"
          >
            search
          </button>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-2xl mb-10">List Produk</h3>
          <div className="grid grid-cols-3 gap-4">
            {produk.map((data) => {
              return (
                <div className="flex flex-row">
                  <img
                    className="w-52 h-52 rounded"
                    src={`http://localhost:8080${data.picture}`}
                    alt="pic"
                  />
                  <div className="flex flex-col justify-center ml-2">
                    <p className="font-bold ">{data.name}</p>
                    <p className="font-semibold ">{data.gender}</p>
                    <p className="font-semibold flex-1">Rp. {data.price}</p>
                    <Link to={`/detail-produk/${data.id}`}>See more</Link>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-10 flex flex-row justify-center space-x-5">
            {page > 1 && (
              <button onClick={onDec} className="bg-gray-300 p-2 rounded">
                prev
              </button>
            )}
            <button onClick={onInc} className="bg-gray-300 p-2 rounded">
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeUser
