import React from 'react';
import { MdOutlinePlaylistAdd } from 'react-icons/md';

import styles from './mainInput.module.scss';

const MainInput = () => {
  return (
    <form className={styles.formWrapper}>
      <div className={styles.container}>
        <input type="text" placeholder="create new chat" />
        <button type="submit">
          <MdOutlinePlaylistAdd className={styles.buttonIcon} />
        </button>
      </div>
    </form>
  );
};

export default MainInput;
