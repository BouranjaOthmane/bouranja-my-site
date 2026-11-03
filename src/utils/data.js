import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "VueJs", level: 90, color: "bg-blue-600" },
            { name: "Blade", level: 95, color: "bg-orange-500" },
            { name: "React", level: 50, color: "bg-indigo-500" },
            { name: "bootstrap", level: 90, color: "bg-purple-800" },
            { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
        ],
    },
    {
        title: "Backend + Database + DevOps",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Laravel", level: 95, color: "bg-green-500" },
            { name: "MySQL", level: 90, color: "bg-yellow-600" },
            { name: "Git", level: 95, color: "bg-orange-700" },
            { name: "Linux", level: 85, color: "bg-blue-600" },
            { name: "Docker", level: 60, color: "bg-red-700" },

        ],
    },
    // {
    //     title: "Database",
    //     icon: Database,
    //     description: "Managing and optimizing data storage",
    //     skills: [
    //         { name: "MongoDB", level: 88, color: "bg-green-600" },
    //         { name: "MongoDb", level: 85, color: "bg-blue-700" },
    //         { name: "Redis", level: 80, color: "bg-red-500" },
    //         { name: "Prisma", level: 82, color: "bg-indigo-600" },
    //         { name: "Firebase", level: 78, color: "bg-yellow-600" },
    //     ],
    // },
    // {
    //     title: "DevOps",
    //     icon: Cloud,
    //     description: "Deploying and scaling applications",
    //     skills: [
    //         { name: "Docker", level: 82, color: "bg-blue-600" },
    //         { name: "AWS", level: 78, color: "bg-orange-600" },
    //         { name: "Vercel", level: 90, color: "bg-gray-900" },
            
    //         { name: "CI/CD", level: 75, color: "bg-purple-600" },
    //     ],
    // },
];

export const TECH_STACK = [
    "JavaScript",
    "PHP",
    "HTML5",
    "jQuery",
    "Ajax",
    "Sass",
    "LARAVEL",
    "VUEJS",
    "React JS",
    "Tailwind CSS",
    "bootstrap",
    "MySQL",
    "Git",
    "Linux",

];
export const STATS = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "Online Store Web Site E-commerce",
        description:
            "Developed a user-friendly online store website for e-commerce, streamlining the process of browsing, purchasing, and managing digital products. The platform enables users to easily explore a wide range of items, add products to their cart, and securely complete transactions in real time.",
        image: PROJECT_IMG_1,
        tags: ["hostinger builder", "STRIPE", "PayPal"],
        liveUrl: "https://www.extripguide.com/",
        githubUrl: "https://www.extripguide.com/",
        featured: false,
        category: "Full Stack Web Developer",
    },
    {
        id: 2,
        title: "Online Fitness Club Management Application Development",
        description:
            "Built with Laravel, Vue.js, and MySQL, the application delivers a robust, scalable, and secure solution. Its responsive design ensures seamless usability across devices for both administrators and members.",
        image: PROJECT_IMG_2,
        tags: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
        liveUrl: "https://gestionfitnesshero.com/",
        githubUrl: "https://gestionfitnesshero.com/",
        featured: false,
        category: "Full Stack Web Developer",
    },
    {
        id: 3,
        title: "Landing Page Quad - Web Site Development",
        description:
            "Build Landing Page Quad Service Activity",
        image: PROJECT_IMG_3,
        tags: ["HTML", "CSS", "JavaScript", "Analytics"],
        liveUrl: "https://www.quadtangervillameryem.com/",
        githubUrl: "https://www.quadtangervillameryem.com/",
        featured: false,
        category: "Full Stack Web Developer",
    },
    {
        id: 4,
        title: "Project Pick-up / Reservations",
        description:
            "DS Pick-up Test Drive & After-Sales Service (SAV), a web application for managing reservations with clients, agents, and mechanics, as well as tracking tasks.",
        image: PROJECT_IMG_4,
        tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack Web Developer",
    },
    {
        id: 5,
        title: "Build Employee Management System",
        description:
            "Build an Employee Management System with Laravel, AdminLTE, and MySQL—Effortlessly Manage Vacations and Work Certificates.",
        image: PROJECT_IMG_5,
        tags: ["LARAVEL", "AdminLTE", "MySQL"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack Web Developer",
    },
    {
        id: 6,
        title: "School Management System Using Laravel 10",
        description:
            "Discover a powerful School Management System using Laravel 10 that streamlines admin tasks and boosts communication between Admins, Teachers, Students, and Parents. Admins can manage Classes, assign Courses, and track academic progress. Teachers create and share Exercises and Quizzes, while Students access content, submit work, and monitor results. Parents stay updated on their child’s performance, making this an all-in-one solution for smart school management.",
        image: PROJECT_IMG_6,
        tags: ["Laravel", "Amazon S3", "MySQL"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack Web Developer",
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2021",
        title: "Web Development Internship.",
        company: "GENERALE PERFORMANCE",
        description:
            "Development and maintenance of a website (CodeIgniter / AngularJS). / Performed maintenance on a web application",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2022",
        title: "Développeur web Full Stack Web Developer",
        company: "Alikar MAROC.",
        description:
            "I created and developed the landing page for the Alikar Maroc website, boosting the brand’s online visibility. I maintained and enhanced the Mercedes Pick-up platform by adding new features and ensuring database stability, with V1 focused on managing client and agent reservations, and V2 expanding to include mechanics and mission tracking. In an AI project, I developed a front-end platform integrated with a Flask backend to detect car damages from photos and automatically generate detailed accident reports. Additionally, I built a smart front-end solution for efficient after-sales service and mission tracking across delivery, logistics, sales, and vehicle operations.",
        icon: Code2,
        color: "bg-purple-500",
    },
    {
        year: "2023",
        title: "Project freelens",
        company: "Freelance",
        description:
            "Development of an online web application for gym management. The application streamlines member management, including registration, subscription handling, and attendance tracking.",
        icon: Code2,
        color: "bg-orange-500",
    },
    {
        year: "2024",
        title: "Web Developer",
        company: "Logiciel Lab",
        description:
            "I developed an Invoice Billing Application using Laravel, Vue.js, and MySQL, featuring invoice management, dynamic product addition, and advanced functionalities like permission control, reminders, and calendar integration. Additionally, I have experience in developing dynamic and responsive websites tailored to user needs.",
        icon: Code2,
        color: "bg-yellow-500",
    },
    {
        year: "2025",
        title: "IT Manager",
        company: "GESTION GLASS",
        description:
            "As a Full Stack Web Developer Web Developer, I specialize in integrating APIs and external services, managing security, optimizing performance, and developing responsive websites and web applications. My work also involves thorough testing and debugging, along with implementing effective SEO strategies to enhance online visibility.",
        icon: Code2,
        color: "bg-green-500",
    },
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challenges into elegant solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/OthmanBouranja",
        color: "hover: text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/othman-bouranja-055a68208/",
        color: "hover: text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "https://x.com/BouranjaOthman",
        color: "hover: text-sky-400",
        bgColor: "hover:bg-sky-500/10",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Morocco,Tanger",
    },
    {
        icon: Mail,
        label: "Email",
        value: "bouranjaothmane@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "06 55 70 55 97",
    },
];