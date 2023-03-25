import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export function SocialMedia() {
  return (
    <div>      
      <nav className="flex flex-row w-full items-center justify-center text-center">
        <a href="https://github.com/devggui" target="_blank" className="px-3"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/devggui/" target="_blank" className="px-3"><FaLinkedin /></a>
        <a href="https://guilhermesilvazap.linka.ai" target="_blank" className="px-3"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/guilhermeccbsilva/" target="_blank" className="px-3 sm:pl-3 sm:pr-0"><FaInstagram /></a>
      </nav>
    </div>    
  )
}
