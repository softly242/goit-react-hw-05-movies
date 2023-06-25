import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovieId } from 'API';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { Text } from '@mantine/core';
import { Link, NavContainer } from './MovieDetails.styled';

export default function MovieDetails() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  console.log(location);

  useEffect(() => {
    getMovieId(movieId)
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(e => {
        setError(e.message);
      });
  }, [movieId, setData]);

  if (!data && !error) {
    return <Loader />;
  }

  if (error) {
    return (
      <Text weight={600} size={32} color="red">
        Error: {error}
      </Text>
    );
  }

  return (
    <>
      <Link to={backLink.current}>Go back</Link>
      <MovieCard data={data} />
      <NavContainer>
        <nav>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </nav>
      </NavContainer>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
