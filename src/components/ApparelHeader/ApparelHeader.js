import React from 'react';
import BaseApparelLogo from '../../assests/logo.svg';
import styles from '../../css/components_styles/ApparelHeader.module.css';

const ApparelHeader = (props) => {
    return (
        <header className={styles.Header}>
            <figure className={styles.Figure}>
                <img src={BaseApparelLogo} alt="Base apparel logo" className={styles.Logo} />
            </figure>
        </header>
    );
}

export default ApparelHeader;