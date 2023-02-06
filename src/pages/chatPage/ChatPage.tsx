import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, NavLink, useParams } from 'react-router-dom';

import { selectUser } from '../../redux/authReducer';
import {
  addMessage,
  createConnection,
  destroyConnection,
  fetchMessages,
  getMessagesHistory,
  joinToChat,
  selectMessage,
  selectMessages,
  sendNewMessage,
  setMessage,
} from '../../redux/appReducer';
import { useAppDispatch } from '../../types/types';
import ChatMessages from './components/chatMessages';
import ChatInput from './components/chatInput';
import { ROUTES } from '../../router/routes';
import BackArrowIcon from '../../assets/back.png';
import styles from './ChatPage.module.scss';

const ChatPage = () => {
  const { chat_id } = useParams();
  const user = useSelector(selectUser);
  const message = useSelector(selectMessage);
  const messages = useSelector(selectMessages);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(createConnection());
    dispatch(joinToChat({ name: user?.name, chat_id, user_id: user?._id }));
    dispatch(addMessage());
    dispatch(getMessagesHistory(chat_id));
    dispatch(fetchMessages());

    return () => {
      dispatch(destroyConnection());
    };
  }, [dispatch]);

  const sendMessage = () => {
    if (message.text) {
      dispatch(
        sendNewMessage({
          message: message.text,
          chat_id,
          callback: () => dispatch(setMessage('')),
        })
      );
    }
  };

  if (!user) {
    return <Navigate to={ROUTES.SIGNUP} />;
  }

  return (
    <div className={styles.chatPageWrapper}>
      <div className={styles.box}>
        <NavLink to={ROUTES.MAIN_PAGE} className={styles.link}>
          <img src={BackArrowIcon} className={styles.icon} alt={'backIcon'} />
          <span className={styles.text}>Back to home page</span>
        </NavLink>
        <div className={styles.chatPageContainer}>
          <ChatMessages messages={messages} user_id={user?._id} />
          <ChatInput message={message} sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
