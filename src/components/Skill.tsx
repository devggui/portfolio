interface Skill {
  image: string;
  alt: string;
  title: string;  
}

export function Skill(props: Skill) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-8">
      <img src={props.image} alt={props.alt} />
      <h1 className="text-white text-3xl font-bold mt-1">{props.title}</h1>      
    </div>
  )
}