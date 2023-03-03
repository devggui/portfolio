interface CardProps {
  image: string;
  title: string;
  url: string;
}

export function Card(props: CardProps) {
  return (
    <a href={props.url}>
      <div className="w-64 h-80 m-2 bg-[#333] rounded-xl outline outline-1 outline-white/50 -outline-offset-8 shadow-card relative overflow-hidden">
        <img src={props.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[750ms] hover:scale-[1.15]" />
        <h3 className="absolute left-6 bottom-6 text-xl text-white font-bold">{props.title}</h3>
      </div>
    </a>
  )
}