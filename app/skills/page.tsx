import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Layout, Database, Terminal, Workflow, Lightbulb } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Front-End Technologies",
      description: "Core technologies I use to build interactive user interfaces",
      skills: [
        { name: "React JS", level: 90 },
        { name: "Redux", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      ],
    },
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "UI Frameworks & Libraries",
      description: "Tools I use to create responsive and beautiful interfaces",
      skills: [
        { name: "Bootstrap", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Material UI", level: 80 },
        { name: "SASS/SCSS", level: 85 },
        { name: "Styled Components", level: 75 },
      ],
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "State Management & APIs",
      description: "How I manage application state and connect to backend services",
      skills: [
        { name: "Redux", level: 85 },
        { name: "Context API", level: 90 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 70 },
        { name: "Axios", level: 90 },
      ],
    },
    {
      icon: <Terminal className="h-8 w-8 text-primary" />,
      title: "Development Tools",
      description: "Tools and environments I use for efficient development",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Git & GitHub", level: 85 },
        { name: "Postman", level: 90 },
        { name: "Chrome DevTools", level: 90 },
        { name: "npm/yarn", level: 85 },
      ],
    },
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      title: "Methodologies & Practices",
      description: "Approaches I follow for quality code and efficient workflow",
      skills: [
        { name: "Responsive Design", level: 90 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Test-Driven Development", level: 75 },
        { name: "Cross-Browser Compatibility", level: 85 },
        { name: "Performance Optimization", level: 80 },
      ],
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Soft Skills",
      description: "Non-technical skills that enhance my development capabilities",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Adaptability", level: 90 },
      ],
    },
  ]

  return (
    <div className="container py-12 md:py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">My Skills & Expertise</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive overview of my technical skills, tools, and methodologies that I've mastered over 2+ years as
          a Front-End Developer.
        </p>
      </section>

      {/* Skills Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{category.description}</p>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Technical Proficiency */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've worked with throughout my career, with a strong focus on{" "}
            <span className="font-semibold text-primary">React JS</span> development
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "React",
            "Redux",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "Tailwind CSS",
            "SASS",
            "Material UI",
            "Styled Components",
            "REST APIs",
            "GraphQL",
            "Axios",
            "Context API",
            "React Router",
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "npm",
            "yarn",
            "Webpack",
            "Babel",
            "ESLint",
            "Jest",
            "React Testing Library",
            "Responsive Design",
            "Mobile First",
            "Cross-Browser Compatibility",
            "Performance Optimization",
            "Accessibility",
            "SEO",
          ].map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className={`text-sm py-1 px-3 ${tech === "React" ? "bg-primary text-primary-foreground" : ""}`}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="bg-muted/40 rounded-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Continuous Learning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and skills I'm currently exploring and developing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Next.js",
              description: "Exploring server-side rendering and static site generation for React applications.",
            },
            {
              title: "React Native",
              description: "Expanding my skills to mobile app development using React Native.",
            },
            {
              title: "Advanced Animation",
              description: "Deepening my knowledge of complex animations using libraries like Framer Motion.",
            },
            {
              title: "State Management",
              description: "Exploring modern state management solutions like Zustand and Jotai.",
            },
            {
              title: "Web Accessibility",
              description: "Ensuring applications are accessible to users of all abilities.",
            },
            {
              title: "Performance Optimization",
              description: "Advanced techniques for optimizing React application performance.",
            },
          ].map((item, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
