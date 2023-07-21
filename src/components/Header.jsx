import React from 'react';
import styles from '../style';

const Header = () => {
    return (
        <div className={`hero ${styles.flexCenter}`} >
            <div className={` row ${styles.boxWidth}`}>
                <h3 className={`heading fs-1 fw-bold align-middle text-center ${styles.flexCenter}`}>
                    Bringing you the latest news
                </h3>
                <p className={`${styles.flexCenter}`}>
                    Trusted, unbiased and relevant news for everyone
                </p>
                <p className={`fw-light ${styles.flexCenter}`}>
                    <small>By Aimable Mardel</small>
                </p>
            </div>

        </div>

    )
}

export default Header