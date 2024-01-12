import { Skill } from "../../Skill";

export function Skills() {
  return (
    <section className="grid items-center justify-center text-center sm:grid-cols-2 lg:grid-cols-3">                  
      <Skill 
        image="/icons/reactjs.svg"
        alt="REACTJS"
        title="React.Js"        
      />
      <Skill 
        image="/icons/reactjs.svg"
        alt="REACTNATIVE"
        title="React Native"        
      />
      <Skill 
        image="/icons/next.svg"
        alt="NEXTJS"
        title="Next.js"        
      />      
      <Skill 
        image="/icons/typescript.svg"
        alt="TYPESCRIPT"
        title="Typescript"        
      />
      <Skill 
        image="/icons/javascript.svg"
        alt="NODE"
        title="Node.js"
      />   
      <Skill 
        image="/icons/express.svg"
        alt="EXPRESS"
        title="Express.js"
      />     
      <Skill 
        image="/icons/oracle.svg"
        alt="ORACLE PL/SQL"
        title="Oracle PL/SQL"        
      />
      <Skill 
        image="/icons/firebase.svg"
        alt="FIREBASE"
        title="Firebase"        
      />
      <Skill 
        image="/icons/mysql.svg"
        alt="MYSQL"
        title="MySQL"        
      />
    </section>
  )
}