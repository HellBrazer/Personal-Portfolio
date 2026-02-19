import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    project_risk,
    project_search,
    project_visa,
    project_h1b_visa,
    project_doc_search,
    project_workforce
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const education = [
    {
        degree: "Bachelor of Technology - Mechanical Engineering",
        institution: "Indian Institute of Technology Roorkee",
        year: "2019 - 2023",
        description: "Relevant Coursework: Probability & Statistics, Linear Algebra, Data Structures in C/C++, DBMS. Skills: C++, Data Structures.",
        tags: ["IIT Roorkee", "B.Tech", "DSA"],
        icon: "school",
    },
    {
        degree: "Higher Secondary Education - CBSE",
        institution: "St. Xavier's Sr. Sec. School, Bhopal",
        year: "2017 - 2018",
        description: "Completed Higher Secondary Education.",
        tags: ["High School", "CBSE"],
        icon: "school",
    },
];

const experiences = [
    {
        company_name: "EXL",
        location: "Gurugram, Haryana, India",
        roles: [
            {
                title: "Consultant II",
                date: "Sep 2025 - Present",
                points: [
                    "Upcoming role in Gurugram, India.",
                ],
            }
        ]
    },
    {
        company_name: "MathLogic",
        location: "Gurugram, Haryana, India",
        roles: [
            {
                title: "Consultant",
                date: "Dec 2024 - Sep 2025",
                points: [
                    "Led alternate credit scoring model dev using SMS/transaction data to evaluate thin-file borrowers.",
                    "Built scalable pipelines with PySpark/Airflow for automated drift monitoring and model validation.",
                    "Partnered with stakeholders to integrate risk models into underwriting, optimized credit strategies.",
                ],
            },
            {
                title: "Analyst",
                date: "Jul 2023 - Dec 2024",
                points: [
                    "Deployed ML models for acquisition/repeat borrowers using multi-source data, improving underwriting.",
                    "Executed end-to-end analytics (feature eng, EDA, model eval) to support risk strategies.",
                    "Translated analytical outputs into business recommendations, supporting strategic growth.",
                ],
            }
        ]
    },
    {
        company_name: "Technocolabs Softwares Inc.",
        location: "Indore, Madhya Pradesh, India",
        roles: [
            {
                title: "Machine Learning Developer",
                date: "Nov 2022 - Dec 2022",
                points: [
                    "Designed and implemented a three-stage retrieval pipeline, evaluating Sentence-BERT and DistilBERT models using similarity search, Maximal Marginal Relevance (MMR), and other advanced techniques to enhance search performance.",
                    "Improved retrieval efficiency by reducing query response time by 15% and increasing average similarity scores by 12%.",
                    "Delivered a faster and more accurate document search system by optimizing model selection and refining retrieval strategies.",
                ],
            }
        ]
    },
];

const testimonials = [
    {
        testimonial:
            "Versatile Data Scientist creating impactful solutions in credit risk and predictive modelling.",
        name: "Arpit's Mgr",
        designation: "Lead",
        company: "FN MathLogic",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

const projects = [
    {
        name: "Ride Sharing Algo",
        subtitle: "Graph Theory • Matching • Optimization",
        description:
            "Implemented graph-based matching algorithms to optimize ride-pooling efficiency. The system minimizes total detour distance while maximizing vehicle occupancy, significantly improving route planning and resource utilization.",
        tags: [
            { name: "Python", color: "blue-text-gradient" },
            { name: "Algorithms", color: "green-text-gradient" },
            { name: "Graph", color: "pink-text-gradient" },
        ],
        image: project_workforce,
        source_code_link: "https://github.com/HellBrazer/Ride-sharing-Matching-Algorithm",
        color: "#3B82F6",
    },
    {
        name: "Doc Search Pipeline",
        subtitle: "RAG • LangChain • ChromaDB",
        description:
            "Built a high-performance document search engine using Retrieval-Augmented Generation (RAG). Integrated ChromaDB for vector storage and LangChain for orchestration, delivering accurate context-aware search results from large document corpora.",
        tags: [
            { name: "NLP", color: "blue-text-gradient" },
            { name: "LangChain", color: "green-text-gradient" },
            { name: "ChromaDB", color: "pink-text-gradient" },
        ],
        image: project_doc_search,
        source_code_link: "https://github.com/HellBrazer/Document-Search-Pipeline-using-LangChain",
        color: "#10B981",
    },
    {
        name: "H1B Visa Prediction",
        subtitle: "ML • Gradient Boosting • Streamlit",
        description:
            "Developed a predictive model to assess H1B visa approval chances. Utilized Gradient Boosting classifiers optimized via Bayesian hyperparameter tuning, achieving a 12% improvement in F1 score. Deployed with an interactive Streamlit dashboard.",
        tags: [
            { name: "Scikit-learn", color: "blue-text-gradient" },
            { name: "Streamlit", color: "green-text-gradient" },
            { name: "Stats", color: "pink-text-gradient" },
        ],
        image: project_h1b_visa,
        source_code_link: "https://github.com/HellBrazer/H1-B-Visa-Prediction-WebApp",
        color: "#8B5CF6",
    },
    {
        name: "Workforce Opt",
        subtitle: "Optimization • Linear Programming",
        description:
            "Designed a workforce planning solution using linear programming techniques. The model optimizes staff allocation against demand curves to minimize costs while maintaining service usage levels, enhancing operational efficiency.",
        tags: [
            { name: "Python", color: "blue-text-gradient" },
            { name: "Optimization", color: "green-text-gradient" },
            { name: "Analytics", color: "pink-text-gradient" },
        ],
        image: project_workforce,
        source_code_link: "https://github.com/HellBrazer/Optimization-of-Workforce-Planning",
        color: "#F59E0B",
    },
];

const technicalArsenal = [
    {
        category: "Languages",
        skills: ["Python", "SQL", "C++", "JavaScript", "TypeScript"],
        color: "text-blue-400 border-blue-500/20",
        rgb: "59, 130, 246",
    },
    {
        category: "AI / ML",
        skills: ["Scikit-learn", "Pandas", "NumPy", "NLP", "Hugging Face", "LangChain", "OpenAI API", "XGBoost", "PyTorch"],
        color: "text-purple-400 border-purple-500/20",
        rgb: "168, 85, 247",
    },
    {
        category: "Cloud & DevOps",
        skills: ["AWS", "Docker", "Kubernetes", "Apache Airflow", "Snowflake", "Git", "CI/CD"],
        color: "text-cyan-400 border-cyan-500/20",
        rgb: "6, 182, 212",
    },
    {
        category: "Frameworks & Libs",
        skills: ["React.js", "Node.js", "Streamlit", "Flask", "PySpark"],
        color: "text-yellow-400 border-yellow-500/20",
        rgb: "234, 179, 8",
    },
];

export { services, technologies, experiences, testimonials, projects, technicalArsenal, education };
