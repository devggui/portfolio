import { LinkTo } from "../../LinkTo";

export function Apresentation() {
  return (
    <section className="flex flex-col items-center justify-center text-center">    
      <h1 className="text-white text-2xl font-bold mb-2 mt-7">Oi! Eu sou <span className="border-b-[3px] border-[var(--cyan-gradient-from)]">Guilherme Silva</span>.</h1>
      <span className="text-white text-2xl font-bold">Fullstack Developer!</span>
      <p className="text-center text-white text-sm font-light mt-5 mb-5 pb-2 antialiased">Sou um estudante e profissional apaixonado por tecnologia e pelo ecositema de desenvolvimento. Atualmente estudando e aperfeiçoando meus conhecimentos em Front-end, mas focado no desenvolvimento Fullstack.</p>
      <LinkTo 
        title="CONTACT ME"
        to="#contact"
      />
    </section>
  )
}