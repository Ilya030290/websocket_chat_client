import React from 'react';
import { MdOutlinePlaylistAdd } from 'react-icons/md';

import { Input } from '../../../../types/types';
import styles from './mainInput.module.scss';

const MainInput = ({ value, createNewChat, onChangeHandler }: Input) => {
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      createNewChat();
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.container}>
        <input
          type="text"
          value={value}
          placeholder="create new chat"
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={createNewChat}>
          <MdOutlinePlaylistAdd className={styles.buttonIcon} />
        </button>
      </div>
    </div>
  );
};

export default MainInput;
