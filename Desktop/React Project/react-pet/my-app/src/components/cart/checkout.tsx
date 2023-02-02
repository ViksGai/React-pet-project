import b from "b_";
import { useRef } from "react";

import "./checkout.scss";

export const Checkout = (props: any) => {

  const nameInputRef = useRef<any>();
  const streetInputRef = useRef<any>();
  const postalInputRef = useRef<any>();
  const cityInputRef = useRef<any>();

  const confirmHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const enteredName = nameInputRef!.current.value;
    const enteredStreet = streetInputRef!.current.value;
    const enteredPostal = postalInputRef!.current.value;
    const enteredCity = cityInputRef!.current.value;
  };

  return (
    <form className={b("form")} onSubmit={confirmHandler}>
      <div className={b("form", "control")}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
      </div>
      <div className={b("form", "control")}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
      </div>
      <div className={b("form", "control")}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef}></input>
      </div>
      <div className={b("form", "control")}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
      </div>
      <div className={b("form", "buttons")}>
        <button
          type="button"
          onClick={props.onCancel}
          className={b("form", "btn")}
        >
          Cancel
        </button>
        <button className={b("form", "btn", { submit: true })}>Confirm</button>
      </div>
    </form>
  );
};
