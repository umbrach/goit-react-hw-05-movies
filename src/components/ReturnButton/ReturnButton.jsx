import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import s from './ReturnButton.module.css';

export function ReturnButton() {
  const location = useLocation();
  return (
    <button className={s.goBackBtn}>
      <Link className={s.GoBackLink} to={location.state?.from ?? '/Home'}>
        Return
      </Link>
    </button>
  );
}
