import React from 'react';
import { withStore } from 'react-context-hook'
import { useStore } from 'react-context-hook'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import App from './App';
import Logo from './assets/logo.png';
import LogoTransparent from './assets/logo-transparent.png';
import AddDataPage from './AddDataPage';

import { localize } from './languages';
const initialState = { lang: 'ru' }
function Navigation() {

  const [lang, setLang] = useStore('lang');
  return (
    <>
      <span className="pre-header">
        <Link to="/"><img src={Logo} alt="Audarmasy" /></Link>
        <span className="page-language-selector">
          <a href="#" onClick={() => setLang('kz')}>Қаз</a>/<a href="#" onClick={() => setLang('ru')}>Рус</a>
        </span>
        <span className="auth-widget"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg>
          <Link to="/auth" className="auth-link">Вход/регистрация</Link>
        </span>
        <span className="empty-space">&nbsp;</span>
      </span>
      <nav>
        <ul>
          <li>
            <Link to="/">{localize(lang, "termins")}</Link>
          </li>
          <li>
            <Link to="/">{localize(lang, "community")}</Link>
          </li>
          <li>
            <Link to="/">{localize(lang, "faq")}</Link>
          </li>
          <li>
            <Link to="/add">{localize(lang, "new_word")}</Link>
          </li>
          <li>
            <Link to="/">{localize(lang, "settings")}</Link>
          </li>
          <li>
            <Link to="/">{localize(lang, "support")}</Link>
          </li>
          <li>
            <Link to="/">{localize(lang, "support")}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}


function Main() {
  return (
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/audarmasy" exact element={<App />} />
      <Route path="/add" element={<AddDataPage />} />
    </Routes>
  );
}

function Footer() {
  return (
    <footer>
      <Link to="/" className="logo"><img src={LogoTransparent} alt="Audarmasy" /></Link>
      <div className="footer-nav-container">
        <ul className="footer-nav">
          <li>О проекте</li>
          <li>Статьи</li>
          <li>Написать нам</li>
          <li>Настройки</li>
          <li>Вход/Регистрация</li>
          <li>Техническая поддержка</li>
        </ul>
        <span id="copyright">
          2024 Audarmaşy All rights reserved.
        </span>
      </div>
    </footer>
  )
}


function AppRouter() {
  return (
    <Router>
      <div>
        <Navigation />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default withStore(AppRouter, initialState);