import { Skill } from "../../Skill";

export function Skills() {
  return (
    <section className="grid items-center justify-center text-center sm:grid-cols-2 lg:grid-cols-3">      
      <Skill 
        image="/src/assets/icons/html.svg"
        alt="Logo do HTML."
        title="HTML"
        experience="2 Ano(s) de experiência"
      />
      <Skill 
        image="/src/assets/icons/css.svg"
        alt="Logo do css"
        title="CSS"
        experience="2 Ano(s) de experiência"
      />      
      <Skill 
        image="/src/assets/icons/javascript.svg"
        alt="Logo do javascript"
        title="Javascript"
        experience="1 Ano(s) de experiência"
      />      
      <Skill 
        image="/src/assets/icons/reactjs.svg"
        alt="Logo do reactjs"
        title="React.Js"
        experience="1 Ano(s) de experiência"
      />
      <Skill 
        image="/src/assets/icons/typescript.svg"
        alt="Logo do typescript"
        title="Typescript"
        experience="1 Ano(s) de experiência"
      />  
      <Skill 
        image="/src/assets/icons/tailwind.svg"
        alt="Logo do tailwind"
        title="Tailwind"
        experience="1 Ano(s) de experiência"
      />     
    </section>
  )
}