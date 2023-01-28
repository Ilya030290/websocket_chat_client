import React from 'react';

import MainInput from './components/mainInput';
import ChatList from './components/chatList';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <main className={styles.mainWrapper}>
      <MainInput />
      <ChatList />
    </main>
  );
};

export default MainPage;
