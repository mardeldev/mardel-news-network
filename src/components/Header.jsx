import React from 'react';
import styles from '../style';

const Header = () => {
    return (
        <div className={`${styles.flexCenter} mt-3`} >

            <h1 className='display-6 text-bold fw-bold'>
                News
            </h1>
            {/* <h5><span class="badge bg-secondary">New</span></h5> */}

        </div>

    )
}

export default Header