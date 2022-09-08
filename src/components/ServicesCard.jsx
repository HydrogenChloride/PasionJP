import { services } from '../constants';
import styles, { layout }  from '../style';
import { arrow, closeBlue, check } from "../assets";
import { useState } from "react";

const ServicesCard = () => {
  const [toggleState, setToggleState] = useState(0);
  const [toggleModal, setToggleModal] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index)
    console.log(index)
  }
  
  const toggleModalCard = (index) => {
    setToggleModal(index)
    toggleTab(1)
  }

  return(
    <div>
      <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-10 gap-2 sm:px-36 md:px-20 px-6 ${layout.section}`}>
        {services.map((service, index) => (
          <div className="grid grid-row-3 flex flex-col pt-12 pb-6 rounded-[20px] max-w-[100%] my-5 skills-card">
            <div key={service.id} className="flex flex-wrap">
              <div className="flex flex-col ss:my-0 my-4 min-w-[100px] px-6 mt-4 mb-2">
                <div className={`flex justify-center items-center w-[44px] h-[44px] rounded-full ${styles.flexCenter} bg-dimBlue mb-4`}>
                  <img src={service.icon} alt={service.title} className="w-[100%] h-[100%] p-2.5"/>
                </div>

                <h4 className="font-poppins font-semibold text-[18px] leading-[27px] h-[100%] text-white flex-wrap">
                  {service.title}
                </h4>

                <div className="flex flex-row font-poppins font-normal text-[14px] leading-[27px] text-dimWhite more__button" onClick={() => toggleModalCard(index)}>
                  <span>View More</span>
                  <img src={arrow} alt="arrow" className="more__button-icon"/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={toggleState !==  0 ? "modalCard active-modal" : "modalCard"}>
        <div className="grid grid-row-3 flex flex-col py-6 px-6 rounded-[20px] max-w-[100%] my-5 skills-card">
          <div className="mb-2">
            <div className="flex flex-row justify-end">
              <img src={closeBlue} alt="close" onClick={() => toggleTab(0)} className="w-[20px] h-[20px]"/>
            </div>
            <div className="flex flex-col justify-center max-w-[300px] sm:mx-16 mx-0">
              <div className="flex flex-wrap justify-center py-4 font-poppins font-semibold text-[20px] text-center leading-[27px] text-white">
                {services[toggleModal].title}
              </div>
              <div className="flex flex-wrap justify-center font-poppins font-normal text-[16px] text-center leading-[27px] text-dimWhite">
                {services[toggleModal].serviceInfo}
              </div>
            </div>
            <div className="flex flex-col">
              {services[toggleModal].serviceDetails.map((serviceDetail) => (
                <ul className="list-none mt-4 flex-wrap">
                    <li key={serviceDetail.index}>
                      <div className="flex flex-row items-center">
                        <img src={check} alt="check" className="flex items-center w-[20px] h-[20px]"/>
                        <h4 className="flex font-poppins font-normal justify-center items-center text-[14px] leading-[32px] text-white ml-4">{serviceDetail.detail}</h4>
                      </div>
                    </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard