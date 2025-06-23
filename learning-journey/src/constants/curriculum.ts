export const CURRICULUM = {
  foundation: {
    title: "Foundation Year (Age 12-13)",
    description: "Master the basics of web development",
    modules: [
      {
        id: "html-css",
        title: "HTML & CSS",
        badge: "🛠️ Builder Basics",
        lessons: [
          { id: "html1", title: "Document Structure", description: "Learn HTML5 document structure" },
          { id: "html2", title: "Forms & Inputs", description: "Create interactive forms" },
          { id: "css1", title: "Flexbox & Grid", description: "Modern layout techniques" }
        ]
      },
      {
        id: "git",
        title: "Git & GitHub",
        badge: "👨‍💻 Version Control",
        lessons: [
          { id: "git1", title: "Repositories", description: "Create and manage repos" },
          { id: "git2", title: "Branching", description: "Work with branches" }
        ]
      }
    ]
  },
  intermediate: {
    title: "Intermediate Year (Age 13-14)",
    description: "Build dynamic websites",
    modules: [
      {
        id: "javascript",
        title: "JavaScript",
        badge: "✨ Interactive Sites",
        lessons: [
          { id: "js1", title: "DOM Manipulation", description: "Change page content dynamically" },
          { id: "js2", title: "Async/Await", description: "Handle asynchronous operations" }
        ]
      },
      {
        id: "react",
        title: "React",
        badge: "⚛️ Component Master",
        lessons: [
          { id: "react1", title: "Components", description: "Build reusable UI components" },
          { id: "react2", title: "Hooks", description: "Use state and effects" }
        ]
      }
    ]
  },
  advanced: {
    title: "Advanced Year (Age 15-16)",
    description: "Full-stack development",
    modules: [
      {
        id: "backend",
        title: "Backend (Node/ASP.NET)",
        badge: "🚀 Full Stack",
        lessons: [
          { id: "node1", title: "API Design", description: "Create RESTful APIs" },
          { id: "net1", title: "MVC Pattern", description: "Implement MVC architecture" }
        ]
      }
    ]
  }
};