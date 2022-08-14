import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
const cartCtx = useContext(CartContext)

const badgeQty = cartCtx.items.reduce((currQty, item) => {return currQty +item.quantity}, 0)

  return (
    <div onClick={props.onShowCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{badgeQty}</span>
    </div>
  );
};

export default HeaderCartButton;
