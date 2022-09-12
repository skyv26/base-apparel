import React from "react";
import styles from "../../css/components_styles/Main.module.css";
import Wrapper from "../Wrapper/Wrapper";
import ApparelInfo from "../../components/ApparelInfo/ApparelInfo";
import ApparelEmailContainer from "../../components/ApparelEmailContainer/ApparelEmailContainer";

const Main = (props) => {
  return (
    <main className={styles.Main}>
      <Wrapper>
        <ApparelInfo />
        <ApparelEmailContainer />
      </Wrapper>
    </main>
  );
};

export default Main;
