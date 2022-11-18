import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/selectors';

export default function PublicRoute({ redirectTo = '/', element, restricted }) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? element : <Navigate to={redirectTo} />;
}
