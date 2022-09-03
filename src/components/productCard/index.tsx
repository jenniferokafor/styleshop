import { useState } from "react"
import "./productcard.scss"
import { LocalMallOutlined, LocalMall } from "@mui/icons-material"
import Paragraph from "../paragraph"

const ProductCard = () => {
    const [quickAdd, setQuickAdd] = useState(false)

    const quickAddIcon = quickAdd ? <LocalMall /> : <LocalMallOutlined />

    const handleQuickAdd = () => {
        setQuickAdd(!quickAdd)
    }

    return (
        <div className="productCard">
            <div className="productCardImage">
                <img
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    alt="product image"
                />
            </div>

            <div className="productCardIcon" onClick={handleQuickAdd}>
                {quickAddIcon}
            </div>

            <Paragraph marginTop="1rem">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </Paragraph>
            <Paragraph
                color="#666666"
                fontWeight={500}
                fontSize=".85rem"
                marginTop="1.5rem"
                textAlign="right"
            >
                $ 109.95
            </Paragraph>
        </div>
    )
}

export default ProductCard
