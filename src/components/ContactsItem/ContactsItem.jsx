import { useDispatch } from 'react-redux';

import { deleteContact } from 'store/contactsSlice';

import style from './ContactsItem.module.css';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.item}>
      <span>
        {name}: {number}
      </span>
      <button
        className={style.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
