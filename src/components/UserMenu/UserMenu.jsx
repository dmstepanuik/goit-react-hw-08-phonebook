import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth.operations';
import { userEmailSelector } from 'redux/selectors';
import s from './UserMenu.module.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(userEmailSelector);
  return (
    <div className={s.container}>
      <p className={s.it}>{userEmail}</p>
      <button
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
        className={s.it}
      >
        Logout
      </button>
    </div>
  );
}
