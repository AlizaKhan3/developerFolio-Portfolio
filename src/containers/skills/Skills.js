// import React, {useContext} from "react";
// import "./Skills.scss";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
// import {illustration, skillsSection} from "../../portfolio";
// import {Fade} from "react-reveal";
// import codingPerson from "../../assets/lottie/codingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import StyleContext from "../../contexts/StyleContext";

// export default function Skills() {
//   const {isDark} = useContext(StyleContext);
//   if (!skillsSection.display) {
//     return null;
//   }
//   return (
//     <div className={isDark ? "dark-mode main" : "main"} id="skills">
//       <div className="skills-main-div">
//         <Fade left duration={1000}>
//           <div className="skills-image-div">
//             {illustration.animated ? (
//               <DisplayLottie animationData={codingPerson} />
//             ) : (
//               <img
//                 alt="Man Working"
//                 src={require("../../assets/images/developerActivity.svg")}
//               ></img>
//             )}
//           </div>
//         </Fade>
//         <Fade right duration={1000}>
//           <div className="skills-text-div">
//             <h1
//               className={isDark ? "dark-mode skills-heading" : "skills-heading"}
//             >
//               {skillsSection.title}{" "}
//             </h1>
//             <p
//               className={
//                 isDark
//                   ? "dark-mode subTitle skills-text-subtitle"
//                   : "subTitle skills-text-subtitle"
//               }
//             >
//               {skillsSection.subTitle}
//             </p>
//             <SoftwareSkill />
//             <div>
//               {skillsSection.skills.map((skills, i) => {
//                 return (
//                   <p
//                     key={i}
//                     className={
//                       isDark
//                         ? "dark-mode subTitle skills-text"
//                         : "subTitle skills-text"
//                     }
//                   >
//                     {skills}
//                   </p>
//                 );
//               })}
//             </div>
//           </div>
//         </Fade>
//       </div>
//     </div>
//   );
// }


import React, { useContext } from "react";
import "./Skills.scss";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) return null;

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      {/* <div className="skills-main-div"> */}
        {/* <Fade left duration={1000}> */}
          {/* <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div> */}
        {/* </Fade> */}

        <Fade  duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>

            {/* Software Skills */}
            {/* <div className="software-skills-main-div">
              {skillsSection.softwareSkills.map((skill, index) => (
                <div key={index} className="software-skill-inline">
                  {/* {skill.icon ? (
                    <div className="react-icon">{skill.icon}</div>
                  ) : (
                    <i className={skill.fontAwesomeClassname}></i>
                  )}
                  {skill.icon ? (
                    <div className="react-icon">{React.createElement(skill.icon)}</div>
                  ) : (
                    <i className={skill.fontAwesomeClassname}></i>
                  )}

                  <p>{skill.skillName}</p>
                </div>
              ))}
            </div> */}


            <div className="software-skills-main-div">
              {skillsSection.softwareSkills.map((skill, index) => (
                <div key={index} className="software-skill-inline">
                  {skill.icon && (
                    <div className="react-icon">
                      {React.createElement(skill.icon)}
                    </div>
                  )}
                  {/* <p>{skill.skillName}</p> */}
                </div>
              ))}
            </div>

            {/* Text Skills */}
            <div>
              {skillsSection.skills.map((skillText, i) => (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  {skillText}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    // </div>
  );
}
