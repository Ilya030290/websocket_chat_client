import React from 'react';

import LoadingIcon from '../../../../assets/loading.png';
import styles from './FullPageLoader.module.scss';

const FullPageLoader = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.spinner}>
      <img src={LoadingIcon} alt="spinnerLogo" />
    </div>
  </div>
);

export default FullPageLoader;
