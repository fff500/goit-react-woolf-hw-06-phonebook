import { useDispatch } from 'react-redux';

import { setFilter } from 'store/filterSlice';

import style from './ContactsFilter.module.css';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const filterQuery = event.target.value.trim().toLowerCase();

    dispatch(setFilter(filterQuery));
  };

  return (
    <>
      <label className={style.label} htmlFor="contactSearch">
        Find contacts by name
      </label>
      <input type="text" onChange={handleChange} id="contactSearch" />
    </>
  );
};
