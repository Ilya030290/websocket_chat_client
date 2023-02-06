import React from 'react';

import { setMessage } from '../../../../redux/appReducer';
import { MessageInterface, useAppDispatch } from '../../../../types/types';
import SendIcon from '../../../../assets/send.png';
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
          <img src={SendIcon} className={styles.buttonIcon} alt={'sendMessageButton'} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
