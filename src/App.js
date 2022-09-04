import React, { Fragment } from "react";
import ApparelHeader from "./components/ApparelHeader/ApparelHeader";
import ApparelImageContainer from "./components/ApparelImageContainer/ApparelImageContainer";
import ApparelFooter from "./components/ApparelFooter/ApparelFooter";
import styles from "./App.module.css";
import Main from "./UI/Main/Main";

const App = (props) => {
  return (
    <Fragment>
      <div className={styles.GridLayout}>
        <ApparelHeader />
        <ApparelImageContainer />
        <Main />
      </div>
      <ApparelFooter />
    </Fragment>
  );
};

export default App;
