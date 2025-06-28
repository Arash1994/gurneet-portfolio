import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/main.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      \\
      <Header />
      <Main />
      <Footer />
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      {/* <div id="preloader"></div> */}
    </>
  );
}

export default App;
