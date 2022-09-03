import Navbar from "../../components/navbar/navbar"
import ProductCard from "../../components/productCard"

const ProductListing = () => {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: 20, marginLeft: 20 }}>
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductListing
