import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

export function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
