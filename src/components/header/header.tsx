import {ReactNode} from 'react';
import {NavLink} from 'react-router-dom';

function Header({children}: { children?: ReactNode }): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink to="/" className={({isActive}: {isActive: boolean}) => isActive ? 'header__logo-link header__logo-link--active' : 'header__logo-link'}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </NavLink>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
