import { useNavigate } from "react-router-dom";
import "./base.css"; // Import the CSS file

function Base() {
    const navigate = useNavigate();

    const topics = [
        {
            title: "HTML & CSS",
            description: "Docs for HTML & CSS",
            path: "/HTMLandCSS",
            featured: true
        },
        {
            title: "JavaScript",
            description: "Docs for JavaScript",
            path: "/JS"
        },
        {
            title: "Python",
            description: "Docs for Python",
            path: "/python3",
            featured: true
        },
        {
            title: "Node & Express",
            description: "Docs for Node & Express",
            path: "/NodeExpress"
        },
        {
            title: "MongoDB",
            description: "Docs for MongoDB",
            path: "/MongoDb"
        }
        ,
        {
            title: "ReactJS",
            description: "Docs for Other Topics",
            path: "/ReactJS"
        },
    
        {
            title: "Redux",
            description: "Docs for Redux",
            path: "/Redux"
        },
        {
            title: "React Native",
            description: "Docs for React Native",
            path: "/ReactNative"
        },
        {
            title: "Data Structures & Algorithms",
            description: "Docs for DSA",
            path: "/DSA",
            featured: true
        },
        {
            title: "Hosting",
            description: "Docs for Hosting",
            path: "/Hosting"
        },
        {
            title: "System Design",
            description: "Docs for System Design",
            path: "/SystemDesign"
        },
        {
            title: "Git",
            description: "Docs for Git",
            path: "/Git"
        },
        {
            title: "SQL",
            description: "Docs for SQL",
            path: "/Sql"
        },
        {
            title: "Microservices",
            description: "Docs for Microservices",
            path: "/Microservices"
        },
        {
            title: "Docker",
            description: "Docs for Docker",
            path: "/Docker",
            featured: true
        },
        {
            title: "Kubernetes",
            description: "Docs for Kubernetes",
            path: "/Kubernetes"
        },
        {
            title: "TypeScript",
            description: "Docs for TypeScript",
            path: "/TypeScript"
        },
        {
            title: "Next.js",
            description: "Docs for Next.js",
            path: "/NextJs"
        },
        {
            title: "Nest.js",
            description: "Docs for Nest.js",
            path: "/NestJs"
        },
        {
            title: "GraphQL",
            description: "Docs for GraphQL",
            path: "/GraphQL"
        },
        {
            title: "TypeORM",
            description: "Docs for TypeORM",
            path: "/TypeORM"
        },
        {
            title: "Clean Code",
            description: "Docs for Clean Code",
            path: "/CleanCode"
        },
        {
            title: "Workflow",
            description: "Docs for Workflow",
            path: "/Workflow"
        },
        {
            title: "Others",
            description: "Docs for Other Topics",
            path: "/Others"
        },
        {
            title: "AI & ML",
            description: "Docs for Other Topics",
            path: "/AIML"
        },
        {
            title: "Robotics",
            description: "Docs for Other Topics",
            path: "/Robotics"
        },
        {
            title: "Django",
            description: "Docs for Other Topics",
            path: "/Django"
        },
        {
            title: "PHP",
            description: "Docs for Other Topics",
            path: "/Php"
        }

    ];

    const handleTopicClick = (path) => {
        navigate(path);
    };

    return (
    <div className="topics-container">
      <div className="header">
        <div className="header-title">
        </div>
        
      </div>
      
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="topic-card"
            onClick={() => handleTopicClick(topic.path)}
          >
            <h3 className="topic-title">{topic.title}</h3>
            <p className="topic-description">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Base;