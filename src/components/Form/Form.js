import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { SearchForm, Input, Button, Label } from './Form.styled';

export default function Form({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSumbit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast('Введите имя');
      return;
    }
    console.log('hello')
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchForm >
      <Button type="submit" onClick={handleSumbit}>
        <Label>Search</Label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
        >
          <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
        </svg>
      </Button>

      <Input
        value={query}
        onChange={handleChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
      />
    </SearchForm>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};