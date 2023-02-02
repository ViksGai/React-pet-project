import b from "b_";
import { useRef, useState } from "react";

import "./checkout.scss";

export const Checkout = (props: any) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef<any>();
  const streetInputRef = useRef<any>();
  const postalInputRef = useRef<any>();
  const cityInputRef = useRef<any>();

  const isEmpty = (value: string) => value.trim() === "";
  const isFiveChars = (value: string) => value.trim().length === 5;

  const confirmHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const enteredName = nameInputRef!.current.value;
    const enteredStreet = streetInputRef!.current.value;
    const enteredPostal = postalInputRef!.current.value;
    const enteredCity = cityInputRef!.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid =
      !isEmpty(enteredPostal) && isFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const isFormValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;
  };

  return (
    <form className={b("form")} onSubmit={confirmHandler}>
      <div className={`form__control ${formValidity.name ? "" : "invalid"}`}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formValidity.name && <p>Please enter the name</p>}
      </div>
      <div className={`form__control ${formValidity.street ? "" : "invalid"}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formValidity.street && <p>Please enter the street</p>}
      </div>
      <div className={`form__control ${formValidity.postalCode ? "" : "invalid"}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef}></input>
        {!formValidity.postalCode && <p>Please enter the postal code</p>}
      </div>
      <div className={`form__control ${formValidity.city ? "" : "invalid"}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formValidity.city && <p>Please enter the city</p>}
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
