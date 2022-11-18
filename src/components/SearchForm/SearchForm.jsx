import { useDispatch, useSelector } from 'react-redux';
import { phoneBookSlice } from 'redux/phoneBook.slice';
import { contactsFilterSelector } from 'redux/selectors';

export default function SearchForm() {
  const filter = useSelector(contactsFilterSelector);
  const dispatch = useDispatch();
  const onChange = e => {
    const value = e.target.value.trim().toLowerCase();
    dispatch(phoneBookSlice.actions.setFilter(value));
  };
  return (
    <form>
      <label>
        <input
          value={filter}
          onChange={onChange}
          type="text"
          placeholder="Search"
        />
      </label>
    </form>
  );
}
