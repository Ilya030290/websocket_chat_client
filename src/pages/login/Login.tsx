import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectLoadingStatus } from '../../redux/appReducer';
import { useSignUpLoginFormik } from '../../helpers/hooks';
import { ROUTES } from '../../router/routes';
import { LOADING, LoginSchema } from '../../constants/constants';
import FullPageLoader from '../../common/components/Loaders/FullPageLoader';
import LoginImage from './../../assets/login-image.png';
import styles from './Login.module.scss';

const Login = () => {
  const loadingStatus = useSelector(selectLoadingStatus);

  const formik = useSignUpLoginFormik(LoginSchema);

  if (loadingStatus === LOADING) {
    return <FullPageLoader />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginContainer}>
        <div className={styles.loginWrapper}>
          <img className={styles.loginImage} src={LoginImage} alt="loginPicture" />
          <div className={styles.loginFormContainer}>
            <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
              <span className={styles.title}>Login</span>
              <div className={styles.wrapInput}>
                <input
                  className={styles.inputCommonStyle}
                  type="email"
                  placeholder="email"
                  {...formik.getFieldProps('email')}
                />
                <span className={styles.emailSymbol} />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className={styles.error}>{formik.errors.email}</div>
              )}
              <div className={styles.wrapInput}>
                <input
                  className={styles.inputCommonStyle}
                  type="password"
                  placeholder="password"
                  {...formik.getFieldProps('password')}
                />
                <span className={styles.pasSymbol} />
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className={styles.error}>{formik.errors.password}</div>
              )}
              <div className={styles.loginButton}>
                <button type="submit">login</button>
              </div>
            </form>
            <div className={styles.linkWrapper}>
              <NavLink className={styles.link} to={ROUTES.SIGNUP}>
                Create your Account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
