import React from 'react';

import styles from './ChatMessage.module.scss';

const ChatMessage = ({ message, current_uid }: { message: any; current_uid: string }) => {
  const time = new Date(message.createdAt).toLocaleTimeString('ru-RU');

  let isCurrentUser = false;

  if (message.user_id === current_uid) {
    isCurrentUser = true;
  }

  return (
    <div>
      <p className={`${isCurrentUser ? styles.sentByMe : styles.opponent}`}>
        {!isCurrentUser ? (
          <>
            <div className={`${styles.greyColor} ${styles.withMargin}`}>
              {message.name}
              <i>{time}</i>
            </div>
            {message.text}
          </>
        ) : (
          <>
            {message.text}
            <div>
              <i>{time}</i>
            </div>
          </>
        )}
      </p>
    </div>
  );
};

export default ChatMessage;
