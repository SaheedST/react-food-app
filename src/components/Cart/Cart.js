import Modal from "../../UI/Modal/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // const totalAmount = `$${cartCtx.totalAmout.toFixed(2)}`;
  // const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const hideCart = () => {
    props.onHideCart();
  };

  return (
    <Modal hideCart={hideCart}>
      <div>
        {cartItems}

        <div className={classes["total"]}>
          <div>Total</div>
          <div>${cartCtx.totalAmount.toFixed(2)}</div>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={hideCart}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
