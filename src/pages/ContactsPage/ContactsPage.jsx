import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section from 'components/Section/Section';
import Form from 'components/Form/Form';
import SearchForm from 'components/SearchForm/SearchForm';
import ContactList from 'components/ContactList/ContactList';
import s from './ContactsPage.module.css';
import { fetchContacts } from 'redux/phoneBook.operations';
import { filtredContactsSelector } from 'redux/selectors';

export function ContactsPage() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(filtredContactsSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Section title="Phone Book">
        <Form />
      </Section>

      <Section title="Contacts">
        <SearchForm />
        {filteredContacts && <ContactList contacts={filteredContacts} />}
      </Section>
    </div>
  );
}
