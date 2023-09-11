import { Skill } from "../../Skill";

export function Skills() {
  return (
    <section className="grid items-center justify-center text-center sm:grid-cols-2 lg:grid-cols-3">      
      <Skill 
        image="/icons/html.svg"
        alt="HTML"
        title="HTML"        
      />
      <Skill 
        image="/icons/css.svg"
        alt="CSS"
        title="CSS"        
      />      
      <Skill 
        image="/icons/javascript.svg"
        alt="JAVASCRIPT"
        title="Javascript"        
      />      
      <Skill 
        image="/icons/reactjs.svg"
        alt="REACTJS"
        title="React.Js"        
      />
      <Skill 
        image="/icons/tailwind.svg"
        alt="TAILWINDCSS"
        title="Tailwind CSS"        
      />
      <Skill 
        image="/icons/typescript.svg"
        alt="TYPESCRIPT"
        title="Typescript"        
      />  
      <Skill 
        image="/icons/next.svg"
        alt="NEXTJS"
        title="Next.js"        
      />
      <Skill 
        image="/icons/oracle.svg"
        alt="ORACLE PL/SQL"
        title="Oracle PL/SQL"        
      />
      <Skill 
        image="/icons/express.svg"
        alt="EXPRESS"
        title="Express.js"
      />     
    </section>
  )
}