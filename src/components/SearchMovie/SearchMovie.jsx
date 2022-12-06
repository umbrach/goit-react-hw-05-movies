import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearcmMovie.module.css';

export function Searchbar({ onSubmit, value }) {
  const [searchbarQuery, setSearchbarQuery] = useState(value);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (searchbarQuery.trim() !== '') {
      onSubmit(searchbarQuery);
    }
    setSearchbarQuery('');
  };

  const handleInputChange = e => {
    setSearchbarQuery(e.target.value.toLowerCase());
  };

  return (
    <form className={s.Searchbar} onSubmit={handleFormSubmit}>
      <input
        value={searchbarQuery}
        type="text"
        autoComplete="off"
        autoFocus
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
