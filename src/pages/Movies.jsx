import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/movie-api';
import { Searchbar } from '../components/SearchMovie/SearchMovie';
import { MovieList } from '../components/MovieList/MovieList';
import { MovieItem } from '../components/MovieList/MovieItem';

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function searchMovie() {
      if (query === '') {
        return;
      }

      try {
        const { data } = await searchMovies(query);
        setMoviesData(data.results);
      } catch (error) {}
    }
    searchMovie();
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
