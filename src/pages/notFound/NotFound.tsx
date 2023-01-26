import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../router/routes';
import ErrorImage from '../../assets/404-image.gif';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <main className={styles.mainWrapper}>
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <h1>Oops!</h1>
        <h2>We can’t find the page you’re looking for.</h2>
        <p>Error 404...page not found</p>
        <p>
          You can try to return to the
          <NavLink to={ROUTES.MAIN_PAGE} className={styles.link}>
            Home page
          </NavLink>
        </p>
      </div>
      <img src={ErrorImage} alt="errorImage" />
    </div>
  </main>
);

export default NotFound;
