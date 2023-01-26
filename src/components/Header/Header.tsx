import React from 'react';

import ChatLogo from './../../assets/chat-logo.png';
import AvatarIcon from './../../assets/user-icon-design-user-profile.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={ChatLogo} alt={'chat-logo'} />
      <h2>My Chats</h2>
      <div>
        <img className={styles.avatar} src={AvatarIcon} alt={'avatar-icon'} />
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
