export interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  codelink: string;
  demolink: string;
  techs: string[];
}

export const mainProjects: Project[] = [
  {
    "id": 1,
    "title": "TCIOE CMS",
    "description": "A powerful content management system built for our college using React, MUI, and Redux Toolkit. Enables admins to manage events, blogs, users, and more.",
    "img": "/projectImages/tcioe_cms.png",
    "codelink": "https://github.com/ManishJoc14/tcioe-cms",
    "demolink": "https://tcioe-cms.vercel.app/",
    "techs": ["React", "MUI", "Redux Toolkit"]
  },
  {
    "id": 2,
    "title": "Parking spot",
    "description": "Parking spot is a fully functional website developed with Next.js, Supabase, and PostgreSQL. In this site, you can book a parking spot and see all the details.",
    "img": "/projectImages/parking_spot.png",
    "codelink": "https://github.com/ManishJoc14/parking-spot",
    "demolink": "https://parking-spot-one.vercel.app/",
    "techs": ["Next.js", "Supabase", "PostgreSQL"]
  }
];

export const webProjects: Project[] = [
  {
    id: 3,
    title: "Customer Management",
    description:
      "This is a website developed with Next.js and TailwindCSS when I started learning Next.js with Next.js documentation.",
    img: "/projectImages/Acme.png",
    codelink: "https://github.com/ManishJoc14/nextjs-dashboard",
    demolink: "https://nextjs-dashboard-three-khaki-10.vercel.app/dashboard",
    techs: ["Next.js", "Vercel", "TailwindCSS"]
  },
  {
    id: 4,
    title: "IMS Template",
    description:
      "A modern and reusable CMS dashboard template built with React, MUI, and Redux Toolkit. Designed as a scalable base for future admin panel or CMS projects.",
    img: "/projectImages/ims_template.png",
    codelink: "https://github.com/bibekjoshi01/ims-template",
    demolink: "https://ims-template-two.vercel.app/",
    techs: ["React", "MUI", "Redux Toolkit"]
  },
  {
    id: 5,
    title: "React Commerce",
    description:
      "This is an e-commerce site developed with REACT and full CSS. In this site, you can see all products, add them to cart, and much more.",
    img: "/projectImages/ecommerce.png",
    codelink: "https://github.com/ManishJoc14/e-commerce-website",
    demolink: "https://manishjoc14.github.io/e-commerce-website/",
    techs: ["React", "CSS", "React-Toastify"]
  },
  {
    id: 6,
    title: "Zingo",
    description:
      "Zingo is chat application made with React, Node.js, Express.js and Socket.io. It's the doorway to a world of friendships waiting to be discovered.",
    img: "/projectImages/zingo.png",
    codelink: "https://github.com/ManishJoc14/zingo",
    demolink: "https://zingo-delta.vercel.app/",
    techs: ["React", "Node.js", "Socket.io"]
  },
  {
    id: 7,
    title: "Habit Buddy",
    description:
      "A habit tracker web app with a unique tech stack — React for the frontend and C++ for the backend logic. Built with Redux Thunk for state management and styled using Tailwind CSS.",
    img: "/projectImages/habit_buddy.png",
    codelink: "https://github.com/ManishJoc14/Habit_Buddy",
    demolink: "",
    techs: ["React", "Thunk", "Tailwind", "C++"]
  },
  {
    id: 8,
    title: "Smart Reader",
    description:
      "This is a website who wants to read pdfs and do translations in english to nepali while reading.",
    img: "/projectImages/smart_reader.png",
    codelink: "https://github.com/ManishJoc14/smart-reader",
    demolink: "https://smart-reader-navy.vercel.app/",
    techs: ["Next.js", "Azure", "TailwindCSS"]
  },
  // {
  //   id: 9,
  //   title: "Cricket Live",
  //   description:
  //     "A live cricket score application that provides real-time updates and match information. Built using React with a focus on fast and responsive UI.",
  //   img: "/projectImages/cricket_live.png",
  //   codelink: "https://github.com/ManishJoc14/cricket-live",
  //   demolink: "https://cricket-live-kappa.vercel.app/",
  //   techs: ["Next.js", "Tailwind CSS"]
  // },
  // {
  //   id: 10,
  //   title: "First Next.js Portfolio",
  //   description:
  //     "This is my first portfolio site developed with Next.js, TailwindCSS, and Framer Motion for animations.",
  //   img: "/projectImages/portfolio.png",
  //   codelink: "https://github.com/ManishJoc14/manis",
  //   demolink: "https://manis-beta.vercel.app/",
  //   techs: ["Next.js", "TailwindCSS", "Framer Motion"]
  // }
];

