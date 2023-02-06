import React from 'react';

import Chat from '../chat';
import { deleteChat } from '../../../../redux/appReducer';
import { ChatInterface, useAppDispatch } from '../../../../types/types';
import deleteIcon from '../../../../assets/delete-message.png';
import styles from './ChatList.module.scss';

const ChatList = ({ chats }: { chats: ChatInterface[] }) => {
  const dispatch = useAppDispatch();

  const removeChat = (chat_id?: string) => {
    dispatch(deleteChat(chat_id));
  };

  return (
    <section className={styles.chatListWrapper}>
      <div className={styles.chatListContainer}>
        {chats.map((chat) => (
          <div key={chat._id} className={styles.chat}>
            <Chat chat_id={chat._id} name={chat.name} />
            <button className={styles.removeButton} onClick={() => removeChat(chat._id)}>
              <img src={deleteIcon} className={styles.buttonIcon} alt={'iconButton'} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChatList;
