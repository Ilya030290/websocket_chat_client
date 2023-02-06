import React from 'react';
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';

import { MessageInterface } from '../../../../types/types';
import ChatMessage from '../chatMessage';
import styles from './ChatMessages.module.scss';

const ChatMessages = ({
  messages,
  user_id,
}: {
  messages: MessageInterface[];
  user_id?: string;
}) => {
  return (
    <ScrollToBottom className={styles.messages}>
      {messages.map((message) => {
        return <ChatMessage key={message._id} message={message} current_uid={user_id} />;
      })}
    </ScrollToBottom>
  );
};

export default ChatMessages;
