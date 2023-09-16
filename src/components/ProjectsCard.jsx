import { projects } from '../constants';
import styles from '../style';
import { arrow, closeBlue, launch, code } from "../assets";
import { useState } from "react";

const ProjectsCard = (value) => {
  const [tab, setTab] = useState("Website Desktop");
  const [toggleState, setToggleState] = useState(0);
  const [toggleModal, setToggleModal] = useState(0);
  const video = document.getElementById("demo");
  
  function activeProject(targ){
    setTab(targ)
  }

  const toggleTab = (index) => {
    setToggleState(index)
    videoStopper()
  }
  
  const toggleModalCard = (index) => {
    setToggleModal(index)
    toggleTab(1)
  }

  function videoStopper() {
    video.src = video.src
  }

  return(
    <div>
      <div className={`${styles.paddingY}`}>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row sm:gap-10 gap-4 justify-center font-poppins font-normal text-dimWhite text-[14px]">
            <button className={`px-2 py-1 ${tab === "Website Desktop" ? 'projects-active' : ''}`} onClick={() => activeProject("Website Desktop")} >All</button>
            <button className={`px-2 py-1 ${tab === "Desktop" ? 'projects-active' : ''}`} onClick={() => activeProject("Desktop")}>Desktop</button>
            <button className={`px-2 py-1 ${tab === "Website" ? 'projects-active' : ''}`} onClick={() => activeProject("Website")}>Website</button>
          </div>
        </div>
        <div className="flex justify-center gap-4 sm:py-8 py-6 flex sm:flex-row flex-wrap sm:py-10">
          {projects.filter(project => tab.includes(project.category)).map((filteredProject) => (
            <div className="grid grid-row-3 flex flex-col rounded-[20px] my-5 skills-card" onClick={() => {toggleModalCard(filteredProject.arr)}}>
              <div key={filteredProject.key} className="flex flex-wrap py-6 max-w-[300px]">
                <div className="flex flex-col ss:my-0 my-4 min-w-[100px] px-6 py-1">
                  <div className={`w-[100%] h-[100%] ${styles.flexCenter} mb-4`}>
                    <img src={filteredProject.image} alt={filteredProject.title} className="flex justify-center w-[100%] h-[100%] p-2.5"/>
                  </div>

                  <h4 className="font-poppins font-semibold text-[18px] leading-[27px] h-[100%] text-white flex-wrap max-w-[220px]">
                    {filteredProject.title}
                  </h4>
                 
                  <div className="flex flex-row font-poppins font-normal text-[14px] leading-[27px] text-dimWhite more__button"> 
                    <span>View More</span>
                    <img src={arrow} alt="arrow" className="more__button-icon"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={toggleState !==  0 ? "modalCard active-modal" : "modalCard"}>
        <div className="flex grid sm:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-1 rounded skills-card">
          <div className="flex flex-col"> 
            <div className="py-6 px-6 rounded-[20px] max-w-[100%] skills-card h-full">
              <div className="flex flex-col items-end">
                <img src={closeBlue} alt="close" onClick={() => toggleTab(0)} className="sm:hidden w-[20px] h-[20px]"/>
              </div>
              <div className="flex flex-col justify-between h-full overflow-y-auto sm:max-h-full max-h-80">
                <div className="flex flex-wrap justify-center py-4 font-poppins font-semibold text-[20px] text-center leading-[27px] text-white"> 
                  <iframe id="demo" width="520" height="293" src={projects[toggleModal].embed} title={projects[toggleModal].embedTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>  
                <div className="flex flex-row justify-center px-8 pt-2">
                  <div className="max-w-[200px] h-[40px] rounded-l-sm border-2 border-cyan-400 p-[2px] cursor-pointer w-full">
                    <a href={projects[toggleModal].demo} target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-row justify-between items-center px-4 font-poppins font-normal text-[14px] leading-[12px] text-white more__button h-full">
                        <span>View Demo</span>
                        <img src={launch} alt="arrow" className="more__button-icon w-[20px]"/>
                      </div>
                    </a>
                  </div>
                  <div className="max-w-[200px] h-[40px] rounded-r-sm border-2 border-cyan-400 p-[2px] cursor-pointer w-full">
                    <a href={projects[toggleModal].sourceCode} target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-row justify-between items-center px-4 font-poppins font-normal text-[14px] leading-[12px] text-white more__button h-full">
                        <span>Source Code</span>
                        <img src={code} alt="arrow" className="more__button-icon h-[20px] w-[20px]"/>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="sm:py-6 py-2">
                  <div className="flex flex-wrap justify-start px-8 font-poppins font-semibold text-[18px] leading-[27px] text-white">
                    Tech stacks used:
                  </div>
                  <div className="flex flex-wrap px-8 justify-center font-poppins font-normal text-[16px] text-center leading-[27px] text-dimWhite w-full">
                    {projects[toggleModal].techStacks}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-6 px-6">
            <div className="flex flex-col items-end">
              <img src={closeBlue} alt="close" onClick={() => toggleTab(0)} className="flex flex-row sm:flex hidden w-[20px] h-[20px]"/>
            </div>
            <div className="flex flex-col items-center sm:justify-center overflow-y-auto">
              <div className="flex flex-wrap justify-center py-4 font-poppins font-semibold text-[20px] text-center leading-[27px] text-white">
                {projects[toggleModal].title}
              </div>
              <div className="flex flex-wrap justify-center font-poppins font-normal text-[16px] text-center leading-[27px] text-dimWhite max-w-[300px]">
                {projects[toggleModal].projectDetail}
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default ProjectsCard