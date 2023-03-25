import { Skill } from "../../Skill";

export function Skills() {
  return (
    <section className="flex flex-col items-center justify-center text-center">      
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
      <div className="flex flex-col items-center justify-center text-center">
        <img src="../../../public/icons/tailwind.svg" alt="" />
        <h1 className="text-white text-3xl font-bold mt-1">Tailwind CSS</h1>
        <p className="text-white text-base font-light antialiased">0-1 Anos de experiência</p>
      </div>
    </section>
  )
}