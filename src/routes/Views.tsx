import React from "react"
import { Routes, Route } from "react-router-dom"
import ProductListing from "../pages/ProductListing"
import Cart from "../pages/Cart"

const Views = () => {
    return (
        <Routes>
            <Route index element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}
export default Views
