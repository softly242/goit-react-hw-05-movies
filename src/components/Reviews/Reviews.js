import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API';
import { Card, Text,  Group } from '@mantine/core';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) =>
      setReviews(prevReviews => [...prevReviews, ...results])
    );
  }, [movieId, setReviews]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>
  }

  return (
    <div>
      {reviews.map(({ author, id, content }, index) => (
        <Card shadow="sm" padding="lg" radius="md" withBorder key={id + index}>
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{author}</Text>
          </Group>
          <Text size="sm" color="dimmed">
            {content}
          </Text>
        </Card>
      ))}
    </div>
  );
}
