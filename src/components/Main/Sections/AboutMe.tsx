export function AboutMe() {      
  return (
    <section className="flex flex-col items-center justify-between text-center md:items-start md:text-start">            
      <h1 className="text-3xl font-bold text-white sm:text-5xl">Mais sobre mim</h1>

      <div className="sm:w-3/5 sm:max-w-lg 2xl:max-w-4xl">        
        <p className="text-center text-white text-xl font-light mt-5 mb-5 pb-2 antialiased sm:text-left">Possuo conhecimentos com React, React Native e Node a aproximadamente 3 anos, bem como frameworks como Next.js e Express. Além disso, trabalho e possuo conhecimentos com o banco de dados Oracle e realizo projetos pessoais utilizando o banco de dados Firebase disponibilizado pela Google por sua praticidade em integrações.</p>        
        <p className="text-center text-white text-xl font-light mt-5 mb-5 pb-2 antialiased sm:text-left">Recentemente (01/2024) publiquei o primeiro aplicativo de autoria própria na Play Store, tratando-se de um app para delivery de produtos alimentícios. Pode ser encontrado através da seção de projetos.</p>                        
      </div>    
    </section>
  )
}