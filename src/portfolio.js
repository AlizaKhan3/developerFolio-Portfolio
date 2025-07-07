/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// import { SiAxios } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
// import { SiJavascript } from "react-icons/si";
// import { SiReact } from "react-icons/si";
// import { SiMysql } from "react-icons/si";
// import { SiHtml5 } from "react-icons/si";
import {MdOutlineSettingsEthernet} from "react-icons/md";
import {FaGitAlt} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiPostman,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiFirebase,
  SiMysql,
  SiAxios,
  SiGithub,
  SiBootstrap
} from "react-icons/si";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aliza Khan",
  title: "Hi all, I'm Aliza",
  subTitle: emoji(
    "A passionate Frontend Developer 🚀 with experience in building dynamic and responsive web applications using JavaScript, React.js, and modern libraries & frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AlizaKhan3",
  linkedin: "https://www.linkedin.com/in/aliza-khan3/",
  gmail: "alizaadi2@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "PASSIONATE FRONTEND DEVELOPER EXPLORING MODERN WEB TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive user interfaces using React.js"
    ),
    emoji(
      "⚡ Create modern, pixel-perfect designs with Tailwind CSS, Material UI, and Ant Design"
    ),
    emoji("⚡ Implement Firebase for authentication, database, and hosting"),
    emoji("⚡ Manage projects efficiently using GitHub, Yarn, and NPM")
  ],

  softwareSkills: [
    {skillName: "HTML5", icon: SiHtml5},
    {skillName: "CSS3", icon: SiCss3},
    {skillName: "JavaScript ES6", icon: SiJavascript},
    {skillName: "React", icon: SiReact},
    {skillName: "Context API", icon: MdOutlineSettingsEthernet},
    {skillName: "Redux", icon: SiRedux},
    {skillName: "Restful APIs (Axios)", icon: SiAxios},
    {skillName: "Postman", icon: SiPostman},
    {skillName: "Git", icon: FaGitAlt},
    {skillName: "GitHub", icon: SiGithub},
    {skillName: "Bootstrap", icon: SiBootstrap},
    {skillName: "Tailwind", icon: SiTailwindcss},
    {skillName: "Material UI", icon: SiMui},
    {skillName: "Ant Design", icon: SiAntdesign},
    {skillName: "Firebase", icon: SiFirebase},
    {skillName: "SQL", icon: SiMysql}
  ],
  display: true
};

// export { skillsSection };
// const skillsSection = {
//   title: "What I Do",
//   subTitle: "PASSIONATE FRONTEND DEVELOPER EXPLORING MODERN WEB TECHNOLOGIES",
//   skills: [
//     emoji("⚡ Develop highly interactive and responsive user interfaces using React.js"),
//     emoji("⚡ Create modern, pixel-perfect designs with Tailwind CSS, Material UI, and Ant Design"),
//     emoji("⚡ Implement Firebase for authentication, database, and hosting"),
//     emoji("⚡ Manage projects efficiently using GitHub, Yarn, and NPM")
//   ],

