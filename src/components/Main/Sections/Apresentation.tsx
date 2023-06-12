import { ContactMe } from "../../Buttons/ContactMe";

export function Apresentation() {
  return (
    <section className="flex flex-col items-center justify-between text-center sm:flex-row-reverse sm:text-left">      
      <div className= "bg-gradient-to-t from-[var(--black-op)] to-transparent">
        <img className="w-96" src="../../public/photo/profile-photo.png" alt="Foto de perfil"/>     
      </div>
      <div className="sm:w-3/5">
        <h1 className="text-white text-2xl font-bold mb-2 mt-7 sm:text-4xl">Oi! Eu sou <span className="border-b-[3px] border-[var(--cyan-gradient-from)]">Guilherme Henrique</span>.</h1>
        <span className="text-white text-2xl font-bold sm:text-4xl">Fullstack Developer!</span>
        <p className="text-center text-white text-sm font-light mt-5 mb-5 pb-2 antialiased sm:text-left">Sou um estudante e profissional apaixonado por tecnologia. Atualmente estudando e aperfeiçoando meus conhecimentos em Front-end, mas com o objetivo no desenvolvimento Fullstack.</p>
        <div>
          <ContactMe 
            title="CONTATE-ME"
            to="#contact"
          />
        </div>
      </div>    
    </section>
  )
}