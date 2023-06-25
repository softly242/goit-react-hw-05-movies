import { Card, Image, Text, Group } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'API';

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(({ cast }) => {
        console.log(cast)
        setCasts(cast);
      })
      .catch(e => {
        setError(e.message);
      });
  }, [movieId, setCasts]);

  if (error) {
    <Text weight={600} size={32} color="red">Error: {error}</Text>
  }

  return (
    <>
      <div>
        {casts.map(({ profile_path, original_name, id, character }) => (
          <Card maw={300} shadow="sm" padding="lg" radius="md" withBorder key={id}>
            <Card.Section >
              <Image
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                w={'100%'}
                withPlaceholder
                height={260}
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{original_name}</Text>
            </Group>

            <Text size="sm" color="dimmed">
              {character}
            </Text>
          </Card>
        ))}
      </div>
    </>
  );
}
