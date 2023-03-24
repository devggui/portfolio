import { Header } from './components/Header/Haeder';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

import './styles/main.css';
import './styles/root.css';
import 'swiper/css';

function App() {  
  return (
    <div className="flex flex-col items-center text-center w-screen h-screen">
      <Header />      
      <Main />      
      <Footer />
    </div>
  )
}

export default App
