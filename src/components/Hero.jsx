import styles from '../style';
import { profile, msgArrow } from '../assets';
import Button from './Button';
import { heroSocials } from '../constants';

const Hero = () => (
  <section id="home" className={`grid md:grid-cols-6 grid-cols-1 flex md:flex-row flex-col sm:py-16 py-6 sm:px-16 px-6`}>
      <div className="flex flex-col md:flex hidden justify-center">
        {heroSocials.map((social, index) => (
          <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== heroSocials.length -1 ? 'mb-6': 'mb-0' }`}/>
        ))}
      </div>

      <div className="col-span-3">
        <div className="flex flex-row justify-between items-center w-full"> 
          <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[42px] text-white ss:leading-[100px] leading-[75px]">
            JP Pasion
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          </div>
        </div>

        <div className="justify-between items-center w-full">
          <h2 className="font-poppins font-normal ss:text-[42px] text-[32px] text-dimWhite ss:leading-[100px] leading-[75px] w-full">
              Full-stack developer
          </h2>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>I'm very passionate at full-stack web and software development.</p>
        <Button styles="mt-10" value="Message Me" svg={msgArrow}/>
      </div>

      <div className={`col-span-2 flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={profile} alt="billing" className="md:block hidden relative z-[5] object-contain px-8"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>  
  </section>
)


export default Hero