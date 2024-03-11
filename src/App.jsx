import { ContactsForm, ContactsList, ContactsFilter } from './components';

export const App = () => (
  <>
    <h1>Phonebook</h1>
    <ContactsForm />

    <h2>Contacts</h2>
    <ContactsFilter />
    <ContactsList />
  </>
);
