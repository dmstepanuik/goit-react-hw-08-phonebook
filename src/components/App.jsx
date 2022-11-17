import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

export function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to={'/contacts'} />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
