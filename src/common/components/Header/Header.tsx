import React from 'react';
import { useSelector } from 'react-redux';

import { logOutUser, selectIsOnline, selectUser } from '../../../redux/authReducer';
import { useAppDispatch } from '../../../types/types';
import ChatLogo from '../../../assets/chat-logo.png';
import AvatarIcon from '../../../assets/user-icon-design-user-profile.png';
import styles from './Header.module.scss';

const Header = () => {
  const user = useSelector(selectUser);
  const isOnline = useSelector(selectIsOnline);
  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    dispatch(logOutUser());
    window.location.reload();
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <img className={styles.logo} src={ChatLogo} alt={'chat-logo'} />
        <div className={styles.user}>
          <img className={styles.avatar} src={AvatarIcon} alt={'avatar-icon'} />
          <span>{user && user.name}</span>
        </div>
        {isOnline ? (
          <div className={styles.status}>
            <div className={styles.light} />
            <span className={styles.statusText}>Online</span>
          </div>
        ) : null}
        <button className={styles.logoutButton} onClick={logOutHandler}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
