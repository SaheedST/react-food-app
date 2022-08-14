import classes from "./MealItemForm.module.css";
import { useRef } from "react";

const MealItemForm = (props) => {
  const inputQtyRef = useRef();

  const submitQtyHandler = (e) => {
    e.preventDefault();
    const enteredQty = inputQtyRef.current.value;
    const enteredQtyNumber = +enteredQty;
    console.log(enteredQtyNumber);

    props.onAddToCart(enteredQtyNumber);
  };

  return (
    <form onSubmit={submitQtyHandler} className={classes.form}>
      <label htmlFor={"qty"}>Quantity</label>
      <input
        // id={`qty + ${props.id}`} 
        id='qty'
        type="number"
        min="0"
        max="5"
        step="1"
        defaultValue="0"
        ref={inputQtyRef}
      />
      <div>
        <button>+ Add</button>
      </div>
    </form>
  );
};

export default MealItemForm;
