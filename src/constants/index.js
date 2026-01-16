import project1 from "../assets/projects/portfolio-flutter.jpg";
import project2 from "../assets/projects/yahtzee.jpg";
import project3 from "../assets/projects/flashcards.jpg";
import project4 from "../assets/projects/battleship.jpg";
import project5 from "../assets/projects/todo-app.jpg";
import project6 from "../assets/projects/chicago-crime-app.jpg";
import project7 from "../assets/projects/stack-staging.jpg";
import project8 from "../assets/projects/portfolio-react.jpg";
import project9 from "../assets/projects/realestate.jpg";

export const HERO_CONTENT = `
I am a passionate Software Developer with over Five years of experience building and owning scalable, high-performance backend systems and workflow-driven platforms at enterprise scale. I specialize in backend development, API design, and system integration using Java, Spring Boot, Node.js, and cloud-native architectures on AWS and Azure. My experience includes designing high-availability REST APIs, event-driven microservices with Kafka and Redis, and re-architecting legacy systems into modular microservices to improve reliability, performance, and deployment efficiency. I am driven by solving complex system-level problems and leveraging my technical expertise to deliver resilient, efficient, and impactful software solutions.`;

export const ABOUT_TEXT = `I am a Software Developer with over three years of experience designing, building, and scaling backend systems and workflow-driven platforms used at enterprise scale. I am currently pursuing my Master’s in Computer Science at the Illinois Institute of Technology. My core expertise lies in backend development using Java, Spring Boot, and Node.js, with a strong focus on REST APIs, microservices architectures, event-driven systems, and cloud-native deployments on AWS and Azure.

Previously at Freshworks, I worked on the FreshService ITSM platform, where I engineered high-availability backend services supporting incident, service request, and self-service workflows for global enterprise customers. I played a key role in modernizing legacy systems into modular microservices, building workflow automation services, and implementing event-driven processing using Kafka and Redis. These initiatives improved system reliability, reduced backend failures, accelerated deployment cycles, and significantly lowered operational and support overhead through structured root-cause analysis and improved observability.

In my current role, I lead end-to-end development of a centralized operations and community platform, building API-driven task management, ticketing, and collaboration systems. I have also developed LLM-powered self-service solutions using GPT-4 and vector databases to enable intelligent knowledge retrieval and automation. Alongside backend systems, I bring experience in frontend development with React and data-driven projects, including predictive modeling and analytics. I am actively seeking full-time Software Developer roles where I can contribute to building scalable, reliable, and impactful software systems.

You can reach me at codedbydivya@gmail.com
.
`;

export const EXPERIENCES = [
  {
    year: "January 2025 - Present",
    role: "Software Developer",
    company: "Community Dreams Foundation",
    description: `Owned end-to-end development of a workflow-driven operations and community platform, building task synchronization, ticketing, self-service, and collaboration capabilities using Node.js and React. Led implementation of LLM-powered knowledge retrieval, RBAC, CI/CD pipelines, and automation to improve operational efficiency and reduce manual support.`,
    technologies: [
      "Node.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "MySQL",
      "Pinecone",
      "REST APIs",
      "Git",
      "GitHub Actions",
      "OpenAI",
    ],
  },
  {
    year: "July 2020 - July 2023",
    role: "Software Developer",
    company: "Freshworks",
    description: `Worked as a backend engineer on the FreshService ITSM platform, building and scaling incident, service request, and workflow automation services used by global enterprise customers. Focused on API reliability, event-driven microservices, CI/CD, and operational excellence, significantly reducing ticket volume and improving platform stability at scale.`,
    technologies: [
      "Java",
      "Node.js",
      "Spring Boot",
      "JavaScript",
      "REST APIs",
      "MySQL",
      "Kafka",
      "Redis",
      "AWS",
      "React",
      "Git",
      "Tomcat",
      "SonarQube",
    ],
  },
  {
    year: "March 2020 - June 2020",
    role: "Software Developer",
    company: "Hubstream",
    description: `Developed backend services for a centralized investigation management system, implementing workflow-driven APIs, alerting mechanisms, and data pipelines using Java and Spring Boot. Improved case processing speed, system performance, and operational visibility for investigative teams.`,
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "React",
      "Selenium",
      "Azure",
      "MySQL",
    ],
  },
  {
    year: "March 2019 - December 2019",
    role: "Data Science Intern",
    company: "IPSG Systems",
    description: `Performed business-focused data analysis on large retail datasets, building forecasting models and Power BI dashboards to support inventory planning and merchandising decisions across 800+ stores. Delivered actionable insights through data transformation, visualization, and statistical analysis.`,
    technologies: [
      "Python",
      "R",
      "SQL",
      "Power BI",
      "Data Analysis",
      "Statistical Modeling",
      "Data Visualization",
      "Digital Image Processing",
    ],
  },
];

