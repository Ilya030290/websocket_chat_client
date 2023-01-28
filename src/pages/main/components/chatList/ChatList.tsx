import React from 'react';
import { NavLink } from 'react-router-dom';

import Chat from '../chat';
import styles from './ChatList.module.scss';

const ChatList = () => {
  const chats = [
    { _id: 1, name: 'Football chat' },
    { _id: 2, name: 'Developers chat' },
    { _id: 3, name: 'Flood' },
  ];

  return (
    <section className={styles.chatListWrapper}>
      <div className={styles.chatListContainer}>
        {chats.map((chat) => (
          <NavLink
            className={styles.link}
            key={chat._id}
            to={`/chat/${chat._id}/${chat.name.toLowerCase()}`}
          >
            <Chat name={chat.name} />
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default ChatList;
