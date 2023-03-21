import { Apresentation } from "./Sections/Apresentation";
import { Contact } from "./Sections/Contact";
import { Projects } from "./Sections/Projects";
import { Skills } from "./Sections/Skills";

export function Main() {
  return (
    <div className="flex flex-col w-full">      
      <Apresentation />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  )
}