export const aiMlProjects: Project[] = [
  {
    id: 11,
    title: "Nepal Constitution Chatbot (RAG)",
    description:
      "An intelligent chatbot that answers questions based on the Nepal Constitution using Retrieval-Augmented Generation (RAG) with LangChain, LLaMA 3, and Streamlit.",
    img: "/projectImages/rag_chatbot.png",
    codelink: "https://github.com/ManishJoc14/machine_learning",
    demolink: "https://manishjoc14-machine-lea-ragnepal-constitution-chatbotapp-p7g897.streamlit.app/",
    techs: ["LangChain", "LLaMA 3", "Streamlit"]
  },
  {
    id: 12,
    title: "NLP Chatbot Trainer",
    description:
      "A customizable chatbot training platform built with PyTorch and spaCy. Users can upload their own `intents.json`, train a neural network, and interact with a personalized AI chatbot — all through a Streamlit interface.",
    img: "/projectImages/nlp_chatbot_trainer.png",
    codelink: "https://github.com/ManishJoc14/machine_learning/tree/main/NLP",
    demolink: "https://manishjoc14-machine-learning-nlp-chatbotapp-1ainfn.streamlit.app/",
    techs: ["PyTorch", "SpaCy", "Streamlit", "NumPy"]
  },
  {
    id: 13,
    title: "Smart Dustbin (Waste Classifier)",
    description:
      "A FastAPI application that powers a smart dustbin by identifying waste using YOLOv8s for object detection and DenseNet201 for classification. It classifies waste into Recyclable or Organic categories using the TACO dataset.",
    img: "/projectImages/smart_dustbin.png",
    codelink: "https://github.com/ManishJoc14/Waste-Classifier",
    demolink: "https://github.com/bibekjoshi01/smart-dustbin-frontend/commits/main/",
    techs: ["FastAPI", "YOLOv8s", "DenseNet201", "TACO Dataset"]
  },
  {
    id: 14,
    title: "GROQ AI Chatbot",
    description:
      "A chatbot built using GROQ SDK and the LLaMA 3.3 70B model (Versatile). Developed with Next.js and TypeScript, providing fast and intelligent AI interactions.",
    img: "/projectImages/groq_ai.png",
    codelink: "https://github.com/ManishJoc14/GROQ-AI",
    demolink: "https://groq-ai-chatbot.vercel.app/",
    techs: ["Next.js", "TypeScript", "GROQ SDK"]
  },
];

export const threeDProjects: Project[] = [
  {
    id: 15,
    title: "Celestials",
    description:
      "Celestials is a website developed with THREE.js, Vite, TailwindCSS, and Framer Motion for animations. In this site, you can see all the asteroids and satellites.",
    img: "/projectImages/celestials.png",
    codelink: "https://github.com/Team-CELESTIALS/CELESTIALS-frontend",
    demolink: "https://team-celestials.vercel.app/",
    techs: ["THREE.js", "Vite", "TailwindCSS"]
  },
  {
    id: 16,
    title: "Neev – Birthday Website",
    description:
      "A creative and interactive birthday website built for a friend, combining 3D elements with smooth animations using React Fiber, Framer Motion, and Next.js.",
    img: "/projectImages/neev_birthday.png",
    codelink: "https://github.com/ManishJoc14/neev",
    demolink: "https://neev-birthday-2symdv6m2-manishjoc14s-projects.vercel.app/",
    techs: ["Next.js", "Framer Motion", "React Fiber", "Tailwind CSS"]
  },
  {
    id: 17,
    title: "Shireto",
    description:
      "This is a website developed for Team Shireto with Next.js, TailwindCSS, and ShadCN.",
    img: "/projectImages/shireto.png",
    codelink: "https://github.com/ManishJoc14/sireto",
    demolink: "https://shireto.vercel.app/",
    techs: ["Next.js", "TailwindCSS", "ShadCN"]
  },
]

export const appProjects: Project[] = [
  {
    id: 18,
    title: "QuizIt",
    description:
      "A cross-platform quiz application built with Expo, TypeScript, and NativeWind. Designed for mobile and web, it allows users to take interactive quizzes with a responsive and intuitive UI.",
    img: "/projectImages/quizit.png",
    codelink: "https://github.com/ManishJoc14/QuizIt",
    demolink: "https://quizit.expo.app/",
    techs: ["Expo", "TypeScript", "NativeWind"]
  }
];