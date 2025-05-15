import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';
import {Outlet} from 'react-router-dom';

function Layout({showNav}: {showNav: boolean}): JSX.Element {
  return (
    <React.Fragment>
      <Header>
        {showNav && <Nav />}
      </Header>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default Layout;
