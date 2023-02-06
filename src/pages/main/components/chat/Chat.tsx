import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Chat.module.scss';

const Chat = ({ chat_id, name }: { chat_id?: string; name: string }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.chatContainer}
      onClick={() => navigate(`/chat/${chat_id}/${name.toLowerCase()}`)}
    >
      <p className={styles.chatTitle}>{name}</p>
    </div>
  );
};

export default Chat;
