import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Input } from "./Input";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--dark-blue-header-bg)] px-5 py-10">
      <h1 className="text-white text-3xl font-bold mt-1">Contato</h1>
      <p className="text-white text-base font-light mt-5 antialiased">Utilize o formulário para entrar em contato comigo, tirar dúvidas, sucestões, elogios, reclamações ou até mesmo bater um papo.</p>
      
      <form action="submit" className="w-full flex flex-col mb-14 mt-8">

        <Input
          name="name"
          id="name"
          placeholder="NOME"
        />
        
        <Input
          name="email"
          id="email"
          placeholder="EMAIL"
        />
        
        <Input
          name="subject"
          id="subject"
          placeholder="ASSUNTO"
        />
        
        <div className="w-full border-b-2 border-white relative mt-8">                            
          <textarea name="message" id="message" placeholder="MENSAGEM" className="text-base text-white block w-full h-28 bg-transparent pt-0 pr-2 pb-0 pl-7"></textarea>
          <span className="block w-full h-full absolute top-0 left-0 pointer-events-none"></span>
        </div>

        <div className="text-right mb-3">
          <button type="submit" className="text-white font-semibold mt-8 p-2 border-b-2 border-[var(--cyan-gradient-from)] antialiased">ENVIAR MENSAGEM</button>
        </div>
      </form>

      <hr />   

      <div className="flex flex-col w-full items-center justify-center text-center text-white text-2xl px-20 bg-[var(--dark-blue-header-bg)] mt-7">
        <h1 className="w-full py-5 font-semibold">guilhermesilva</h1>
        <nav className="flex flex-row w-full items-center justify-center text-center">
          <a href="https://github.com/devggui" target="_blank" className="px-3 animation-delay-1000"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/devggui/" target="_blank" className="px-3 animation-delay-1000"><FaLinkedin /></a>
          <a href="https://guilhermesilvazap.linka.ai" target="_blank" className="px-3 animation-delay-1000"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/guilhermeccbsilva/" target="_blank" className="px-3 animation-delay-1000"><FaInstagram /></a>
        </nav>        
      </div>
      
    </footer>
  )
}