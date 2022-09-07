import styles from "../style";
import ProjectsCard from './ProjectsCard';

export default function Projects(){ 
  return (
    <section id="projects" className={ `${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <h1 className="font-poppins font-semibold text-white text-[48px] justify-center">
            Projects
        </h1>
        <ProjectsCard/>
    </section>
  )
}