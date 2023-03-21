import { IoIosArrowForward } from 'react-icons/io';

export function Apresentation() {
  return (
    <section className="flex flex-row w-full h-96 items-center text-justify justify-center my-5">    
        <div className="pr-14">
          <h1 className="text-white text-5xl font-bold antialiased mb-5">Hi! I'm Guilherme Henrique,</h1>
          <h2 className="text-[var(--purple)] text-5xl font-bold antialiased mb-5">Web developer!</h2>
          <p className="text-gray-300 text-2xl antialiased mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus minus dicta molestiae nemo mollitia quaerat iusto et, tempora dolorem rem aperiam corporis aut, labore nisi praesentium architecto dolore doloribus.</p>
          <button className="flex flex-row items-center justify-center text-center w-48 h-14 text-white text-base bg-[var(--purple)] font-bold rounded-sm">Let's connect <IoIosArrowForward size={24}/> </button>
        </div>
        <img 
          src="./src/assets/eu.png" 
          alt="" 
          className="w-96 h-96 rounded-[50%] border-[1px] border-solid border-white" 
        />
    </section>
  )
}