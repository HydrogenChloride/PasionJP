import { services } from '../constants';
import styles, { layout }  from '../style';
import { arrow } from "../assets";

const ServicesCard = () => (
    <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-10 gap-2 sm:px-36 md:px-20 px-6 ${layout.section}`}>
      {services.map((service) => (
        <div className="grid grid-row-3 flex flex-col pt-12 pb-6 rounded-[20px] max-w-[100%] my-5 skills-card">
          <div key={service.id} className="flex flex-wrap">
            <div className="flex flex-col ss:my-0 my-4 min-w-[100px] px-6 mt-4 mb-2">
              <div className={`flex justify-center items-center w-[44px] h-[44px] rounded-full ${styles.flexCenter} bg-dimBlue mb-4`}>
                <img src={service.icon} alt={service.title} className="w-[100%] h-[100%] p-2.5"/>
              </div>

              <h4 className="font-poppins font-semibold text-[18px] leading-[27px] h-[100%] text-white flex-wrap">
                {service.title}
              </h4>

              <div className="flex flex-row font-poppins font-normal text-[14px] leading-[27px] text-dimWhite more__button">
                <a href="#">View More</a>
                <img src={arrow} alt="arrow" className="more__button-icon"/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
)

export default ServicesCard