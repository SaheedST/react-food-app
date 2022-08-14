import classes from "./Header.module.css";
import meal_img from "../../assets/meals.jpg";
import HeaderCartButton from "../Cart/HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <div className={classes.header}>
        <h1>SaheetoMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </div>
      <div className={classes["main-image"]}>
        <img src={meal_img} alt='meal table'></img>
      </div>
    </div>
  );
};

export default Header;
