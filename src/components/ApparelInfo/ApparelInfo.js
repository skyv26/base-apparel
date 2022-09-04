import React, { Fragment } from "react";
import styles from "../../css/components_styles/ApparelInfo.module.css";

const ApparelInfo = (props) => {
  return (
    <Fragment>
      <h1 className={styles.MainHeader}>
        <span>We're</span>
        <br />
        coming
        <br />
        soon
      </h1>
      <p className={styles.MainPara}>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
    </Fragment>
  );
};

export default ApparelInfo;
