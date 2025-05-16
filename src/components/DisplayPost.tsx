import { Outlet, Link } from 'react-router-dom';
import './components.css';

export const DisplayPost = () => {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="logo">
          Posts CRUD
        </Link>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
