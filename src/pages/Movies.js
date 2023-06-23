import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieSearch } from 'API';
import Gallery from 'components/Gallery/Gallery';
import Form from '../components/Form/Form';
import { useLocation } from 'react-router-dom';
import { Text } from '@mantine/core';

export default function Movies() {
  const [results, setResults] = useState([]);
  const [totalPage, setTotalPage] = useState('');
  const [error, setError] = useState(null);
  const { pathname } = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = 1;
  const query = searchParams.get('query');
  const currentPage = searchParams.get('page');

  useEffect(() => {
    if (!query) return;
    getMovieSearch(query, currentPage)
      .then(({ results, total_pages }) => {
        setResults(preResults => [...preResults, ...results]);
        setTotalPage(total_pages);
      })
      .catch(e => {
        setError(e.message);
      });
  }, [currentPage, query, setTotalPage, setResults]);

  const onSubmit = query => {
    setSearchParams({ query, page: String(page) });
    setResults([]);
  };

  const onClick = () => {
    setSearchParams({ query: query, page: String(Number(currentPage) + 1) });
  };

  return (
    <>
      <Form onSubmit={onSubmit} />

      {error ? (
        <Text weight={600} size={32} color="red">
          Error: {error}
        </Text>
      ) : (
        <>
          <Gallery filmTrends={results} to={`${pathname}/`} />

          {page < totalPage && <button onClick={onClick}> Load more</button>}
        </>
      )}
    </>
  );
}
