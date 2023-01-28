import React from 'react';

import styles from './Chat.module.scss';

const Chat = ({ name }: { name: string }) => {
  return (
    <div className={styles.chatContainer}>
      <p className={styles.chatTitle}>{name}</p>
    </div>
  );
};

export default Chat;
