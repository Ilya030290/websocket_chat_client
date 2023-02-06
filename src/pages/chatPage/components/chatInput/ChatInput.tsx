import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import { setMessage } from '../../../../redux/appReducer';
import { MessageInterface, useAppDispatch } from '../../../../types/types';
import styles from '../../../chatPage/components/chatInput/ChatInput.module.scss';

const ChatInput = ({
  message,
  sendMessage,
}: {
  message: MessageInterface;
  sendMessage: () => void;
}) => {
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMessage(e.target.value));
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type a message"
          value={message.text}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={sendMessage}>
          <AiOutlineSend className={styles.buttonIcon} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
