import Header from '../../components/header/header';
import FormLogin from '../../components/form-login/form-login';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Login(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <HelmetProvider>
        <Helmet>
          <title>Страница авторизации</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <FormLogin />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
