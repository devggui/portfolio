export function Header() {
  return (
    <header className="flex flex-row w-full fixed top-0 py-10 px-20 justify-between items-center bg-transparent">
      <img src="../../public/vite.svg" alt="" className="p-5" />
      <nav className="flex justify-between p-5">        
        <a href="" className="px-5 text-white text-xl antialiased grayscale-0" >Home</a>
        <a href="" className="px-5 text-white text-xl antialiased grayscale-0" >Sobre</a>
        <a href="" className="px-5 text-white text-xl antialiased grayscale-0" >Projetos</a>
        <a href="" className="px-5 text-white text-xl antialiased grayscale-0" >Contato</a>
      </nav>
    </header>
  )
}