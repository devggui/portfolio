import { useEffect } from "react";
import { HashRouter, useLocation } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { ToTop } from "./components/Buttons/ToTop";
import './styles/global.css';
import 'swiper/css';

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {  
  return (
    <div className="flex flex-col items-center text-center w-screen h-screen">
      <HashRouter>
        <ScrollToTop />
      </HashRouter>
      
      <Header />      
      <Main />      
      <Footer />

      <ToTop />
    </div>
  )
}

export default App
