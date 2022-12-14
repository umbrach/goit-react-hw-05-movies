import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/movie-api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewData, setReviewData] = useState(null);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getReviews() {
      try {
        const { data } = await getMovieReviews(movieId);

        setReviewData(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getReviews();
  }, [movieId]);
  if (!reviewData) {
    return;
  }
  return (
    <>
      {reviewData.length > 0 ? (
        <ul>
          {reviewData.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h2>Author:{author} </h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div
          style={{
            padding: '40px 60px',
          }}
        >
          <p>We don't have any reviews for this movie.</p>
        </div>
      )}
    </>
  );
}
