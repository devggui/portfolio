import { ContactMe } from "../../Buttons/ContactMe";

export function Apresentation() {    
  const text = ['Fullstack Developer!']    

  return (
    <section className="flex flex-col items-center justify-between text-center lg:flex-row-reverse lg:text-left">      
      <img className="w-96 rounded-full mt-5" src="https://www.github.com/devggui.png" alt="Foto de perfil"/>           
      <div className="sm:w-3/5 sm:max-w-lg 2xl:max-w-2xl">
        <h1 className="text-white text-2xl font-bold mb-2 mt-7 sm:text-4xl">Oi! Eu sou <span className="border-b-[3px] border-[var(--cyan-gradient-from)]">Guilherme Henrique</span>.</h1>
        
        <div className="typing-animation">
          <span className="text text-[var(--cyan-gradient-from)] text-2xl font-bold sm:text-4xl" id="typingText">{text}</span>
        </div>                        

        <p className="text-center text-white text-xl font-light mt-5 mb-5 pb-2 antialiased sm:text-left">Sou um estudante e profissional apaixonado por tecnologia. Atualmente estudando e aperfeiçoando meus conhecimentos em Front-end, mas com o objetivo no desenvolvimento Fullstack.</p>
        
        <ContactMe title="CONTATE-ME" to="#contact" />        
      </div>    
    </section>
  )
}