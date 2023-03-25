import { Skill } from "../../Skill";

export function Skills() {
  return (
    <section className="grid items-center justify-center text-center sm:grid-cols-2 lg:grid-cols-3">      
      <Skill 
        image="../../public/icons/html.svg"
        alt="Logo do HTML."
        title="HTML"
        experience="0-1 Anos de experiência"
      />
      <Skill 
        image="../../public/icons/css.svg"
        alt="Logo do css"
        title="CSS"
        experience="0-1 Anos de experiência"
      />      
      <Skill 
        image="../../public/icons/javascript.svg"
        alt="Logo do javascript"
        title="Javascript"
        experience="0-1 Anos de experiência"
      />      
      <Skill 
        image="../../public/icons/reactjs.svg"
        alt="Logo do reactjs"
        title="React.Js"
        experience="0-1 Anos de experiência"
      />
      <Skill 
        image="../../public/icons/typescript.svg"
        alt="Logo do typescript"
        title="Typescript"
        experience="0-1 Anos de experiência"
      />  
      <Skill 
        image="../../public/icons/tailwind.svg"
        alt="Logo do tailwind"
        title="Tailwind"
        experience="0-1 Anos de experiência"
      />     
    </section>
  )
}