import { projects } from '../constants';
import styles, { layout }  from '../style';
import { arrow } from "../assets";
import { useEffect, useState } from "react";

const ProjectsCard = (value) => {
  const [tab, setTab] = useState("Website Desktop");

  function activeProject(targ){
    setTab(targ)
  }

  return(
    <div className={`${styles.paddingY}`}>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row sm:gap-10 gap-4 justify-center font-poppins font-normal text-dimWhite text-[14px]">
          <button className={`px-2 py-1 ${tab === "Website Desktop" ? 'projects-active' : ''}`} onClick={() => activeProject("Website Desktop")} >All</button>
          <button className={`px-2 py-1 ${tab === "Desktop" ? 'projects-active' : ''}`} onClick={() => activeProject("Desktop")}>Desktop</button>
          <button className={`px-2 py-1 ${tab === "Website" ? 'projects-active' : ''}`} onClick={() => activeProject("Website")}>Website</button>
        </div>
      </div>
      <div className="flex justify-center gap-4 sm:py-8 py-6 flex sm:flex-row flex-wrap sm:py-10">
        {projects.filter(project => tab.includes(project.category)).map(filteredProject => (
          <div className="grid grid-row-3 flex flex-col rounded-[20px] my-5 skills-card">
            <div key={filteredProject.key} className="flex flex-wrap py-6 max-w-[300px]">
              <div className="flex flex-col ss:my-0 my-4 min-w-[100px] px-6 py-1">
                <div className={`w-[100%] h-[100%] ${styles.flexCenter} mb-4`}>
                  <img src={filteredProject.image} alt={filteredProject.title} className="flex justify-center w-[100%] h-[100%] p-2.5"/>
                </div>

                <h4 className="font-poppins font-semibold text-[18px] leading-[27px] h-[100%] text-white flex-wrap">
                  {filteredProject.title}
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
    </div>
  )
}

export default ProjectsCard