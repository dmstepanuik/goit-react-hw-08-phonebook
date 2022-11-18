import useEffectOnce from 'hooks/useEffectOnce';
import LoginPage from 'pages/LoginPage/LoginPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authOperations } from 'redux/auth.operations';
import { token } from 'redux/authContacts.api';
import { tokenSelector } from 'redux/selectors';
import Navigation from './Navigation/Navigation';
import PrivateRoute from './routes/PrivateRoute';

export function App() {
  const storeToken = useSelector(tokenSelector);
  const dispatch = useDispatch();
  useEffectOnce(() => {
    token.set(storeToken);
    storeToken && dispatch(authOperations.current());
  });

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/" element={<h1>PrivateRoute</h1>} />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
