import React from 'react';
import { NavLink } from 'react-router-dom';

import Chat from '../chat';
import { ChatInterface } from '../../../../types/types';
import styles from './ChatList.module.scss';

const ChatList = ({ chats }: { chats: ChatInterface[] }) => {
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
