import { useState, useEffect } from 'react';
import { MovieList } from '../components/MovieList/MovieList';
import { MovieItem } from 'components/MovieList/MovieItem';
import { getPopularMovie } from '../services/movie-api';

export default function Home() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function showTrandingFilms() {
      try {
        const { data } = await getPopularMovie();

        setMoviesData(data.results);
      } catch (error) {}
    }
    showTrandingFilms();
  }, []);

  return (
    <MovieList>
      <>
        <h2
          style={{
            fontSize: '32px',
            marginLeft: '80px',
            color: '#0c8cee',
            fontWeight: '700',
          }}
        >
          Trending movies
        </h2>
      </>
      {moviesData.map(({ id, title }) => {
        return <MovieItem key={id} filmTitle={title} movieId={id} />;
      })}
    </MovieList>
  );
}
