import { Input } from "../Input";
import { Logo } from "../Logo";
import { SocialMedia } from "../SocialMedia";

import emailjs from 'emailjs-com'

export function Footer() {
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {        
    e.preventDefault()

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const subject = (document.getElementById('subject') as HTMLInputElement).value
    const message = (document.getElementById('message') as HTMLInputElement).value 

    const data = {
      to_name: 'Guilherme',
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    }    

    emailjs.send('service_1v3yrje', 'template_icag5zj', data, 'iaqV1pGU-u_xeMmdU')
      .then((response) => {
        console.log('SUCCESS', response.status, response.text)
      }, (error) => {
        console.log('FAILED...', error)
      })
  }

  return (
    <footer className="w-full bg-[var(--dark-blue-header-bg)] px-8 py-10 md:px-32 lg:px-32 xl:px-72" id="contact">
      <div className="flex flex-col sm:px-28 lg:flex-row lg:items-start lg:text-left lg:px-0">
        <div className="lg:pr-20 lg:pt-20">
          <h1 className="text-white text-3xl font-bold mt-1 sm:text-5xl">Contato</h1>
          <p className="text-white text-sm font-light mt-5 antialiased">Utilize o formulário para entrar em contato comigo, tirar dúvidas, sucestões, elogios, reclamações ou até mesmo bater um papo.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col mb-14 mt-8" id="form">

          <Input
            name="name"
            id="name"
            placeholder="NOME"
            type="text"                        
          />
          
          <Input
            name="email"
            id="email"
            placeholder="EMAIL"     
            type="email"                               
          />
          
          <Input
            name="subject"
            id="subject"
            placeholder="ASSUNTO" 
            type="text"                                   
          />
          
          <div className="w-full border-b-2 border-white relative mt-8">                            
            <textarea name="message" id="message" placeholder="MENSAGEM" className="text-base text-white block w-full h-28 bg-transparent pt-0 pr-2 pb-0 pl-7"></textarea>
            <span className="block w-full h-full absolute top-0 left-0 pointer-events-none"></span>
          </div>

          <div className="text-right mb-3">
            <button type="submit" className="text-white font-semibold mt-8 p-2 border-b-2 border-[var(--cyan-gradient-from)] antialiased">ENVIAR MENSAGEM</button>
          </div>
        </form>
      </div>

      <hr />   

      <div className="flex flex-col items-center justify-center text-center w-full mt-10 text-white text-2xl sm:flex-row sm:justify-between">
        <Logo />
        <SocialMedia />        
      </div>
      
    </footer>
  )
}