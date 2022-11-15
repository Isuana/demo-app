import { Outlet, Link } from "react-router-dom";
import './layout.css';

const Layout = () => {
  return (
    <>
      <nav id="home_center">
        <ul className="home-style">
          <li className="home-next">
            <Link to="/">Home</Link>
          </li>
          <li className="home-next">
            <Link to="/about_me">About Me</Link>
          </li>
          <li className="home-next">
            <Link to="/first_app">First App</Link>
          </li>
          <li className="home-next">
            <Link to="/factorial">Factorial</Link>
          </li>
          <li className="home-next">
            <Link to="/fibonacci">Fibonacci</Link>
          </li>
        </ul>
      </nav>

      <div id="area_style">
        <Outlet />
      </div>

      <div className="text-center">
        <p><strong>*strona dostosowana dla użytkowników telefonów</strong></p>
      </div>
    </>
  )
};

export default Layout;
