import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth.operations';
import s from './LoginPage.module.scss';

export default function LoginPage() {
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const credential = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(authOperations.logIn(credential));
  }

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <div className={s.field}>
        <label className={s.label}>
          Email
          <input type="text" name="email" />
        </label>
      </div>
      <div className={s.field}>
        <label className={s.label}>
          Password
          <input type="password" name="password" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
