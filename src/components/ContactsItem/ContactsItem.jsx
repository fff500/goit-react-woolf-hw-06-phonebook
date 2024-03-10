import { useDispatch } from 'react-redux';

import style from './ContactsItem.module.css';
import { deleteContact } from 'store/contactsSlice';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={style.item}>
      <span>
        {name}: {number}
      </span>
      <button className={style.button} onClick={() => handleDeleteClick(id)}>
        Delete
      </button>
    </li>
  );
};
