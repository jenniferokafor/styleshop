import { useState, useEffect } from "react"
import Navbar from "../../components/Navbar/navbar"
import ProductCard from "../../components/ProductCard"
import "./productlisting.scss"
import { useQuery } from "react-query"
import { fetchProductsApi } from "../../api"

const ProductListing = () => {
    const [products, setProducts] = useState([])

    const { refetch: productsRefetch, isLoading: productsLoading } = useQuery(
        ["fetch-products"],
        () => fetchProductsApi(),
        {
            onSuccess: (data) => {
                console.log(data?.data)
                setProducts(data?.data)
            },
        }
    )

    useEffect(() => {
        productsRefetch()
    }, [])

    return (
        <div>
            <Navbar showCategories />
            {productsLoading ? (
                <div>Loading</div>
            ) : (
                <div className="ProductListingWrapper">
                    <div className="ProductListingCardWrapper">
                        {products?.map((product, i) => (
                            <ProductCard data={product} key={i} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductListing
