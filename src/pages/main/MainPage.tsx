import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  addNewChat,
  createConnection,
  destroyConnection,
  fetchChats,
  onCreatedChat,
  selectChat,
  selectChats,
  setChat,
} from '../../redux/appReducer';
import { selectUser } from '../../redux/authReducer';
import { useAppDispatch } from '../../types/types';
import MainInput from './components/mainInput';
import ChatList from './components/chatList';
import { ROUTES } from '../../router/routes';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const user = useSelector(selectUser);
  const chat = useSelector(selectChat);
  const chats = useSelector(selectChats);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(createConnection());
    dispatch(fetchChats());
    dispatch(onCreatedChat());

    return () => {
      dispatch(destroyConnection());
    };
  }, [dispatch]);

  const createNewChat = () => {
    dispatch(addNewChat(chat.name));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setChat(e.target.value));
  };

  if (!user) {
    return <Navigate to={ROUTES.SIGNUP} />;
  }

  return (
    <main className={styles.mainWrapper}>
      <MainInput
        value={chat.name}
        createNewChat={createNewChat}
        onChangeHandler={onChangeHandler}
      />
      <ChatList chats={chats} />
    </main>
  );
};

export default MainPage;
