import { useEffect, useState } from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from './components/Card';

import './styles/main.css';
import 'swiper/css'

interface Card {
  id: string;
  image: string;
  title: string;
  url: string;
}

function App() {  
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5173/src/js/data.json').then(response => { 
      setCards(response.data)   
      
      console.log(response.data)
    })
  }, [])


  return (
    <div className="flex max-w-[1344px] w-screen h-screen mx-auto justify-center items-center">      
      <Swiper            
        slidesPerView={4}        
        pagination={true}        
      >
        {cards.map(card => {
          return (
            <SwiperSlide>
              <Card 
                key={card.id}
                image={card.image}
                title={card.title}
                url={card.url}
              />
            </SwiperSlide>        
          )
        })}
      </Swiper>
    </div>
  )
}

export default App
