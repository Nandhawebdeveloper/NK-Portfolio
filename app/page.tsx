import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Briefcase, User, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">
                  Front-End Developer
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Turning Ideas into <span className="text-primary">Digital Experiences</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  2+ years of experience building responsive and user-friendly web applications with React, Redux, and
                  modern front-end technologies.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button size="lg" className="gap-1">
                    View Projects <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/images/profile.png"
                  alt="Nandhakumar K - Developer Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Expertise</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Specialized in creating modern, responsive web applications with the latest technologies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: <Code className="h-10 w-10 mb-4 text-primary" />,
              title: "Front-End Development",
              description:
                "Building responsive and interactive user interfaces with React, Redux, and modern JavaScript.",
              skills: ["React JS", "Redux", "JavaScript", "HTML5", "CSS3"],
            },
            {
              icon: <Briefcase className="h-10 w-10 mb-4 text-primary" />,
              title: "UI/UX Implementation",
              description: "Implementing pixel-perfect designs with a focus on usability and modern UI trends.",
              skills: ["Bootstrap", "Tailwind CSS", "Responsive Design", "Animations"],
            },
            {
              icon: <User className="h-10 w-10 mb-4 text-primary" />,
              title: "Development Tools",
              description: "Utilizing modern development tools and practices for efficient workflow.",
              skills: ["VS Code", "Postman", "Git", "Agile Methodology"],
            },
          ].map((item, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 h-full">
              <CardContent className="pt-6 flex flex-col items-center flex-1">
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {item.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container px-4 md:px-6 bg-muted/40 py-12 rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my recent work at Bloombyte Software Solutions, all built with{" "}
              <span className="font-semibold text-primary">React JS</span> technology.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "School Management System",
              description: "Comprehensive ERP solution for schools with student, teacher, and admin portals.",
              image: "/images/react-project-1.png",
              tags: ["React", "Redux", "Bootstrap"],
            },
            {
              title: "College Management System",
              description: "Feature-rich platform for college administration and student management.",
              image: "/images/react-project-2.png",
              tags: ["React", "JavaScript", "CSS"],
            },
            {
              title: "Training Institute Software",
              description: "Custom solution for training institutes to manage courses, students, and instructors.",
              image: "/images/react-project-3.png",
              tags: ["React", "Redux", "Responsive Design"],
            },
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-[200px] w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/projects">
            <Button variant="outline" size="lg" className="gap-1">
              View All Projects <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center border rounded-lg p-8 bg-card">
          <Mail className="h-12 w-12 text-primary mb-2" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Work Together</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
          <Link href="/contact">
            <Button size="lg" className="mt-2">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
