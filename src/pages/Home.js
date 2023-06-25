import { useEffect, useState } from 'react';
import { getMovieTrending } from "API";
import { Text } from '@mantine/core';
import Gallery from 'components/Gallery/Gallery';

export default function Home() {

const [filmTrends, setFilmTrends] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    
    getMovieTrending()
      .then(({results}) => {
       
        setFilmTrends(prev => [...prev, ...results]);
        
      })
      .catch(e => {
        setError(e.message);
      });
  }, [setFilmTrends]);

  if (error) {
    return <Text weight={600} size={32} color='red'>Error: { error }</Text>
  }

  return (
    <main>
      <h1>Trending today</h1>
      {filmTrends && (
        <Gallery filmTrends={filmTrends} to={'/movies/'} />
      )}
    </main>
    
  );
}