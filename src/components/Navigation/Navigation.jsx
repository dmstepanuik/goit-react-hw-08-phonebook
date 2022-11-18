import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/selectors';
import s from './Navigation.module.scss';

export default function Navigation() {
  const isLoggedIn = useSelector(isLoggedInSelector);
  // console.log('isLoggedIn :>> ', isLoggedIn);
  return (
    <div className={s.container}>
      <NavLink to={'/contacts'}>Contacts</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/register'}>Register</NavLink>
      {isLoggedIn && <UserMenu />}
    </div>
  );
}
