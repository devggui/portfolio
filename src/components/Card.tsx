import { LinkTo } from "./LinkTo";

interface CardProps {
  image: string;
  alt: string;
  title: string;
  url: string;
  repository: string;
  languages: string[];
}

export function Card(props: CardProps) {
  return (
    <a href={props.image} className="w-full" >
      <div className="w-full h-80 bg-[#333] outline outline-1 outline-white/50 -outline-offset-8 shadow-card relative overflow-hidden">
        <img src={props.image} alt={props.alt} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[750ms] hover:scale-[1.15]" />        
      </div>      

      <h1 className="text-white text-left font-bold text-2xl pt-4 pb-2 uppercase">{props.title}</h1>
      <div className="flex flex-row">
        {props.languages.map(language => {
          return (
            <p className="pr-5 font-light text-white antialiased">{language}</p>
          )        
        })}
      </div>

      <div className="flex flex-row w-full pt-5 pb-14">
        <LinkTo 
          to={props.url}
          title="VER PROJETO"           
        />
        <span className="px-5"></span>
        <LinkTo 
          to={props.repository}
          title="VER CÓDIGO" 
        />
      </div>
    </a>
  )
}