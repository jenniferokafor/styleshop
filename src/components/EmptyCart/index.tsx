import React, { Component } from "react"
import Lottie from "react-lottie"
import emptyCartData from "../../assets/animations/emptycart.json"
class EmptyCartAnimation extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: emptyCartData,
            renderer: "svg",
        }
        return (
            <div>
                <Lottie options={defaultOptions} height={300} width={300} />
            </div>
        )
    }
}

export default EmptyCartAnimation
