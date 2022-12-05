import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearcmMovie.module.css';

export function Searchbar({ onSubmit, value }) {
  const [serachbarQuery, setSerachbarQuery] = useState(value);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (serachbarQuery.trim() !== '') {
      onSubmit(serachbarQuery);
    }
    setSerachbarQuery('');
  };

  const handleInputChange = e => {
    setSerachbarQuery(e.target.value.toLowerCase());
  };

  return (
    <form className={s.Searchbar} onSubmit={handleFormSubmit}>
      <input
        value={serachbarQuery}
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
