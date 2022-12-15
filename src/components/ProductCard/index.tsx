import React, { useState } from "react"
import "./productcard.scss"
import { LocalMallOutlined, LocalMall } from "@mui/icons-material"
import Paragraph from "../Paragraph"
import { Product } from "./model"

interface Props {
    data: Product
}

const ProductCard: React.FC<Props> = ({ data }) => {
    const [quickAdd, setQuickAdd] = useState(false)

    const quickAddIcon = quickAdd ? <LocalMall /> : <LocalMallOutlined />

    const handleQuickAdd = () => {
        setQuickAdd(!quickAdd)
    }

    return (
        <div className="productCard">
            <div className="productCardImage">
                <img src={data?.image} alt="product image" />
            </div>

            <div className="productCardIcon" onClick={handleQuickAdd}>
                {quickAddIcon}
            </div>

            <Paragraph marginTop="1rem">{data?.title}</Paragraph>
            <Paragraph
                color="#666666"
                fontWeight={500}
                fontSize=".85rem"
                marginTop="1.5rem"
                textAlign="right"
            >
                $ {data?.price}
            </Paragraph>
        </div>
    )
}

export default ProductCard
