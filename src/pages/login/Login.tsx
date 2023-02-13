import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectLoadingStatus } from '../../redux/appReducer';
import { selectLoginError, selectUser, setNewLoginError } from '../../redux/authReducer';
import { useAppDispatch } from '../../types/types';
import { useSignUpLoginFormik } from '../../helpers/hooks';
import MiniLoader from '../../common/components/Loaders/MiniLoader';
import { ROUTES } from '../../router/routes';
import { LOADING, LoginSchema } from '../../constants/constants';
import LoginImage from './../../assets/login-image.png';
import styles from './Login.module.scss';

const Login = () => {
  const loadingStatus = useSelector(selectLoadingStatus);
  const loginError = useSelector(selectLoginError);
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const formik = useSignUpLoginFormik(LoginSchema);

  React.useEffect(() => {
    return () => {
      dispatch(setNewLoginError(''));
    };
  }, [dispatch]);

  if (user) {
    return <Navigate to={ROUTES.MAIN_PAGE} />;
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
              {loginError && <div className={styles.error}>{loginError}</div>}
              <div className={styles.loginButton}>
                {loadingStatus === LOADING ? (
                  <MiniLoader />
                ) : (
                  <button type="submit">login</button>
                )}
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
