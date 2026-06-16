export interface Project {
  title: string;
  description: string;
  img: string;
  codelink: string;
  demolink: string;
  techs: string[];
}

export const mainProjects: Project[] = [
  {
    "title": "TabFlux",
    "description": "A platform designed to bridge academic learning with industry-oriented technical skills.",
    "img": "/projectImages/tabflux.png",
    "codelink": "https://github.com/ManishJoc14/tabflux-frontend",
    "demolink": "https://www.tabflux.com/",
    "techs": ["Next.js", "Tailwind CSS", "Redux Toolkit Query"]
  },
  {
    "title": "Lexia",
    "description": "An AI-assisted IELTS preparation platform that evaluates user responses and generates automated feedback using intelligent processing pipelines.",
    "img": "/projectImages/lexia.png",
    "codelink": "https://github.com/ManishJoc14/lexia",
    "demolink": "https://lexia-ielts.vercel.app/",
    "techs": ["Next.js", "Tailwind CSS", "AI/NLP"]
  }
];

export const webProjects: Project[] = [
  {
    title: "Kavyasudha",
    description:
      "Preserving the soul of Nepali music through collaboration, creativity, and cultural dedication.",
    img: "/projectImages/kavya_sudha.png",
    codelink: "https://github.com/kayo-badger/ks-frontend",
    demolink: "https://kavyasudha.vercel.app/",
    techs: ["Next.js", "Shadcn", "Framer Motion"]
  },
  {
    title: "Customer Management",
    description:
      "This is a website developed with Next.js and TailwindCSS when I started learning Next.js with Next.js documentation.",
    img: "/projectImages/Acme.png",
    codelink: "https://github.com/ManishJoc14/nextjs-dashboard",
    demolink: "https://nextjs-dashboard-three-khaki-10.vercel.app/dashboard",
    techs: ["Next.js", "Vercel", "TailwindCSS"]
  },
  {
    title: "IMS Template",
    description:
      "A modern and reusable CMS dashboard template built with React, MUI, and Redux Toolkit. Designed as a scalable base for future admin panel or CMS projects.",
    img: "/projectImages/ims_template.png",
    codelink: "https://github.com/bibekjoshi01/ims-template",
    demolink: "https://ims-template-two.vercel.app/",
    techs: ["React", "MUI", "Redux Toolkit"]
  },
  {
    title: "Zingo",
    description:
      "Zingo is chat application made with React, Node.js, Express.js and Socket.io. It's the doorway to a world of friendships waiting to be discovered.",
    img: "/projectImages/zingo.png",
    codelink: "https://github.com/ManishJoc14/zingo",
    demolink: "https://zingo-delta.vercel.app/",
    techs: ["React", "Node.js", "Socket.io"]
  },
  {
    title: "Parkify",
    description:
      "Book parking spots for cars, bikes, and scooters with ease. Save time and avoid the hassle of finding parking in busy areas.",
    img: "/projectImages/parking_spot.png",
    codelink: "https://github.com/ManishJoc14/parkify",
    demolink: "https://parkify-smart.vercel.app/",
    techs: ["Next.js", "Supabase", "Shadcn UI"]
  },
  {
    title: "React Commerce",
    description:
      "This is an e-commerce site developed with REACT and full CSS. In this site, you can see all products, add them to cart, and much more.",
    img: "/projectImages/ecommerce.png",
    codelink: "https://github.com/ManishJoc14/e-commerce-website",
    demolink: "https://manishjoc14.github.io/e-commerce-website/",
    techs: ["React", "CSS", "React-Toastify"]
  },
  // {
  //   title: "Smart Reader",
  //   description:
  //     "This is a website who wants to read pdfs and do translations in english to nepali while reading.",
  //   img: "/projectImages/smart_reader.png",
  //   codelink: "https://github.com/ManishJoc14/smart-reader",
  //   demolink: "https://smart-reader-navy.vercel.app/",
  //   techs: ["Next.js", "Azure", "TailwindCSS"]
  // },
];

