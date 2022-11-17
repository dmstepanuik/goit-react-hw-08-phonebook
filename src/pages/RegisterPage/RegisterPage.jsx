import React from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth.operations';
import s from './RegisterPage.module.scss';

export default function RegisterPage() {
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const credential = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(authOperations.register(credential));
  }

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <div className={s.field}>
        <label className={s.label}>
          NickName
          <input type="text" name="name" />
        </label>
      </div>
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
