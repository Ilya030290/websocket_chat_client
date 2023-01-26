import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../router/routes';
import SignUpImage from '../../assets/signup-image.jpg';
import styles from '../signup/SignUp.module.scss';

const SignUp = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.signupContainer}>
        <div className={styles.signupWrapper}>
          <img className={styles.signupImage} src={SignUpImage} alt="loginPicture" />
          <form className={styles.signupForm}>
            <span className={styles.title}>Sign Up</span>
            <div className={styles.wrapInput}>
              <input
                className={styles.inputCommonStyle}
                type="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
              />
              <span className={styles.nameSymbol} />
            </div>
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
            <div className={styles.signUpButton}>
              <button>Sign Up</button>
            </div>
            <div className={styles.linkWrapper}>
              <NavLink className={styles.link} to={ROUTES.LOGIN}>
                Go to login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
