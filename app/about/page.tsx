import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Briefcase, GraduationCap, Heart, Github, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 space-y-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Front-End Developer with a passion for creating elegant, user-friendly web experiences.
          </p>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm currently working at Bloombyte Software Solutions as a Front-End Developer, where I specialize in
              building responsive and interactive web applications.
            </p>
            <p>
              With over 2 years of experience in the industry, I've developed a strong foundation in React JS, Redux,
              JavaScript, Bootstrap, CSS, and HTML.
            </p>
            <p>
              I'm passionate about turning complex problems into elegant solutions and continuously exploring new
              technologies to enhance my skill set.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[300px] h-[400px] rounded-lg overflow-hidden border-4 border-primary/20">
            <Image src="/images/profile.png" alt="Nandhakumar K - Developer Portrait" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The path that led me to become a Front-End Developer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <GraduationCap className="h-10 w-10 mb-4 text-primary" />,
              title: "Education",
              description:
                "B.E - Computer Science and Engineering, Anna University, where I developed a strong foundation in programming principles and software development.",
            },
            {
              icon: <Briefcase className="h-10 w-10 mb-4 text-primary" />,
              title: "Professional Growth",
              description:
                "Joined Bloombyte Software Solutions as a Front-End Developer, where I've been working on Education ERP Software solutions since 2023.",
            },
            {
              icon: <Code className="h-10 w-10 mb-4 text-primary" />,
              title: "Continuous Learning",
              description:
                "Constantly expanding my knowledge through online courses, documentation, and hands-on projects to stay current with the latest technologies.",
            },
          ].map((item, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 h-full">
              <CardContent className="pt-6 flex flex-col items-center">
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What I Do */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My approach to front-end development and the services I provide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Responsive Web Development",
              description:
                "I create websites that look and function beautifully across all devices, from desktops to smartphones.",
              tags: ["Mobile-First", "Responsive Design", "Cross-Browser Compatibility"],
            },
            {
              title: "Interactive UI Development",
              description:
                "I build interactive user interfaces with smooth animations and transitions for an engaging user experience.",
              tags: ["React", "State Management", "Animations"],
            },
            {
              title: "Front-End Architecture",
              description:
                "I design scalable and maintainable front-end architectures that can grow with your business needs.",
              tags: ["Component Design", "State Management", "Performance Optimization"],
            },
            {
              title: "UI/UX Implementation",
              description:
                "I transform design mockups into pixel-perfect, functional interfaces with attention to detail.",
              tags: ["Pixel-Perfect", "Design Systems", "Accessibility"],
            },
          ].map((item, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Personal Interests */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Beyond Coding</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">What I'm passionate about outside of development</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Github className="h-10 w-10 mb-4 text-primary" />,
              title: "Open Source Contribution",
              description:
                "I actively contribute to open-source projects to give back to the developer community and improve my skills.",
            },
            {
              icon: <BookOpen className="h-10 w-10 mb-4 text-primary" />,
              title: "Technical Blogging",
              description:
                "I write technical articles to share my knowledge and experiences with the wider developer community.",
            },
            {
              icon: <Heart className="h-10 w-10 mb-4 text-primary" />,
              title: "Continuous Learning",
              description:
                "I'm constantly exploring new technologies and methodologies to stay at the forefront of web development.",
            },
          ].map((item, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 h-full">
              <CardContent className="pt-6 flex flex-col items-center">
                {item.icon}
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
