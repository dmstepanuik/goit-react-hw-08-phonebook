import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section from 'components/Section/Section';
import Form from 'components/Form/Form';
import SearchForm from 'components/SearchForm/SearchForm';
import ContactList from 'components/ContactList/ContactList';
import s from './ContactsPage.module.css';
import { fetchContacts } from 'redux/phoneBook.operations';
import { contactsSelector } from 'redux/selectors';

export function ContactsPage() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(contactsSelector);
  // const filter = useSelector(state => state.filter);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const getFilteredContacts = () => {
  //   return contacts?.filter(it => it.name.toLowerCase().includes(filter));
  // };

  // const filteredContacts = getFilteredContacts();

  return (
    <div className={s.container}>
      {/* <Section title="Phone Book">
        <Form />
      </Section>

      <Section title="Contacts">
        <SearchForm />
        {filteredContacts && <ContactList contacts={filteredContacts} />}
      </Section> */}
    </div>
  );
}
