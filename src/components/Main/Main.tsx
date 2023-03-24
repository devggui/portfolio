import { Apresentation } from "./Sections/Apresentation";
import { Projects } from "./Sections/Projects";
import { Skills } from "./Sections/Skills";

export function Main() {
  return (
    <main className="flex flex-col w-full bg-[var(--dark-blue-main-bg)] px-5">      
      <Apresentation />
      <hr className="my-14" />
      <Skills />
      <hr className="my-14" />
      <Projects />             
    </main>
  )
}