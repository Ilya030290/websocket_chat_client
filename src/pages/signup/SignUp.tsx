import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useSignUpLoginFormik } from '../../helpers/hooks';
import { selectLoadingStatus } from '../../redux/appReducer';
import { selectUser } from '../../redux/authReducer';
import FullPageLoader from '../../common/components/Loaders/FullPageLoader';
import { ROUTES } from '../../router/routes';
import { LOADING, SignUpSchema } from '../../constants/constants';
import SignUpImage from '../../assets/signup-image.jpg';
import styles from '../signup/SignUp.module.scss';

const SignUp = () => {
  const user = useSelector(selectUser);
  const loadingStatus = useSelector(selectLoadingStatus);

  const formik = useSignUpLoginFormik(SignUpSchema);

  if (loadingStatus === LOADING) {
    return <FullPageLoader />;
  }

  if (user) {
    return <Navigate to={ROUTES.MAIN_PAGE} />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.signupContainer}>
        <div className={styles.signupWrapper}>
          <img className={styles.signupImage} src={SignUpImage} alt="loginPicture" />
          <div className={styles.signUpFormContainer}>
            <form className={styles.signupForm} onSubmit={formik.handleSubmit}>
              <span className={styles.title}>Sign Up</span>
              <div className={styles.wrapInput}>
                <input
                  className={styles.inputCommonStyle}
                  type="name"
                  placeholder="name"
                  {...formik.getFieldProps('name')}
                />
                <span className={styles.nameSymbol} />
              </div>
              {formik.touched.name && formik.errors.name && (
                <div className={styles.error}>{formik.errors.name}</div>
              )}
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
              <div className={styles.signUpButton}>
                <button type="submit">Sign Up</button>
              </div>
            </form>
            <div className={styles.linkWrapper}>
              <NavLink className={styles.link} to={ROUTES.LOGIN}>
                Go to login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
