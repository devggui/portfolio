import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import axios from 'axios';

import { Card } from '../../Card'
import { ContactMe } from "../../ContactMe";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

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
    axios.get('/src/js/data.json').then(response => { 
      setCards(response.data)   
      
      console.log(response.data)
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
        slidesPerView={2}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
      {/* <div className="grid w-full sm:grid-cols-2 min-[1600px]:grid-cols-3 gap-x-8"> */}
        {cards.map(card => {
          return (
            <SwiperSlide>
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
      {/* </div> */}
      </Swiper>
    </section>
  )
}