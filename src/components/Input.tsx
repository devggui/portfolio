interface Input {
  id: string;
  name: string;
  placeholder: string;  
  type: string;  
}

export function Input(props: Input) {
  return (
    <div className="w-full border-b-2 border-white relative mt-5">        
      <input 
        type={props.type} 
        name={props.name} 
        id={props.id} 
        placeholder={props.placeholder} 
        className="text-base text-white block w-full h-14 bg-transparent pt-0 pr-11 pb-0 pl-7" 
        required        
      />
      <span className="block w-full h-full absolute top-0 left-0 pointer-events-none"></span>
    </div>
  )
}