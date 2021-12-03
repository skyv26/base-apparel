import React from 'react';
import styles from '../../css/components_styles/ApparelImageContainer.module.css';

const ApparelImageContainer = (props) => {
    return (
        <figure className={styles.Figure}>
            <div className={styles.MainImage} />
        </figure>
    );
}

export default ApparelImageContainer;