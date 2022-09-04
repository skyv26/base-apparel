import React, { Fragment, useRef, useState } from "react";
import styles from "../../css/components_styles/ApparelEmailContainer.module.css";
import IconArrow from "../../assests/icon-arrow.svg";
import IconError from "../../assests/icon-error.svg";

const ApparelEmailContainer = (props) => {
  const [visibilityStatus, updatedVisibilityStatus] = useState(false);
  const [msgVisibile, updatedMsg] = useState(false);

  const inputRef = useRef("");
  const msg = useRef("Please provide a valid email");

  const visibilityHandler = (e) => {
    let currentElement = e.target.nodeName;
    if (currentElement === "FIGURE" || currentElement === "IMG") {
      let validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (inputRef.current.value.match(validRegex)) {
        updatedVisibilityStatus(false);
        msg.current = "Response submitted successfully !";
        updatedMsg(true);
        inputRef.current.value = "";
      } else {
        msg.current = "Please provide a valid email";
        updatedVisibilityStatus(true);
      }
    } else {
      updatedVisibilityStatus(false);
    }
  };

  return (
    <Fragment>
      <div className={styles.EmailContainer}>
        <input
          type="mail"
          className={`${styles.Input} ${
            visibilityStatus ? styles.Danger : null
          }`}
          ref={inputRef}
          onClick={() => {
            updatedMsg(false);
          }}
          onChange={visibilityHandler}
          placeholder="Email Address"
          required
        />
        <button type="submit" onClick={visibilityHandler}>
          <figure className={styles.EmailButtonFigure}>
            <img
              src={IconArrow}
              alt="submit button"
              className={styles.EmailButtonSVG}
            />
          </figure>
        </button>
        {visibilityStatus ? (
          <figure className={styles.EmailError}>
            <img src={IconError} alt="Error" className={styles.EmailErrorSVG} />
          </figure>
        ) : null}
        {visibilityStatus ? (
          <p className={styles.MSG}>{msg.current}</p>
        ) : msgVisibile ? (
          <p className={`${styles.MSG} ${styles.SuccessMsg}`}>{msg.current}</p>
        ) : null}
      </div>
    </Fragment>
  );
};

export default ApparelEmailContainer;
