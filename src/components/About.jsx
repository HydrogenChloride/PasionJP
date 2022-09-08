import { abouts } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import { file, profile } from '../assets';

const AboutsCard = ({icon, title, content, index}) => (
  <div className={`flex flex-col items-center justify-center sm:p-6 p-2 rounded-[20px] feature-card`}>
    <div className={`w-[64px] h-[63px] rounded-full ${styles.flexCenter} bg-dimBlue mb-4`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col justify-center items-center">
      <h4 className="font-poppins font-semibold text-white text-[16px] leading-[23px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[24px]"> 
        {content}
      </p>
    </div>
  </div>
)

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center">
      <h1 className="font-poppins font-semibold text-white text-[48px] justify-center">
          About Me
      </h1>
      <section id="abouts" className={`grid md:grid-cols-2 grid-cols-1 flex ${layout.section}`}>
        <div className={`${layout.sectionImg} flex-row md:flex hidden`}>
          <img src={profile} alt="profile" />
        </div>

        <div className={`${layout.sectionInfo}`}>
          <div className="flex grid grid-cols-3 sm:gap-4 gap-2 w-full">
            {abouts.map((about, index) => (
                <AboutsCard key={about.id}{...about} index={index}/>
            ))}
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
          <Button styles="mt-10" value="Download CV" svg={file} />
        </div>
      </section>
    </div>
    
  )
}

export default About