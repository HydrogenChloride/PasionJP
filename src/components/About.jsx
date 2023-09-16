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
          <p className={`flex justify-center ${styles.paragraph} mt-5 text-justify w-full`}>I'm JP Pasion, and I'm truly passionate about the exciting world of technology. I'm currently in my fourth year, pursuing a Bachelor of Science in Computer Science at the Technological University of the Philippines. But my journey into the tech world started long before college. It all began as a hobby, just me and my love for coding.
          <br /><br /> Over the years, that hobby has blossomed into a dynamic set of skills that cover a wide range of cool stuff. I've gone from tinkering with IoT projects to creating snazzy, responsive websites. I've also dabbled in data analysis, web development, and even tried my hand at building desktop applications. But my interests don't stop at coding; I've ventured into the creative side of things too. I've played around with video and photo editing, and I've dived into the world of 3D modeling, crafting and bringing my creations to life through 3D printing.
          <br /><br /> What defines my journey is an unquenchable curiosity. I'm always eager to learn and improve, pushing the boundaries of what I can achieve. I'm on a mission to explore and conquer the exciting universe of technology!
          </p>
          <a href={Pdf} target='_blank' rel='noopener noreferrer'>
            <Button styles="mt-10" value="View CV" svg={file} />
          </a>
        </div>
      </section>
    </div>
    
  )
}

export default About