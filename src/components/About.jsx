import { abouts } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import { file, profile } from '../assets';
import Pdf from '../assets/PasionJP_Resume.pdf';


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
    <div id="about" className={ `${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <h1 className="font-poppins font-semibold text-white text-[48px] justify-center">
          About Me
      </h1>
      <section id="abouts" className={`grid md:grid-cols-2 grid-cols-1 flex`}>
        <div className={`${layout.sectionImg} flex-row md:flex hidden`}>
          <img src={profile} alt="profile" />
        </div>

        <div className={`${layout.sectionInfo}`}>
          <div className="flex grid grid-cols-3 sm:gap-4 gap-2 w-full">
            {abouts.map((about, index) => (
                <AboutsCard key={about.id}{...about} index={index}/>
            ))}
          </div>
          <p className={`flex justify-center ${styles.paragraph} mt-5 text-justify w-full`}>I am currently in 3rd year pursuing Bachelor of Science in Computer Science at Technological University of the Philippines. <br /><br /> I started learning to code before college, building IoT and websites as a hobby. Since then, I took a leap and I started to learn various skills such as data analysis, web development, and desktop application development. Aside from coding, I can also do video editing, photo editing, and a little bit of 3D modelling.</p>
          <a href={Pdf} target='_blank' rel='noopener noreferrer'>
            <Button styles="mt-10" value="View CV" svg={file} />
          </a>
        </div>
      </section>
    </div>
    
  )
}

export default About