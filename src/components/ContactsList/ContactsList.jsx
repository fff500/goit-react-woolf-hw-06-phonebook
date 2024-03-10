import { ContactsItem } from 'components';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return <ContactsItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