export const EDUCATION = [
  {
    collegeName: "Illinois Institute of Technology",
    subjects: [
      "Computer Networks",
      "Machine Learning",
      "Science of Programming",
      "BigData",
      "Information Security",
      "Advanced Database Organization",
      "Mobile Applications Development",
      "Software Project Management",
      "Data Preparation and Analysis",
      "Software Quality Management",
    ],
  },
  {
    collegeName: "Anna University",
    subjects: [
      "Programming with C",
      "Java and Python",
      "Data Structures",
      "Database Management Systems",
      "Operating Systems",
      "Computer Architecture",
      "Cloud Computing",
      "Computer Networks",
      "Design and Analysis of Algorithms",
    ],
  },
];
export const PROJECTS = [
  {
    title: "Portfolio-Flutter",
    image: project1,
    description:
      "Developed a simple yet effective cross-platform portfolio application using Flutter, designed to run seamlessly on desktop, mobile, iPad, and web. The app consists of a single screen that presents my professional experience, skills, and projects in a clean and visually appealing manner. Focused on creating a responsive UI to ensure an optimal viewing experience across different devices.",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "Yahtzee Game",
    image: project2,
    description:
      "Developed a digital version of the classic dice game Yahtzee using Flutter, providing a seamless gaming experience across desktop, mobile, iPad, and web. The game includes dice rolling mechanics, score calculations, and an intuitive user interface for easy gameplay. Designed a responsive layout to ensure smooth interaction on different screen sizes. Implemented game logic to handle turn-based scoring and validation of different Yahtzee combinations.",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "Flashcards App",
    image: project3,
    description:
      "Developed a cross-platform flashcards application using Flutter, designed for mobile, desktop, and iPad. The app allows users to create, manage, and review flashcards for effective learning. Integrated a NoSQL database for efficient data storage and retrieval, ensuring a smooth user experience. Implemented a responsive UI to adapt seamlessly across different screen sizes, making learning accessible on any device.",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "Battleships Game",
    image: project4,
    description:
      "Developed a multiplayer Battleships game using Flutter, allowing users to play against AI or other players over a server. The app features a login and registration system for user authentication. Players can view available opponents in a dashboard and join open games hosted on a server. Implemented smooth game mechanics, including ship placement, turn-based attacks, and real-time updates. Designed a responsive UI to ensure a seamless experience across different devices.",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "TODO App",
    image: project5,
    description:
      "Developed a cross-platform to-do application using Flutter, designed for mobile, iPad, and desktop. The app enables users to create, manage, and track tasks efficiently, with data persistence powered by Hive, a lightweight NoSQL database. Implemented a clean and responsive UI to ensure a smooth user experience across different screen sizes. Focused on simplicity and performance, allowing users to organize their tasks seamlessly.",
    technologies: ["Flutter", "Dart", "Hive", "NoSQL"],
  },
  {
    title: "Chicago Crime Analysis",
    image: project6,
    description:
      "Developed a predictive model that forecasts crime hotspots in Chicago with 87% accuracy, aiding law enforcement in optimizing patrol routes and improving public safety. Leveraged time series analysis to identify crime patterns, reducing police response time by 20% through data-driven decision-making. Built an interactive ShinyApp dashboard for real-time crime trend visualization, integrating MySQL for efficient data storage and retrieval. Applied advanced machine learning techniques to enhance crime prediction capabilities.",
    technologies: [
      "R Programming",
      "ShinyApp",
      "MySQL",
      "Time Series Analysis",
      "ggplot2",
      "Machine Learning",
    ],
  },
  {
    title: "Stack Staging Management System",
    image: project7,
    description:
      "Designed and developed an internal Stack Staging Management System to track real-time stack availability using AWS login data. Automated the update process for deployed frontend and backend branches, enhancing workflow efficiency for internal teams. Integrated Spring Boot for backend services, Ember.js for a responsive UI, and MySQL for structured data storage. The system streamlined staging environment management, reducing manual intervention and improving development lifecycle efficiency.",
    technologies: ["Spring Boot", "Java", "Ember.js", "MySQL", "AWS"],
  },
  {
    title: "Portfolio-React",
    image: project8,
    description:
      "Developed and deployed a responsive portfolio website using React.js and Tailwind CSS, ensuring a sleek and modern UI. Implemented Framer Motion for smooth animations, enhancing user experience with dynamic transitions. Utilized JSON for structured data management, enabling easy content updates. Hosted on Vercel for fast and reliable performance. The portfolio showcases projects, skills, and experience, providing an engaging way to present my work.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "JSON",
      "Vercel",
    ],
  },

  {
    title: "Realestate House Price Prediction",
    image: project9,
    description:
      "Developed a machine learning model that predicts real estate prices with 91% accuracy, providing valuable market insights. Designed an interactive web UI using React.js, allowing users to input features like bedrooms, bathrooms, and area to estimate property prices. Leveraged MySQL for efficient data storage and ggplot for visualizing price trends. This project helps homebuyers and investors make data-driven decisions in the housing market.",
    technologies: ["Python", "ggplot", "MySQL", "React.js"],
  },
];

export const CONTACT = {
  address: "Chicago, Illinois ",
  phoneNo: "+1 312 885 9732",
  email: "codedbydivya@gmail.com",
};
