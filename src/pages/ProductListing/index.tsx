import Navbar from "../../components/navbar/navbar"
import ProductCard from "../../components/productCard"

const Index = () => {
    return (
        <div>
            <Navbar showCategories />
            <div style={{ marginTop: 20, marginLeft: 20 }}>
                <ProductCard />
            </div>
        </div>
    )
}

export default Index
