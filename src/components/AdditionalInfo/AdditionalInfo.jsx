import { Link } from 'react-router-dom';
import s from '..//AdditionalInfo/AdditionalInfo.module.css';
import PropTypes from 'prop-types';

export function AdditionalInfo({ location }) {
  return (
    <div className={s.additionalWrap}>
      <h2>Additional Information</h2>
      <ul>
        <li>
          <Link
            className={s.additionalLink}
            to="cast"
            state={{ from: location }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            className={s.additionalLink}
            to="reviews"
            state={{ from: location }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}

AdditionalInfo.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.bool,
  }).isRequired,
};
