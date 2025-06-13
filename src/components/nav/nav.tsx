import { Link } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

function Nav(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth && (
          <li className="header__nav-item user">
            <Link to="/login" className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">{user}</span>
              <span className="header__favorite-count">3</span>
            </Link>
          </li>
        )}
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Login}>
            <span className="header__signout">{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
