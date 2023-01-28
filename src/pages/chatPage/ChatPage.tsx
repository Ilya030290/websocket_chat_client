import React from 'react';

import ChatMessages from './components/chatMessages';
import ChatInput from './components/chatInput';
import styles from './ChatPage.module.scss';

const ChatPage = () => {
  return (
    <div className={styles.chatPageWrapper}>
      <div className={styles.chatPageContainer}>
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatPage;
