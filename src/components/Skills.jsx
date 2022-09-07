import styles from "../style";
import SkillsCard from './SkillsCard';

const Skills = () => (
    <section id="skills" className={ `${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <h1 className="font-poppins font-semibold text-white text-[48px] justify-center">
          Skills
      </h1>

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      
      <SkillsCard />
    </section>
)

export default Skills