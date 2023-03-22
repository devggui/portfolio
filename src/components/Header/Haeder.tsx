import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export function Header() {
  return (
    <header className="flex flex-col w-full items-center justify-center text-center text-white text-2xl px-20 bg-[var(--dark-blue-header-bg)] bg-[url('../../public/bg-curvy-mobile.svg')] bg-no-repeat bg-bottom">
      <h1 className="w-full py-5 font-semibold">guilhermesilva</h1>
      <div className="bg-gradient-to-t from-[var(--black-op)] to-transparent">
        <nav className="flex flex-row w-full items-center justify-center text-center">
          <a href="" className="px-2 animation-delay-1000"><FaGithub /></a>
          <a href="" className="px-2 animation-delay-1000"><FaLinkedin /></a>
          <a href="" className="px-2 animation-delay-1000"><FaWhatsapp /></a>
          <a href="" className="px-2 animation-delay-1000"><FaInstagram /></a>
        </nav>
        <img src="../../public/profile-photo.png" alt="Foto de perfil" className="w-44" /> 
      </div>
    </header>
  )
}