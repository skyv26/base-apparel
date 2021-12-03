import React from 'react';
import styles from '../../css/components_styles/Wrapper.module.css';

const Wrapper = (props) => {
    return (
        <div className={styles.Wrapper}>
            {props.children}
        </div>
    );
}

export default Wrapper;