import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import {getMovieDetails} from '../services/movie-api';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { ReturnButton } from 'components/ReturnButton/ReturnButton';

export default function MovieDetails() {
  const [movieDetails, setmovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === undefined) {
      return;
    }
    async function showFilmDetails() {
      try {
        const { data } = await getMovieDetails(movieId);

        setmovieDetails(data);
        setPoster(data.poster_path);
        setGenres(data.genres);
      } catch (error) {}
    }
    showFilmDetails();
  }, [movieId]);

  const movieGenres = genres.map(gene => gene.name);
  const location = useLocation();

  return (
    <>
      {movieDetails && (
        <>
          <ReturnButton />
          <MovieInfo
            moviePoster={poster}
            movieTitle={movieDetails.title}
            movieOverview={movieDetails.overview}
            movieRait={movieDetails.vote_average}
            movieGenres={movieGenres.join(', ')}
            movieDate={movieDetails.release_date.slice(0, 4)}
          />
        </>
      )}

      <AdditionalInfo location={location.state?.from ?? '/Home'} />
      <Outlet />
    </>
  );
}
