import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Input } from "../Input";
import { Logo } from "../Logo";
import { SocialMedia } from "../SocialMedia";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--dark-blue-header-bg)] px-8 py-10" id="contact">
      <h1 className="text-white text-3xl font-bold mt-1">Contato</h1>
      <p className="text-white text-sm font-light mt-5 antialiased">Utilize o formulário para entrar em contato comigo, tirar dúvidas, sucestões, elogios, reclamações ou até mesmo bater um papo.</p>
      
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

      <div className="flex flex-col items-center justify-center text-center w-full mt-10 text-white text-2xl sm:flex-row sm:justify-between">
        <Logo />
        <SocialMedia />        
      </div>
      
    </footer>
  )
}