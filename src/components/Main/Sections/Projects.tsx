import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import axios from 'axios';

import { Card } from '../../Card/Card'

interface Card {
  id: string;
  image: string;
  title: string;
  url: string;
}

export function Projects() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    axios.get('/src/js/data.json').then(response => { 
      setCards(response.data)   
      
      console.log(response.data)
    })
  }, [])
  
  return (
    <div className="flex max-w-[1344px]"> 
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