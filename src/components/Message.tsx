interface Message {
  text: string;
  colorText: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function Message(props: Message) {
  return (
    <span className={`flex flex-row ${props.colorText} absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
      {props.text} 
      <img className="ml-2" src={props.src} alt={props.alt} width={props.width} height={props.height} /> 
    </span>
  )
}