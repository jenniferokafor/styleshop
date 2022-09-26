import Navbar from "../../components/navbar/navbar"
import Paragraph from "../../components/paragraph"
import EmptyCartAnimation from "../../components/EmptyCart"

const Cart = () => {
    return (
        <div>
            <Navbar />
            <div>
                <EmptyCartAnimation />
                <Paragraph>Your cart is empty</Paragraph>
                <Paragraph>Continue Shopping</Paragraph>
            </div>
        </div>
    )
}

export default Cart