//   /* Updated software skills */
//   softwareSkills: [
//     // {
//     //   skillName: "HTML5",
//     //   fontAwesomeClassname: "fab fa-html5"
//     // },
//     // {
//     //   skillName: "CSS3",
//     //   fontAwesomeClassname: "fab fa-css3-alt"
//     // },
//     // {
//     //   skillName: "JavaScript",
//     //   fontAwesomeClassname: "fab fa-js"
//     // },
//     // {
//     //   skillName: "React.js",
//     //   fontAwesomeClassname: "fab fa-react"
//     // },
//     // {
//     //   skillName: "Tailwind CSS",
//     //   fontAwesomeClassname: "fas fa-wind"
//     // },
//     // {
//     //   skillName: "Material UI",
//     //   fontAwesomeClassname: "fas fa-palette"
//     // },
//     // {
//     //   skillName: "Firebase",
//     //   fontAwesomeClassname: "fas fa-fire"
//     // },
//     // {
//     //   skillName: "SQL",
//     //   fontAwesomeClassname: "fas fa-database"
//     // },
//     // {
//     //   skillName: "GitHub",
//     //   fontAwesomeClassname: "fab fa-github"
//     // },
//     // {
//     //   skillName: "Yarn",
//     //   fontAwesomeClassname: "fab fa-yarn"
//     // },
//     // {
//     //   skillName: "NPM",
//     //   fontAwesomeClassname: "fab fa-npm"
//     // },
//     //  {
//     //   skillName: "Restful API",
//     //   fontAwesomeClassname: "fab fa-restful"
//     // },
//     //  {
//     //   skillName: "Context API",
//     //   fontAwesomeClassname: "fab fa-context-api"
//     // },
//     //  {
//     //   skillName: "Axios",
//     //   fontAwesomeClassname: "fas fa-network-wired"
//     // },
//     softwareSkills: [
//     {
//       skillName: "HTML5",
//       icon: SiHtml5,
//     },
//     {
//       skillName: "CSS3",
//       icon: SiCss3 ,
//     },
//     {
//       skillName: "JavaScript",
//       icon: SiJavascript
//     },
//     {
//       skillName: "React.js",
//       icon: SiReact
//     },
//     {
//       skillName: "Axios",
//       icon: SiAxios
//     },
//     // {
//     //   skillName: "GitHub",
//     //   icon: <FaGithub />
//     // },
//     {
//       skillName: "SQL",
//       icon: SiMysql
//     },
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Karachi, UBIT",
      logo: require("./assets/images/uokLogo.jpg"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "January 2023 - January 2027",
      desc: "Ranked among the top 10 students with a CGPA of 3.63. Actively participating in technical and research-based initiatives while contributing to various student communities.",
      descBullets: [
        "📌 Participated in the Climate Action Ideathon, contributing innovative solutions for sustainability.",
        "🚀 Competed in NASA Space Apps Challenge as part of the 'Landsat Explorers' team, working on Landsat Reflectance Data.",
        "🎨 Graphics Team Member in Microsoft Learn Student Ambassadors - University of Karachi, designing visual assets for community engagement.",
        "💻 Technical Team Member in Google Developer Students Club - UoK, contributing to tech-related tasks and projects."
      ]
    },

    {
      schoolName: "Government Degree Girls College Shaikh Zaid Centre",
      logo: require("./assets/images/collegeLogo.jpeg"),
      subHeader: "Intermediate (Pre-Engineering)",
      duration: "August 2020 - July 2022",
      desc: "Achieved an A+ grade with 84.73%, focused on core subjects including Mathematics, Physics, and Chemistry."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design/Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer Trainee",
      company: "360XpertSolutions",
      companylogo: require("./assets/images/360XpertSolutionsLogo.jpeg"),
      date: "October 2024 – December 2024",
      desc: "Worked as a Frontend Developer Trainee, contributing to multiple web development projects by building responsive and interactive user interfaces.",
      descBullets: [
        "📌 Developed a complete responsive Real Estate Website using ReactJS and Material UI.",
        "🚀 Created a dynamic and visually appealing Landing Page optimized for performance and usability.",
        "💡 Focused on enhancing UI/UX with reusable React components and efficient styling techniques.",
        "⚡ Ensured cross-browser compatibility and mobile responsiveness for seamless user experience."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "SHOWCASING INNOVATIVE PROJECTS THAT REFLECT MY EXPERTISE IN WEB DEVELOPMENT & PROBLEM-SOLVING",
  projects: [
    {
      image: require("./assets/images/skyShareLogo.png"),
      projectName: "SkyShare",
      projectDesc:
        "SkyShare is a ReactJS web app for easy text and file sharing across devices, inspired by AirForShare. Users can save text or upload files and access them from any device.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skyshare.surge.sh/"
        },
        {
          name: "Github Repository",
          url: "https://github.com/AlizaKhan3/SkyShare"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/oniFoodLogo.png"),
      projectName: "OniFood",
      projectDesc:
        "OniFood is a responsive online food delivery platform where users can browse restaurants, order food, and track deliveries. It includes an interactive UI, a dynamic admin dashboard for managing restaurants and orders, and real-time data storage with Firebase Firestore",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://onlinefood-7799a.web.app/"
        },
        {
          name: "Github Repository",
          url: "https://github.com/AlizaKhan3/Food-Delivery-Website"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications I'm currently enrolled in",

  achievementsCards: [
    {
      title: "Web and Mobile App Developer/ Mern Stack Developer",
      subtitle:
        "Enrolled in the Web & Mobile App Development Course at Jawan Pakistan",
      image: require("./assets/images/jawanPakistanLogo.jpeg"),
      imageAlt: "Certificate",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // }
      ]
    },
    {
      title: "NASA Space Apps Challenge 2024",
      subtitle:
        "Participated in the NASA Space Apps Challenge 2024 as part of the 'Landsat Explorers' team, developing the project 'Landsat Reflectance Data: On the Fly and at Your Fingertips.'",
      image: require("./assets/images/nasa-logo.png"),
      imageAlt: "Participation Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: require("./assets/images/NASAcertificate.jpeg")
        }
      ]
    },

    {
      title: "Associate Data Analyst in SQL",
      subtitle: "Enrolled in Associate Data Analyst in SQL track at Datacamp",
      image: require("./assets/images/datacampLogo.png"),
      imageAlt: "Datacamp",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/aliza-khan3_sql-datacamp-backenddevelopment-activity-7290964543193677824-Lo66?utm_source=share&utm_medium=member_desktop"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3218111001",
  email_address: "alizaadi2@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
