import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router"
import {getDetailProduk} from "../../redux/action/produk"

function DetailPage() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {detailProduk} = useSelector((state) => state.produk)
  const arr = detailProduk.stock.split(",")
  useEffect(() => {
    dispatch(getDetailProduk(id))
  }, [])
  return (
    <div className="flex flex-row justify-center items-center my-20 gap-20">
      <img
        className="w-96 rounded"
        src={`http://localhost:8080${detailProduk.picture}`}
        alt=""
      />
      <div className="space-y-2">
        <p className="text-2xl font-bold">{detailProduk.name}</p>
        <p className="text-xl">{detailProduk.gender}</p>
        <p className="text-xl font-semibold">Rp. {detailProduk.price}</p>
        <p className="max-w-screen-md text-sm">Rp. {detailProduk.desc}</p>
        <div className="flex flex-row">
          <p>Tersedia ukuran</p>
          <select className="border-2 border-black ml-4">
            {detailProduk.stock.split(",").map((res) => {
              return <option className="max-w-screen-sm text-sm">{res}</option>
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
