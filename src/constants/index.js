import { fable, sparksoft, wideout } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    threejs,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Intern",
        company_name: "Fable",
        icon: fable,
        iconBg: "#FF5A91",
        date: "January 2024 - April 2024",
        points: [
            "Led a software development internship project that is dedicated to enhancing accessibility by addressing the direct feedback from Fable's diverse user base.",
            "We've built a widget that submits Fable requests via URLs or slugs, resulting in informative summary cards within Figma.",
            "In these cards are feedbacks from users which helps Fable's developers address them."
        ],
    },
    {
        title: "Software Developer",
        company_name: "Sparksoft Solutions, Inc.",
        icon: sparksoft,
        iconBg: "#F53643",
        date: "November 2019 - June 2022",
        points: [
            "Spearheaded the development of the prototype of Coca-Cola PH and E-TESDA's OFW RISE and iSTAR programs, which offers comprehensive entrepreneurship courses for OFWs and MSMEs.",
            "Developed interactive learning components, including games, lectures, videos, and modules using HTML/CSS/JS inside a learning management system called Moodle.",
            "Developed and maintained web applications using JavaScript, React, and Node.js, delivering high-quality software solutions to meet client requirements and project deadlines."
        ],
    },
    {
        title: "Creative Developer",
        company_name: "WideOut Workforces, Inc.",
        icon: wideout,
        iconBg: "#014E75",
        date: "April 2019 - November 2019",
        points: [
            "Translated client requirements, graphic designs, and specifications into functional advertisements, utilizing core technologies aligned with client preferences.",
            "Designed and crafted static and dynamic Banner Ads, employing HTML5, CSS3, and JavaScript to enhance user engagement and interactivity.",
            "Conducted comprehensive cross-browser and multi-resolution testing to ensure optimal functionality and promptly resolved any issues identified.",
"            Transformed raw client assets into captivating and interactive rich media ad executions, enhancing brand visibility and audience engagement.",
            "Determined the digital optimization and presentation strategy for images and multimedia content on designated platforms."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/GuichoEstrada',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/lcestrada',
    }
];

export const projects = [
    {
        iconUrl: threejs,
        theme: 'btn-back-red',
        name: 'iStar Program',
        description: "The iSTAR program uses a Learning Management System that builds on the success of TESDA's long-running Sari-Sari Store Training and Access to Resources (STAR) Program, which aims to train female micro entrepreneurs and provide them with financial resources to help them grow their businesses. It includes interactive learning components, including games, lectures, videos, and modules using HTML/CSS/JS. - Username: cokeaccess-1 | Password: Cokeaccess-1",
        link: 'https://moodle1.sparksoft-demo.com/moodle/',
    },
    {
        iconUrl: threejs,
        theme: 'btn-back-green',
        name: 'OFW Rise',
        description: 'The OFW-RISE or Overseas Filipino Workers Re-Integration through Skills & Entrepreneurship Program provides returning OFWs with an online course that they can attend through the TESDA Online Program (TOP), allowing them to translate their business ideas into business plans. It includes interactive learning components, including games, lectures, videos, and modules using HTML/CSS/JS and is also run through a Learning Management System. - Username: cokeaccess-1 | Password: Cokeaccess-1 ',
        link: 'https://moodle1.sparksoft-demo.com/moodle/',
    },
    {
        iconUrl: threejs,
        theme: 'btn-back-blue',
        name: 'Fable OAuth Integrated Figma Widget',
        description: 'As part of a team during my internship, I led the building of a widget that allows users to submit Fable requests via URLs or slugs, generating informative summary cards with user feedback within Figma. This feedback mechanism enables users facing accessibility issues to guide developers in addressing their specific challenges, ensuring accessibility remains a key consideration.',
        link: 'https://prezi.com/p/bicfzliuuqqn/?present=1',
    },
    {
        iconUrl: threejs,
        theme: 'btn-back-pink',
        name: 'CRWN Clothing',
        description: 'An clothing e-commerce website built with React, GraphQL, and Firebase. Also utilizes Stripe as its payment system.',
        link: 'https://crwn-clothing-ruddy-ten.vercel.app/',
    },
    {
        iconUrl: threejs,
        theme: 'btn-back-black',
        name: 'Portfolio',
        description: 'My own personal portfolio built with Nextjs, Tailwind CSS and Framer-motion. (Mobile-responsive)',
        link: 'https://portfolio-kappa-seven-58.vercel.app/projects',
    }
];