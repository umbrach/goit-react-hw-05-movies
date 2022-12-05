import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';


export default function Navigation() {
  return (
    <nav className={s.mainnav}>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.navitem)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.navitem)}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
