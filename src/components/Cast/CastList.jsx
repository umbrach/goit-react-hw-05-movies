import s from '../Cast/Cast.module.css';
import PropTypes from 'prop-types';

export function CastList({ actorName, character, actorPhoto }) {
  let src = `https://image.tmdb.org/t/p/original${actorPhoto}`;

  if (actorPhoto === null) {
    src =
      'https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg';
  }

  return (
    <li className={s.CastItem}>
      <img src={src} alt="{actorName}" width="140px" />
      <p>{actorName}</p>
      <p> Character: {character}</p>
    </li>
  );
}

CastList.propTypes = {
  actorName: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  actorPhoto: PropTypes.string,
};
