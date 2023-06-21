import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from "swiper";

import axios from 'axios';

import { Card } from '../../Card'
import { ContactMe } from "../../Buttons/ContactMe";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination]);

interface Card {
  id: number;
  image: string;
  alt: string
  title: string;
  url: string;
  repository: string;
  languages: string[];
}

export function Projects() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    axios.get('/data.json').then(response => { 
      setCards(response.data)         
    })
  }, [])  

  return (
    <section className="flex flex-col items-center justify-center text-center mb-8"> 
      <div className="flex flex-row w-full items-center text-center justify-between my-8">
        <h1 className="text-3xl font-bold text-white sm:text-5xl">Projetos</h1>
        <ContactMe 
          title="CONTATE-ME"
          to="#contact"
        />
      </div>
      <Swiper                        
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
        slidesPerView={1} 
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2            
          },
          1651: {
            slidesPerView: 3            
          }
        }}       
      >      
        {cards.map((card, index) => {
          return (
            <SwiperSlide
              key={index}
            >
              <Card 
                key={card.id}                
                image={card.image}
                alt={card.alt}
                title={card.title}
                url={card.url}
                repository={card.repository}
                languages={card.languages}
              />
            </SwiperSlide>        
          )
        })}      
      </Swiper>
    </section>
  )
}