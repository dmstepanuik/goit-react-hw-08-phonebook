import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

export default function Navigation() {
  return (
    <div className={s.container}>
      <NavLink to={'/contacts'}>Contacts</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/register'}>Register</NavLink>
      <UserMenu />
    </div>
  );
}