export const aiMlProjects: Project[] = [
  {
    title: "TBVision",
    description:
      "Tuberculosis Detection and Analysis from Chest X-Ray Images with Uncertainty Estimation using trained model and LLMs.",
    img: "/projectImages/tbvision.png",
    codelink: "https://github.com/ManishJoc14/TBVision",
    demolink: "https://www.youtube.com/watch?v=1Haj5EFSahw",
    techs: ["Python", "Deep Learning", "LLMs"]
  },
  {
    title: "Witness AI",
    description:
      "A neutral, intelligent observer of a user’s mental state, developed for the Nepal-US Hackathon. It acts as an AI companion for mental health tracking.",
    img: "/projectImages/witness_ai.png",
    codelink: "https://github.com/ManishJoc14/witness-ai",
    demolink: "https://www.youtube.com/watch?v=0rjiXp3Oltw",
    techs: ["Next.js", "FastAPI", "PostgreSQL"]
  },
  {
    title: "Smart Dustbin (Waste Classifier)",
    description:
      "A FastAPI application that powers a smart dustbin by identifying waste using YOLOv8s for object detection and DenseNet201 for classification. It classifies waste into Recyclable or Organic categories using the TACO dataset.",
    img: "/projectImages/smart_dustbin.png",
    codelink: "https://github.com/bibekjoshi01/smart-dustbin-frontend/commits/main/",
    demolink: "https://www.youtube.com/watch?v=k0Sm13ca6_A",
    techs: ["FastAPI", "YOLOv8s", "DenseNet201"]
  },
  {
    title: "QA Agent",
    description:
      "A modular, agentic QA engine that can automatically test websites or URLs using AI and registered tools. It leverages an LLM provider (currently Mistral) and allows tool-based automation like browser actions and bash commands.",
    img: "/projectImages/qa_agent.png",
    codelink: "https://github.com/ManishJoc14/QAAgent",
    demolink: "https://qa-agent-gamma.vercel.app/",
    techs: ["Next.js", "TypeScript", "LLM Tools"]
  },
  {
    title: "Nepal Constitution Chatbot (RAG)",
    description:
      "An intelligent chatbot that answers questions based on the Nepal Constitution using Retrieval-Augmented Generation (RAG) with LangChain, LLaMA 3, and Streamlit.",
    img: "/projectImages/rag_chatbot.png",
    codelink: "https://github.com/ManishJoc14/machine_learning",
    demolink: "https://manishjoc14-machine-lea-ragnepal-constitution-chatbotapp-p7g897.streamlit.app/",
    techs: ["LangChain", "LLaMA 3", "Streamlit"]
  },
  {
    title: "NLP Chatbot Trainer",
    description:
      "A customizable chatbot training platform built with PyTorch and spaCy. Users can upload their own `intents.json`, train a neural network, and interact with a personalized AI chatbot — all through a Streamlit interface.",
    img: "/projectImages/nlp_chatbot_trainer.png",
    codelink: "https://github.com/ManishJoc14/machine_learning/tree/main/NLP",
    demolink: "https://manishjoc14-machine-learning-nlp-chatbotapp-1ainfn.streamlit.app/",
    techs: ["PyTorch", "SpaCy", "Streamlit", "NumPy"]
  },
  {
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
    title: "Celestials",
    description:
      "Celestials is a website developed with THREE.js, Vite, TailwindCSS, and Framer Motion for animations. In this site, you can see all the asteroids and satellites.",
    img: "/projectImages/celestials.png",
    codelink: "https://github.com/Team-CELESTIALS/CELESTIALS-frontend",
    demolink: "https://team-celestials.vercel.app/",
    techs: ["THREE.js", "Vite", "TailwindCSS"]
  },
  {
    title: "Shireto",
    description:
      "This is a website developed for Team Shireto with Next.js, TailwindCSS, and ShadCN.",
    img: "/projectImages/shireto.png",
    codelink: "https://github.com/ManishJoc14/sireto",
    demolink: "https://shireto.vercel.app/",
    techs: ["Next.js", "TailwindCSS", "ShadCN"]
  },
];

export const appProjects: Project[] = [
  {
    title: "QuizIt",
    description:
      "A cross-platform quiz application built with Expo, TypeScript, and NativeWind. Designed for mobile and web, it allows users to take interactive quizzes with a responsive and intuitive UI.",
    img: "/projectImages/quizit.png",
    codelink: "https://github.com/ManishJoc14/QuizIt",
    demolink: "https://quizit.expo.app/",
    techs: ["Expo", "TypeScript", "NativeWind"]
  }
];
