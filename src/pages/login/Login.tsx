import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../router/routes';
import LoginImage from './../../assets/login-image.png';
import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginContainer}>
        <div className={styles.loginWrapper}>
          <img className={styles.loginImage} src={LoginImage} alt="loginPicture" />
          <form className={styles.loginForm}>
            <span className={styles.title}>Login</span>
            <div className={styles.wrapInput}>
              <input
                className={styles.inputCommonStyle}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />
              <span className={styles.emailSymbol} />
            </div>
            <div className={styles.wrapInput}>
              <input
                className={styles.inputCommonStyle}
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              <span className={styles.pasSymbol} />
            </div>
            <div className={styles.loginButton}>
              <button>login</button>
            </div>
            <div className={styles.linkWrapper}>
              <NavLink className={styles.link} to={ROUTES.SIGNUP}>
                Create your Account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
