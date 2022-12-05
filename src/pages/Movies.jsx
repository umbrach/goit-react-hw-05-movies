import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movieSearching } from '../services/movie-api';
import { Searchbar } from '../components/SearchMovie/SearchMovie';
import { MovieList } from '../components/MovieList/MovieList';
import { MovieItem } from '../components/MovieList/MovieItem';

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function movieSearching() {
      if (query === '') {
        return;
      }

      try {
        const { data } = await movieSearching(query);
        setMoviesData(data.results);
      } catch (error) {}
    }
    movieSearching();
  }, [query]);

  const formData = data => {
    setSearchParams({ query: data.toLowerCase().trim() });
  };

  return (
    <>
      <Searchbar value={query} onSubmit={formData} />
      <MovieList>
        {moviesData.map(({ id, title }) => {
          return <MovieItem key={id} filmTitle={title} movieId={id} />;
        })}
      </MovieList>
    </>
  );
}
