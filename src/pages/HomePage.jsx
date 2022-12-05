import {useState, useEffect} from 'react';
import {MovieList} from '../components/MovieList/MovieList';
import { MovieItem } from 'components/MovieList/MovieItem';
import { fetchTrandingFilms } from '../services/movie-api';

export default function Home() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function showTrandingFilms() {
      try {
        const { data } = await fetchTrandingFilms();

        setMoviesData(data.results);
      } catch (error) {}
    }
    showTrandingFilms();
  }, []);
  
  return (
    <MovieList>
      <>
        <h2 style={{
          fontSize: '30px',
          marginLeft: '70px',
          color: '#8B0000',
          fontWeight: '500',
        }}>Trending today</h2>
      </>
      {moviesData.map(({ id, title }) => {
        return <MovieItem key={id} filmTitle={title} movieId={id} />;
      })}
    </MovieList>
  );
}