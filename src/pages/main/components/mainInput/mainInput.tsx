import React from 'react';

import { Input } from '../../../../types/types';
import Icon from '../../../../assets/conversation.png';
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
          <img src={Icon} className={styles.buttonIcon} alt={'iconButton'} />
        </button>
      </div>
    </div>
  );
};

export default MainInput;
