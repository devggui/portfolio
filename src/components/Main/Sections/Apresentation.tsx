import { ContactMe } from "../../Button/ContactMe";

export function Apresentation() {
  return (
    <section className="flex flex-col items-center justify-center text-center">    
      <h1 className="text-white text-3xl font-bold mb-2 mt-7">Hi! I'm <span className="border-b-[3px] border-[var(--cyan-gradient-from)]">Guilherme Silva</span>.</h1>
      <span className="text-white text-3xl font-bold">Web Developer!</span>
      <p className="text-white text-base font-light mt-5 antialiased">I'm a front-end developer passionate about technology and web applications development.</p>
      <ContactMe />
    </section>
  )
}