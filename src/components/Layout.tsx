import { Outlet, Link } from 'react-router-dom';
import './layout.css';

export const Layout = () => {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="logo">
          Сообщения пользователя
        </Link>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
