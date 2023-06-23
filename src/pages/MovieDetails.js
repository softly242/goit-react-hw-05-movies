import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import { getMovieId } from 'API';
import Loader from 'components/Loader/Loader';
import { Text } from '@mantine/core';

export default function MovieDetails() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

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

  return (
    <>
      {error ? (
        <Text weight={600} size={32} color="red">
          Error: {error}
        </Text>
      ) : (
        <>
          <Link to={backLink.current}>Go back</Link>
          <div
            style={{
              backgroundImage: `url({https://image.tmdb.org/t/p/w200${data.backdrop_path}})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
              alt={data.original_name}
              loading="lazy"
            />
            <div>
              <h1>{data.title}</h1>
              <p>
                Popularity <span>{data.popularity}</span>
              </p>

              <p>Overview</p>
              <p>{data.overview}</p>
              <p>Genres</p>
              <p>
                {data.genres.map(({ name }, index) => (
                  <span key={name}>{name}</span>
                ))}
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div>
              <nav className="movie-nav">
                <Link to="cast">
                  <Button px={20} py={10} w={100} mx={20}>
                    Cast
                  </Button>
                </Link>
                <Link to="reviews">
                  <Button px={20} py={10} w={100} mx={20}>
                    Reviews
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
