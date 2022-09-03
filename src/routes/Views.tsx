import React from "react"
import { Routes, Route } from "react-router-dom"
import ProductListing from "../pages/ProductListing/ProductListing"

const Views = () => {
  return (
    <Routes>
      <Route index element={<ProductListing />} />
    </Routes>
  )
}
export default Views
