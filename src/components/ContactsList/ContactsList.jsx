import { useSelector } from 'react-redux';

import { ContactsItem } from 'components';
import { getContacts, getFilter } from 'store/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactsToShow = contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  return (
    <ul>
      {contactsToShow.map(({ name, number, id }) => {
        return <ContactsItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
