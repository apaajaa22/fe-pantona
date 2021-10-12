import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CreateKategori from "../components/organism/CreateKategori"
import CreateProduk from "../components/organism/CreateProduk"
import EditKategori from "../components/organism/EditKategori"
import EditProduk from "../components/organism/EditProduk"
import ProdukAdmin from "../components/organism/ProdukAdmin"
import DetailPage from "../pages/DetailPage"
import LandingPage from "../pages/LandingPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/create-kategori" component={CreateKategori} />
        <Route exact path="/edit-kategori/:id" component={EditKategori} />
        <Route exact path="/produk-dashboard" component={ProdukAdmin} />
        <Route exact path="/create-produk" component={CreateProduk} />
        <Route exact path="/edit-produk/:id" component={EditProduk} />
        <Route exact path="/detail-produk/:id" component={DetailPage} />
      </Switch>
    </Router>
  )
}

export default Routes
