import { skills } from '../constants';
import styles, { layout }  from '../style';

const SkillsCard = () => (
    <div className={`gap-4 sm:py-8 py-6 ${layout.section}`}>
      {skills.map((skill) => (
        <div className="flex items-center justify-center flex-col px-5 pt-8 rounded-[20px] max-w-[100%] sm:mr-5 my-5 skills-card w-full">
          <div key={skill.key} className="flex flex-wrap">
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px] px-6">
              <h4 className="flex items-center text-center justify-center font-poppins font-semibold text-[22px] leading-[27px] text-white">
                {skill.title}
              </h4>

              <ul className="columns-2 list-none mt-4 flex-wrap">
                {skill.techStacks.map((techStack, index) => (
                  <li key={techStack.index} className={`${index !== skill.length -1 ? 'mb-4' : 'mb-0'}`}>
                      <div className="flex flex-row">
                        <div className={`w-[44px] h-[43px] rounded-full ${styles.flexCenter} bg-dimBlue mb-4 sm:flex hidden`}>
                          <img src={techStack.icon} alt={techStack.title} className="w-[50%] h-[50%]"/>
                        </div>
                        <h4 className="flex font-poppins font-normal justify-center text-[14px] leading-[32px] text-white ml-4">{techStack.skill}</h4>
                      </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
)

export default SkillsCard