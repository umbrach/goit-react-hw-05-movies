import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}
