import React from 'react';

import { MessageInterface } from '../../../../types/types';
import styles from './ChatMessage.module.scss';

const ChatMessage = ({
  message,
  current_uid,
}: {
  message: MessageInterface;
  current_uid?: string;
}) => {
  const time = new Date(message.createdAt).toLocaleTimeString('ru-RU');

  let isCurrentUser = false;

  if (message.user_id === current_uid) {
    isCurrentUser = true;
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${isCurrentUser ? styles.sentByMe : styles.sentByOpponent}`}>
        {!isCurrentUser ? (
          <>
            <div className={styles.info}>
              {message.name}
              <i>{time}</i>
            </div>
            {message.text}
          </>
        ) : (
          <>
            {message.text}
            <div className={styles.myInfo}>
              <i>{time}</i>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
