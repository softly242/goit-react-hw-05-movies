import { Container } from "pages/MovieDetails/MovieDetails.styled";

export default function MovieCard({ data }) {
  return (
    <Container>
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
      </Container>
  )
}