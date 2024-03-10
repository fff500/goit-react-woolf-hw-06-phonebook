import { useSelector } from 'react-redux';

import { ContactsForm, ContactsList, ContactsFilter } from './components';
import { getContacts, getFilter } from 'store/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = () =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactsList contacts={filterContacts()} />
    </>
  );
};
