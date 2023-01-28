import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import styles from '../../../chatPage/components/chatInput/ChatInput.module.scss';

const ChatInput = () => {
  return (
    <form className={styles.formWrapper}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Type a message" />
        <button type="submit">
          <AiOutlineSend className={styles.buttonIcon} />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
