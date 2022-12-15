import Navbar from "../../components/Navbar/navbar"
import Paragraph from "../../components/Paragraph"
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
