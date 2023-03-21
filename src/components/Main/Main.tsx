import { Apresentation } from "./Sections/Apresentation";
import { Contact } from "./Sections/Contact";
import { Projects } from "./Sections/Projects";
import { Skills } from "./Sections/Skills";

export function Main() {
  return (
    <div>
      <h1 className="text-white">Main</h1>
      <Apresentation />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  )
}