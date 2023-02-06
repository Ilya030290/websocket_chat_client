import React from 'react';

import LoadingIcon from '../../../../assets/loading.png';
import styles from './MiniLoader.module.scss';

const MiniLoader = () => (
  <div className={styles.spinner}>
    <img src={LoadingIcon} alt="spinnerLogo" />
  </div>
);

export default MiniLoader;
