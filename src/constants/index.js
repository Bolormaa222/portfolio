import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `MERN, React Native Python developer with almost 4 years of experience.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023/02 - 2024/07",
    role: "Data Engineer (Remote)",
    company: "Revuze LLC, Israel",
    description: `Worked on to scrap data on website with various scraping tools  such as Playwright, Selenium. Also worked on Sql queries in pyspark.`,
    technologies: ["Python", "Playwright", "Selenium", "Scrapy", "Pyspark"
     ],
  },
  {
    year: "2021/02 - 2022/02",
    role: "Mobile Developer",
    company: "ICT LLC, Mongolia",
    description: `Worked as mobile developer in React Native. And Created multiple mobile application in react native and developed app in Android and IOS. Connected  React native app to backend server REST API.`,
    technologies: ["Javascript", "React.js", "Typescript" ],
  },
  {
    year: "2020/01 - 2021/02",
    role: "Mobile Developer",
    company: "Able Soft LLC, Mongolia",
    description: `Worked as mobile developer in React Native. And Created multiple mobile application in react native and developed app in Android and IOS. Connected  React native app to backend server REST API.`,
    technologies: ["Javascript", "React.js", "Typescript" ],
  },
  
];

export const PROJECTS = [
  {
    title: "CV builder",
    image: project1,
    description:
      "Small project that created cv without authentication. Download cv document in pdf. Built by nodejs, reactjs, css. Database is Mongodb.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link:"https://cvback-yj18.onrender.com"
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  }
];

export const CONTACT = {
  address: "Ireland",
  phoneNo: "+353 870313895",
  email: "bolormaaenkhbat222@gmail.com",
};
