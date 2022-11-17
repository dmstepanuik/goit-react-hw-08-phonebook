import React from 'react';
import s from './UserMenu.module.scss';

export default function UserMenu() {
  return (
    <div className={s.container}>
      <p className={s.it}>mango@mail.com</p>
      <button className={s.it}>Logout</button>
    </div>
  );
}
