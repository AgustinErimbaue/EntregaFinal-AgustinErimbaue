import cart from './assets/cart.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={cart} alt="cart-widget" />
            <span>2</span>
        </div>
    )
}
export default CartWidget;
